import axios from 'axios'

async function refreshAccessToken() {
    const response = await axios.post(
      'https://accounts.zoho.com/oauth/v2/token',
      {
        refresh_token: process.env.ZOHO_REFRESH_TOKEN,
        client_id: process.env.ZOHO_CLIENT_ID,
        client_secret: process.env.ZOHO_CLIENT_SECRET,
        grant_type: 'refresh_token',
      }
    );
  
    const newAccessToken = response.data.access_token;
    process.env.ZOHO_ACCESS_TOKEN = newAccessToken; // Update in-memory access token
    return newAccessToken;
  }

async function submitLeadToZoho(formData) {
    try {
      const response = await fetch('/api/zohoLead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error('Failed to create lead');
      }
  
      const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.error('Error creating lead:', error);
    }
  }