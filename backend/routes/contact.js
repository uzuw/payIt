const express = require('express');
const router = express.Router();
const { google } = require('googleapis');
const nodemailer = require('nodemailer');
const OAuth2 = google.auth.OAuth2;
require('dotenv').config();

const oauth2Client = new OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  "https://developers.google.com/oauthplayground"
);

oauth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
});

async function sendMail({ name, email, message }) {
  try {
    console.log("Getting access token...");
    const accessToken = await oauth2Client.getAccessToken();
    console.log("Access Token:", accessToken?.token);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "uzuwehe@gmail.com",
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
        accessToken: accessToken.token,
      },
    });

    const mailOptions = {
      from: `"${name}" <uzuwehe@gmail.com>`,
      to: "uzuwehe@gmail.com",
      subject: `Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
      replyTo: email,
    };

    console.log("Sending email with options:", mailOptions);
    const result = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", result);
    return result;
  } catch (error) {
    console.error("Error sending mail:", error?.response?.data || error.message || error);
    throw error;
  }
}

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  console.log("Received POST request with:", { name, email, message });

  if (!name || !email || !message) {
    console.warn("Missing fields:", { name, email, message });
    return res.status(400).json({ error: "Please provide name, email, and message." });
  }

  try {
    const result = await sendMail({ name, email, message });
    res.status(200).json({ success: true, message: "Email sent successfully.", info: result });
  } catch (error) {
    console.error("Failed to send email:", error?.response?.data || error.message || error);
    res.status(500).json({ error: "Failed to send email.", details: error.message });
  }
});

module.exports = router;
