"use client"
import axios from 'axios'
import { useState } from 'react';
import {validateState} from './utils/stateValidation';

export default function QuoteForm() {
    // State for form data and error messages
    const [formData, setFormData] = useState({
        First_Name: '',
        Last_Name: '',
        Email: '',
        Phone: '',
        Street: '',
        City: '',
        State: '',
        Zip_Code: '',
    });
   
    const [errorMessage, setErrorMessage] = useState('')

    // Handle form data changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        if (name === 'State') {
            const isValid = validateState(value);
            setErrorMessage(isValid ? '' : 'Please enter a valid state!');

        }
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        
        try {
            const response = await axios.post('storm-shield-builders.vercel.app/api/leads', formData);
            console.log('Success: ',formData)
            console.log(response)
        } catch (error) {
            console.error('Error submitting lead', error);
            console.log(formData)
        }
    }
    

    return (
        <section className="QuoteFormContainer">
            <div>
                <h1>Schedule Your FREE Inspection!</h1>
            </div>
          
            <div className="flex justify-center">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="First_Name"></label>
                    <input type="text" id="First_Name" name="First_Name" placeholder="First Name" onChange={handleChange} />

                    <label htmlFor="Last_Name"></label>
                    <input type="text" id="Last_Name" name="Last_Name" placeholder="Last Name" onChange={handleChange} />

                    <label htmlFor="Email"></label>
                    <input type="email" id="Email" name="Email" placeholder="Email" onChange={handleChange} />

                    <label htmlFor="Phone"></label>
                    <input type="tel" id="Phone" name="Phone" placeholder="Phone Number" onChange={handleChange} />

                    <label htmlFor="Street"></label>
                    <input type="text" id="Street" name="Street" placeholder="Street Address" onChange={handleChange} />

                    <label htmlFor="City"></label>
                    <input type="text" id="City" name="City" placeholder="City" onChange={handleChange} />

                    <label htmlFor="State"></label>
                    <input type="text" id="State" name="State" placeholder="State" maxLength={2} onChange={handleChange} />
                    {errorMessage && <p className="QuoteFormContainerError">{errorMessage}</p>}

                    <label htmlFor="Zip_Code"></label>
                    <input type="text" id="Zip_Code" name="Zip_Code" placeholder="Zip Code" maxLength="5" pattern="\d{5}" onChange={handleChange} />

                    <div className="QuoteFormSubmitContainer">
                        <button type="submit" id="submit" className="submit" aria-label="Submit" title="Submit">Submit</button>
                    </div>
                </form>
            </div>
        </section>
    );
}
