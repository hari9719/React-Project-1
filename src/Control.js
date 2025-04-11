import React, { useState } from 'react';

function ControlledForm() {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };
    const handleSubmit = (event) =>
    {
        event.preventDefault();
        alert(`Submitted: ${inputValue} `);
        setInputValue(' ');
    };
    return(
        <div>
            <h2>Controlled Form</h2>
            <form onSubmit ={handleSubmit}>
                <input type="text" value={inputValue} onChange={handleInputChange} placeholder = "Enter text" />
                <button type="submit">Submit</button> 
            </form>
        </div>
    );
}
export default ControlledForm;