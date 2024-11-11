"use client"
import { useState } from 'react';
import { submitLeadToZoho } from '../../../utils/zohoApi';

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
    const [errorMessage, setErrorMessage] = useState('');

    // U.S. States for validation
    const states = [
        { name: 'Alabama', abbreviation: 'AL' },
        { name: 'Alaska', abbreviation: 'AK' },
        { name: 'Arizona', abbreviation: 'AZ' },
        { name: 'Arkansas', abbreviation: 'AR' },
        { name: 'California', abbreviation: 'CA' },
        { name: 'Colorado', abbreviation: 'CO' },
        { name: 'Connecticut', abbreviation: 'CT' },
        { name: 'Delaware', abbreviation: 'DE' },
        { name: 'Florida', abbreviation: 'FL' },
        { name: 'Georgia', abbreviation: 'GA' },
        { name: 'Hawaii', abbreviation: 'HI' },
        { name: 'Idaho', abbreviation: 'ID' },
        { name: 'Illinois', abbreviation: 'IL' },
        { name: 'Indiana', abbreviation: 'IN' },
        { name: 'Iowa', abbreviation: 'IA' },
        { name: 'Kansas', abbreviation: 'KS' },
        { name: 'Kentucky', abbreviation: 'KY' },
        { name: 'Louisiana', abbreviation: 'LA' },
        { name: 'Maine', abbreviation: 'ME' },
        { name: 'Maryland', abbreviation: 'MD' },
        { name: 'Massachusetts', abbreviation: 'MA' },
        { name: 'Michigan', abbreviation: 'MI' },
        { name: 'Minnesota', abbreviation: 'MN' },
        { name: 'Mississippi', abbreviation: 'MS' },
        { name: 'Missouri', abbreviation: 'MO' },
        { name: 'Montana', abbreviation: 'MT' },
        { name: 'Nebraska', abbreviation: 'NE' },
        { name: 'Nevada', abbreviation: 'NV' },
        { name: 'New Hampshire', abbreviation: 'NH' },
        { name: 'New Jersey', abbreviation: 'NJ' },
        { name: 'New Mexico', abbreviation: 'NM' },
        { name: 'New York', abbreviation: 'NY' },
        { name: 'North Carolina', abbreviation: 'NC' },
        { name: 'North Dakota', abbreviation: 'ND' },
        { name: 'Ohio', abbreviation: 'OH' },
        { name: 'Oklahoma', abbreviation: 'OK' },
        { name: 'Oregon', abbreviation: 'OR' },
        { name: 'Pennsylvania', abbreviation: 'PA' },
        { name: 'Rhode Island', abbreviation: 'RI' },
        { name: 'South Carolina', abbreviation: 'SC' },
        { name: 'South Dakota', abbreviation: 'SD' },
        { name: 'Tennessee', abbreviation: 'TN' },
        { name: 'Texas', abbreviation: 'TX' },
        { name: 'Utah', abbreviation: 'UT' },
        { name: 'Vermont', abbreviation: 'VT' },
        { name: 'Virginia', abbreviation: 'VA' },
        { name: 'Washington', abbreviation: 'WA' },
        { name: 'West Virginia', abbreviation: 'WV' },
        { name: 'Wisconsin', abbreviation: 'WI' },
        { name: 'Wyoming', abbreviation: 'WY' },
    ];

    // Validate state input
    const validateState = (inputValue) => {
        const isValidState = states.some(state => state.abbreviation === inputValue.toUpperCase());
        if (!isValidState) {
            setErrorMessage("Please enter a valid state!");
        } else {
            setErrorMessage('');
        }
    };

    // Handle form data changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        if (name === 'State') {
            validateState(value);
        }
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (errorMessage) {
            alert("Please fix validation errors before submitting.");
            return;
        }

        try {
            await submitLeadToZoho(formData);
            alert('Lead created successfully!');
        } catch (error) {
            alert('Error creating lead. Please try again later.');
        }
    };

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
