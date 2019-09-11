import React, { useState } from 'react';
import Form from './components/Form';
import styled from 'styled-components';
import './App.css';

const StyledBackground = styled.div`
background: rgb(9,4,91);
background: linear-gradient(132deg, rgba(9,4,91,0.1) 0%, rgba(40,40,168,0.3) 35%, rgba(0,212,255,0.2) 100%);
height: 100vh;
margin-top: 0;
padding-top: 50px;
`


const App = () => {
  const [teamList, setTeamList] = useState([]);

  const addToTeamList = newMember => {
    setTeamList([...teamList, newMember])
    }

  return (
    <StyledBackground>
      <Form addToTeamList={addToTeamList} />
      {teamList.map(member => (
        <div className="membercard"
             key={member.email}>
                <h1>{member.name}</h1>
                <p>{member.email}</p>
                <p>{member.role}</p>
        </div>
      ))}
    </StyledBackground>
  )
}

export default App;
