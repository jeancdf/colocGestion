import React, { useCallback, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';


const Home = () => {
    const [showSignIn, setShowSignIn] = useState(true);
    const [formData, setFormData] = useState({ email: '', password: '',confirmPassword:'' });
    const handleInputChange = (event: { target: { name: any; value: any; }; }) => {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
    };
    const handleFormSubmit = (event: { preventDefault: () => void; }) => {
      event.preventDefault();
      console.log(formData);
    };
  
    return (
      <div>
        <h1>Coloc Gestion</h1>
        {showSignIn ? (
          <Form onSubmit={handleFormSubmit}>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter password"
              />
            </Form.Group>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems:'center'}}>
            <Button className="m-3 p-3" type="submit">Sign In</Button>
            </div>
          </Form>
        ) : (
          <Form onSubmit={handleFormSubmit}>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter password"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Enter confirm password"
              />
            </Form.Group>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems:'center'}}>
            <Button type="submit">Sign Up</Button>
            </div>
          </Form>
        )}
        <Button className="m-3" onClick={() => setShowSignIn(!showSignIn)}>
          {showSignIn ? 'Sign Up' : 'Sign In'}
        </Button>
      </div>
    );
  };
  
  export default Home;