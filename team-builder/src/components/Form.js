import React, { useState } from 'react';

const Form = props => {
    const [newMember, setNewMember] = useState({name: "", email: "", role: ""});

    const handleChange = event => {
        event.preventDefault();
        setNewMember({
            ...newMember,
            [event.target.name] : event.target.value
        })
    }

    const saveNewMember = (event) => {
        event.preventDefault();
        const addToTeamList = props.addToTeamList;
        addToTeamList(newMember);
        setNewMember({
            name: "",
            email: "",
            role: ""
        });
    }

    return (
    <form onSubmit={saveNewMember}>
        <input 
            name="name" 
            value={newMember.name}
            placeholder="Name"
            type="text"
            onChange={handleChange} /> 
        <input 
            name="email" 
            value={newMember.email} 
            placeholder="Email"
            type="email"
            onChange={handleChange} /> 
        <input 
            name="role" 
            value={newMember.role} 
            placeholder="Role"
            type="text"
            onChange={handleChange} /> 
        <button 
            type="submit">
                Submit
            </button>

    </form>
    )
}

export default Form;