import React, { useState } from 'react';

function MultilpleInputsForm() {
    const [formDate, setFormData] = useState({
        name: '',
        email: '',

    });
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formDate,
            [name]: value
            });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Name: ${formDate.name}, Email: ${formDate.email}`);
        setFormData({ name: '' ,email: ''});
        };
        return (
           <div>
            <h2>Multiple Input Fields</h2>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                name="name"
                value={formDate.name}
                onChange={handleInputChange}
                placeholder="Enter your name" />
                <input
                type="email"
                name="email"
                value={formDate.email}
                onChange={handleInputChange}
                placeholder="Enter your email" />
                <button type="submit">Submit</button>
            </form>
           </div>
        );
}
export default MultilpleInputsForm;