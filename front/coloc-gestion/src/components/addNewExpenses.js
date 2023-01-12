import React, { useState } from 'react';
import axios from 'axios';
import { Form, FormControl, FormGroup, FormLabel, Select, Button } from 'react-bootstrap';

const AddExpenseForm = ({ tricountId, participants }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [assignee, setAssignee] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`/api/tricounts/${tricountId}/expenses`, { name, amount, assignee });
      console.log(response.data);
      setName('');
      setAmount('');
      setAssignee('');
    } catch (error) {
      console.error(error);
      setError('Error adding expense');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
            <FormGroup>
                <FormLabel htmlFor="name">Expense Name:</FormLabel>
                <FormControl 
                    id="name" 
                    value={name} 
                    onChange={(event) => setName(event.target.value)} 
                />
            </FormGroup>
            <FormGroup>
                <FormLabel htmlFor="amount">Amount:</FormLabel>
                <FormControl 
                    id="amount" 
                    value={amount} 
                    onChange={(event) => setAmount(event.target.value)} 
                />
            </FormGroup>
            <FormGroup>
                <FormLabel htmlFor="assignee">Assignee:</FormLabel>
                    {/* {participants.map((participant) => (
                        <option key={participant} value={participant}>
                            {participant}
                        </option>
                    ))} */}
            </FormGroup>
            {error && <p>{error}</p>}
            <Button type="submit">Add Expense</Button>
        </Form>
  );
};

export default AddExpenseForm;