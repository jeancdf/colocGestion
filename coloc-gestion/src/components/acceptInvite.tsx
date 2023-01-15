import React, { useState } from 'react';
import { Form, FormGroup, FormLabel, FormControl, Button } from 'react-bootstrap';
import axios from 'axios';

interface Props{}

const AcceptInvites: React.FC<Props> = () => {
const [username, setUsername] = useState('');
const [error, setError] = useState('');


    const handleSubmit = async (event: { preventDefault: () => void; }) => {
      event.preventDefault();
      try {
        // Make a request to the server to join the tricount using the username
        const response = await axios.post('/api/tricounts/invite', { username });
        console.log(response.data);
        setUsername('');
      } catch (error) {
        console.error(error);
        setError('Error sending invite');
      }
    };

  return (
    <Form onSubmit={handleSubmit}>
    <FormGroup>
      <FormLabel htmlFor="username">Username:</FormLabel>
      <FormControl 
        id="username" 
        value={username} 
        onChange={(event) => setUsername(event.target.value)} 
      />
    </FormGroup>
    {error && <p>{error}</p>}
    <Button type="submit">Send Invite</Button>
  </Form>
  );
};

export default AcceptInvites;