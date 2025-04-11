import React, { useRef } from 'react';

function UncontrolledForm() {
    const InputRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Input Value: '+ InputRef.current.value);
    };
    return (
        <div>
            <h2>Uncontrolled Form</h2>
            <form onSubmit ={handleSubmit}>
                <input type="text" ref={InputRef} 
                placeholder='Enter text'/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
export default UncontrolledForm;