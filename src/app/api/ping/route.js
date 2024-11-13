import axios from 'axios';
import { NextResponse } from 'next/server'


async function getRefreshToken() {
    
    const queryParams = {
        client_id: `${process.env.ZOHO_CLIENT_ID}`,
        client_secret: `${process.env.ZOHO_CLIENT_SECRET}`,
        grant_type: `refresh_token`,
        refresh_token: `${process.env.ZOHO_REFRESH_TOKEN}`
        }

        const testURL = new URL(process.env.API_BASE_URL)
        testURL.search = new URLSearchParams(queryParams).toString();

        console.log('Full URL: ', testURL.toString())
    try{
        const response = await axios.post(testURL)
        //  {
        //     params: new URLSearchParams(queryParams)},
        // {headers: {
        //     'Content-Type': 'application/x-www-form-urlencoded'
        // }}
        // )
        let data = response.data;
        let newAccessToken = data.access_token;

        process.env.ZOHO_ACCESS_TOKEN = response.data.access_token;
        console.log('Token successfully refreshed.')
        console.log('\n\n')

        return(newAccessToken);
    } catch (error){
        console.log('\n\n\n\n')
        console.error('Error refreshing token: ', error.response ? error.response.data : error.message);
        console.log('\n\n\n\n')
    }  
}







export async function GET(request) {
    const accessToken = await getRefreshToken()
    const leadsURL = new URL('https://www.zohoapis.com/crm/v3/Leads');

   const paramFields = {fields: "Last_Name"}

    leadsURL.search = new URLSearchParams(paramFields).toString();
    console.log('\n\n\nFull URL: ', leadsURL.href)

    try {
        // Replace 'https://www.zohoapis.com/crm/v7/Leads' with your actual API endpoint
        const response = await axios.get(leadsURL.href, {
            headers: {
                Authorization: `Bearer ${accessToken}`, // Replace with your access token variable
            },
        });

        console.log('Server Reached!!!!')
        
        return(NextResponse.json(response.data))
    } catch (error) {
        console.log('Failed!', error.data)
        return (NextResponse.json(
            {error: 'Error fetching leads', details: error.status},
            {status: 500}
        ))
    }
}