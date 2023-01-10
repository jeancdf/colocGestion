import React, { useState } from 'react';
import axios from 'axios';

const NewColoc = () => {
  const [name, setName] = useState('');
  const [participants, setParticipants] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/tricounts', { name, participants: participants.split(',') });
      console.log(response.data);
    } catch (error) {
        console.error(error);
        setError('Error creating tricount');
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Tricount Name:</label>
        <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} />
        <br />
        <label htmlFor="participants">Participants:</label>
        <input type="text" id="participants" value={participants} onChange={(event) => setParticipants(event.target.value)} />
        <br />
        {error && <p>{error}</p>}
        <button type="submit">Create Tricount</button>
      </form>
    );
  };
  
  export default NewTricountForm;