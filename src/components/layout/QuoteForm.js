"use client"
import { useState } from 'react';

export default function QuoteForm(){
    const [stateInput, setStateInput] = useState('');
    const [errorMessage, setErrorMessage] = useState('')

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

    const validateState = (inputValue) => {
        const isValidState = states.some(state => state.abbreviation === inputValue.toUpperCase());
        if (!isValidState) {
            setErrorMessage("Please enter a valid state!");
        } else {
            setErrorMessage('');
        }
    };


    const handleStateInputChange = (event) => {
        const input = event.target.value;
        setStateInput(input); // updates state

        if (input.length == 2) {
            validateState(input); // validates the state input
        }
    }


    return (
        <section className="QuoteFormContainer">
            <div>
            <h1>Schedule Your FREE Inspection!</h1>
            </div>
          

          <div className="flex justify-center">
            <form>
                <label for="name"></label>
                <input type="text" id="name" name="name" placeholder="Name" required></input>

                <label for="email"></label>
                <input type="email" id="email" name="email" placeholder="Email" required></input>

                <label for="phone"></label>
                <input type="phone" id="phone" name="phone" placeholder="Phone Number"></input>

                <label for="address"></label>
                <input type="address" id="address" name="address" placeholder="Street Address"></input>

                <label for="city"></label>
                <input type="city" id="city" name="city" placeholder="City"></input>

                <label for="state"></label>
                <input type="text"
                    id="state" 
                    name="state" 
                    placeholder="State" 
                    value={stateInput}
                    onChange={handleStateInputChange}
                    />
                {errorMessage && <p className="QuoteFormContainerError">{errorMessage}</p>}

                <label for="zip"></label>
                <input type="text" 
                    id="zip" 
                    name="zip" 
                    placeholder="Zip Code"
                    maxlength="5"
                    pattern="\d{5}"
                    />
            </form>
          </div>
          
          <div className="QuoteFormSubmitContainer">
          <button>Submit</button>
          </div>
          </section>
    )
}
