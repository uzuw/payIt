const { google } = require('googleapis');
require('dotenv').config();

// OAuth2 client setup
const oAuth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,         // Your Client ID
  process.env.CLIENT_SECRET,     // Your Client Secret
  'https://developers.google.com/oauthplayground'  // Redirect URI
);

// Set the refresh token
oAuth2Client.setCredentials({
  refresh_token: process.env.REFRESH_TOKEN,  // You'll get this from the OAuth Playground
});

// Function to get access token
async function getAccessToken() {
  try {
    const accessToken = await oAuth2Client.getAccessToken();  // Get access token using refresh token
    console.log('Access Token:', accessToken.token);
    return accessToken.token;
  } catch (error) {
    console.error('Error getting access token:', error);
  }
}

getAccessToken();
