import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const data = { email, password }
    try {
      const response = await axios.post('/api/login', data);
      if(response.status === 200){
        <Link to="/trips">Trips</Link>
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const data = { email, password }
    try {
      const response = await axios.post('/api/register', data);
      if(response.status === 201){
        <Link to="/trips">Trips</Link>
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Tricount App Clone</h1>
      <form>
        <label>
          Email:
          <input type="email" name="email" onChange={(e) => setEmail(e.target.value)}/>
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" onChange={(e) => setPassword(e.target.value)}/>
        </label>
        <br />
        <button type="submit" onClick={handleLogin}>Sign In</button>
        <button type="submit" onClick={handleSignUp}>Sign Up</button>
      </form>
    </div>
  );
}

export default HomePage;
