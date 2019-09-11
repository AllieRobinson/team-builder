import React, { useState } from 'react';
import Form from './components/Form';
import './App.css';

const App = () => {
  const [teamList, setTeamList] = useState([]);

  const addToTeamList = newMember => {
    setTeamList([...teamList, newMember]);
  }

  return (
    <div>
      <Form addToTeamList={addToTeamList} />
      {teamList.map(member => (
        <div className="membercard"
             key={member.email}>
             <h1>{member.name}</h1>
             <p>{member.email}</p>
             <p>{member.role}</p>
        </div>
      ))}
    </div>
  )
}

export default App;
