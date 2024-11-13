import axios from 'axios';

export async function GET(request) {
    try {
        // Replace 'https://www.zohoapis.com/crm/v7/Leads' with your actual API endpoint
        const response = await axios.get('https://www.zohoapis.com/crm/v7/Leads?fields=Leads', {
            headers: {
                Authorization: `Bearer ${process.env.ZOHO_ACCESS_TOKEN}`, // Replace with your access token variable
            }
        });

        console.log('Server Reached!!!!')
        return new Response(JSON.stringify({
            status: 'success',
            data: response.data
        }), { status: 200 });
    } catch (error) {
        console.log('Server Reached!!!!!')
        return new Response(JSON.stringify({
            status: 'error',
            message: error.message,
            details: error.response?.data || 'No response data'
        }), { status: 500 });
    }
}