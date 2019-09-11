import React, { useState } from 'react';
import styled from 'styled-components';

const Input = styled.input`
    border: 1px solid rgba(9, 4, 91, 0.2);
	font-size: 0.9rem;
	padding: 17px;
	color: rgba(255, 255, 255, 0.5);
	border-radius: 3px;
    background: transparent;
    font-family: verdana;
    width: 400px;
    margin: 4px;
    ::placeholder {
        color: rgba(9, 4, 91, 0.25)
    }
`

const Button = styled.button`
    font-size: 0.8rem;
    font-weight: bold;
    text-transform: uppercase;
    font-family: verdana;
	padding: 10px;
    color: white;
    border-radius: 50px;
    width: 170px;
    border: 0;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background: rgb(9,4,91);
    background: linear-gradient(132deg, rgba(9,4,91,0.4) 0%, rgba(40,40,168,0.4) 35%, rgba(0,212,255,0.4) 100%);
`

const StyledForm = styled.form`
    box-sizing: border-box;
    border-radius: 0 0 4px 4px;
    width: 500px;
    height: auto;
    padding: 40px 20px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
`

const StyledHeader = styled.div`
    box-sizing: border-box;
    height: 110px;
    width: 500px;
    margin: 0 auto 0 auto;
    border-radius: 4px 4px 0 0;
    font-family: 'Pacifico', cursive;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 1.6rem;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(9,4,91);
    background: linear-gradient(90deg, rgba(9,4,91,0.9) 0%, rgba(40,40,168,0.9) 35%, rgba(0,212,255,0.9) 100%);
`

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
    <>
        <StyledHeader>
            <p>Sign Up</p>
        </StyledHeader>
        <StyledForm onSubmit={saveNewMember}>
            <Input 
                name="name" 
                value={newMember.name}
                placeholder="Full Name"
                type="text"
                onChange={handleChange} /> 
            <br />
            <Input 
                name="email" 
                value={newMember.email} 
                placeholder="Email eg. name@example.com"
                type="email"
                onChange={handleChange} /> 
            <br />
            <Input 
                name="role" 
                value={newMember.role} 
                placeholder="Role eg. Front End"
                type="text"
                onChange={handleChange} /> 
            <br />
            <Button 
                type="submit">
                    Submit
            </Button>
        </StyledForm>
    </>
    )
}

export default Form;