import React, { useState } from 'react';
import axios from 'axios';
import { Form, FormControl, Button, Alert, Row, Col } from 'react-bootstrap';
import {setJwt, getJwt} from "../variables/JWT"

const NewColoc = () => {

 const token = getJwt();
 axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
 axios.defaults.headers.common['Content-type'] = `application/x-www-form-urlencoded`;
  const [name, setName] = useState('');
  const [participants, setParticipants] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    try {
      fetch('http://localhost:5656/flatsharing/create', {
            method: "POST",
            mode: "cors",
            body: new URLSearchParams({
              token: `${token}`
            }),
            credentials: "include",
            headers: new Headers({
                "Authorization" : `${token}`,
                "Content-type":  "application/x-www-form-urlencoded"
            })
        })
            .then(data => data.text())
            .then(json => console.log(json))
    }
     catch (error) {
        console.error(error);
        setError('Error creating coloc');
      }
    };
  
    return (
        <Row className="justify-content-md-center">
      <Col xs={12} md={8}>
         <Form onSubmit={handleSubmit}>
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