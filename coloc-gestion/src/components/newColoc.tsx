import React, { useState } from 'react';
import axios from 'axios';
import { Form, FormControl, Button, Alert, Row, Col } from 'react-bootstrap';

const NewColoc = () => {
  const [name, setName] = useState('');
  const [participants, setParticipants] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    try {
      const response = await axios.get('/flatsharing/create');
      console.log(response.data);
    } catch (error) {
        console.error(error);
        setError('Error creating coloc');
      }
    };
  
    return (
        <Row className="justify-content-md-center">
      <Col xs={12} md={8}>
         <Form >
          <Form.Group>
            <Form.Label>Coloc Name:</Form.Label>
            <FormControl value={name} onChange={(event) => setName(event.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Participants:</Form.Label>
            <FormControl value={participants} onChange={(event) => setParticipants(event.target.value)} />
          </Form.Group>
          {error && <Form.Text>{error}</Form.Text>}
          <Button className="m-3"type="submit">Create coloc</Button>
        </Form>
      </Col>
    </Row>
    );
  };
  
  export default NewColoc;