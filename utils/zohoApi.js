import axios from 'axios'

export async function refreshAccessToken(){

    try {
        const response = await axios.post('https://accounts.zoho.com/oauth/v2/token', null, {
            params: {
                client_id: process.env.ZOHO_SELFCLIENT_ID,
                client_secret: process.env.ZOHO_SELFCLIENT_SECRET,
                grant_type: 'refresh_token',
                refresh_token: process.env.ZOHO_REFRESH_TOKEN
            },
        }

        );
        const newAccessToken = response.data.access_token;

        // Store new AccessToken
        process.env.ZOHO_ACCESS_TOKEN = newAccessToken;

        return newAccessToken;
    } catch (error) {
        console.error('Error refreshing access token:', error)
        throw error;
    }
    
}

export async function submitLeadToZoho(data) {
    let accessToken = process.env.ZOHO_ACCESS_TOKEN;

    try {
        // Make a POST request to the Zoho Leads API
        const response = await axios.post(
            'https://www.zohoapis.com/crm/v2/Leads',
            {
                data: [
                    {
                        Last_Name: data.lastName,
                        First_Name: data.first_Name,
                        Email: data.email,
                        Phone: data.phone,
                        Street: data.street,
                        City: data.city,
                        State: data.state,
                        Zip_Code: data.zipCode,
                    }
                ]
            },
            {
             headers: {
                Authorization: `Zoho-oauthtoken ${accessToken}`,
                'Content-Type': 'application/json'
            }
        }
        );
        
        console.log('Lead created successfully:', response.data);
        return response.data;
    } catch (error) {
        // If access token expires run refreshAccessToken
        if (error.response && error.response.status === 401) {
            console.log('Access token expired. Refreshing...');
            accessToken = await refreshAccessToken();
            if (accessToken) {
                // Retry the request with new access token
                return await submitLeadToZoho(data); //Recursive call with the new access token
            }
        }else {
            console.error('Error creating lead', error.response ? error.response.data: error.message);
        }

    }
}