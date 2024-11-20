"use client"
import axios from 'axios'
import { useState } from 'react';
import {validateState} from './utils/stateValidation';
import './LeadForm.css'

export default function QuoteForm() {
    // State for form data and error messages
    const [formData, setFormData] = useState({
        Last_Name: '',
        Email: '',
        Phone: '',
        Street: '',
        City: '',
        State: '',
        Zip_Code: '',
    });

    const [isSubmitted, setIsSubmitted] = useState(0);
    const submittedMessage = 'Thank you so much for reaching out a member of our team will be with you shortly.'
   
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
            setIsSubmitted(isSubmitted + 1)
            const response = await axios.post('/api/leads', formData);
            console.log(response)
        } catch (error) {
            console.error('Error submitting lead', error);
            console.log(formData)
        }
    }
    

    return (
        <section className="LeadFormSection">
            <div>
                <h1>Schedule Your FREE Inspection!</h1>
            </div>

            <div className="flex justify-center">

                {isSubmitted == 1 ? <p className='submittedMessage'>{submittedMessage}</p>:
                <form onSubmit={handleSubmit}>

                    <label htmlFor="Last_Name"></label>
                    <input type="text" id="Last_Name" name="Last_Name" placeholder="Name" onChange={handleChange} />

                    <label htmlFor="Email"></label>
                    <input type="email" id="Email" name="Email" placeholder="Email" onChange={handleChange} />

                    <label htmlFor="Phone"></label>
                    <input type="tel" id="Phone" name="Phone" placeholder="Phone Number" maxLength={10} onChange={handleChange} />

                    <label htmlFor="Street"></label>
                    <input type="text" id="Street" name="Street" placeholder="Street Address" maxLength={50} onChange={handleChange} />

                    <label htmlFor="City"></label>
                    <input type="text" id="City" name="City" placeholder="City" maxLength={15} onChange={handleChange} />

                    <label htmlFor="State"></label>
                    <input type="text" id="State" name="State" placeholder="State" maxLength={2} onChange={handleChange} />
                    {errorMessage && <p className="LeadFormContainerError">{errorMessage}</p>}

                    <label htmlFor="Zip_Code"></label>
                    <input type="text" id="Zip_Code" name="Zip_Code" placeholder="Zip Code" maxLength="5" pattern="\d{5}" onChange={handleChange} />

                    <div className="LeadFormSubmitContainer">
                        <button type="submit" id="submit" className="submit" aria-label="Submit" title="Submit">Submit</button>
                    </div>
                </form>
}
            </div>
        </section>
    );
}
