import {NextResponse} from 'next/server'
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const apiBaseURL = process.env.API_BASE_URL;

const refreshToken = process.env.ZOHO_REFRESH_TOKEN;
const clientID = process.env.ZOHO_CLIENT_ID;
const clientSecret = process.env.ZOHO_CLIENT_SECRET;

const leadsAPIEndpoint = process.env.API_LEADS_URL;

async function getRefreshToken() {
    const url = `${apiBaseURL}?client_id=${clientID}&client_secret=${clientSecret}&grant_type=refresh_token&refresh_token=${refreshToken}`

    try{
        const response = await axios.post(url);
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


// async function submitLeadData(inputData){
//     const accessToken = await getRefreshToken();
//     const url = leadsAPIEndpoint;
//     const headers = {
//        'Content-Type': 'application/json',
//         Authorization: `Bearer ${accessToken}`
//     }

//     const leadData = {data: [inputData]};
        
//     console.log("Data: ", leadData)
//     console.log('\n\n')
//     // const leadData = {
//     //     data: [
//     //         {
//     //             First_Name: '',
//     //             Last_Name: '',
//     //             Email: '',
//     //             Phone: ''
//     //         }
//     //     ]
//     // };

//     try {
//         response = await axios.post(url, leadData, { headers })
//         .then(response => {
//             console.log('Lead created successfully: ', response.data);
//         })
//     } catch (error) {
//         console.log(leadsAPIEndpoint)
//         console.log('Unsuccessful', error.response ? error.response.data : error.message)
//     }
// }



export async function POST(request){
    const inputData = await request.json(); //parse incoming data
    console.log('Data Properly Received...')

    const accessToken = await getRefreshToken();
    const url = leadsAPIEndpoint;
    const headers = {
       'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`
    }

    const leadData = {data: [inputData]};
        
    console.log("Data: ", leadData)
    console.log('\n\n')
    // const leadData = {
    //     data: [
    //         {
    //             First_Name: '',
    //             Last_Name: '',
    //             Email: '',
    //             Phone: ''
    //         }
    //     ]
    // };

    try {
        await axios.post(url, leadData, { headers })
        .then(response => {
            console.log('Lead created successfully: ', response.data);
        })
    } catch (error) {
        console.log(leadsAPIEndpoint)
        console.log('Unsuccessful', error.response ? error.response.data : error.message)
    }



    //submitLeadData(data)
    // console.log('Data sent to submitLeadData Function...');

    return NextResponse.json({message: 'Successfully connected'})
    
    
}