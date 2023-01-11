import React, { useState } from 'react';
import axios from 'axios';

const NewColoc = () => {
  const [name, setName] = useState('');
  const [participants, setParticipants] = useState('');
  const [error, setError] = useState('');

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post('/api/coloc', { name, participants: participants.split(',') });
//       console.log(response.data);
//     } catch (error) {
//         console.error(error);
//         setError('Error creating coloc');
//       }
//     };
  
    return (
      <form >
        <label htmlFor="name">Coloc Name:</label>
        <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} />
        <br />
        <label htmlFor="participants">Participants:</label>
        <input type="text" id="participants" value={participants} onChange={(event) => setParticipants(event.target.value)} />
        <br />
        {error && <p>{error}</p>}
        <button type="submit">Create coloc</button>
      </form>
    );
  };
  
  export default NewColoc;