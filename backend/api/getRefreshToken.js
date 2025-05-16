const { google } = require("googleapis");
require('dotenv').config();

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const CLIENT_SECRET=process.env.GOOGLE_CLIENT_SECRET;
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

const code = '4/0AUJR-x4MZEyf4bEkGjMMvmxvBCbkLRyePuwXqi5nlYFNp0-Q9v9IfcSSOwICWw2McL78Ug';

oAuth2Client.getToken(code)
  .then(({ tokens }) => {
    console.log("✅ Refresh Token:\n", tokens.refresh_token);
  })
  .catch(err => {
    console.error("❌ Failed to get token", err);
  });
