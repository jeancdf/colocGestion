import React, { useState } from 'react';
import axios from 'axios';

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
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Expense Name:</label>
      <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} />
      <br />
      <label htmlFor="amount">Amount:</label>
      <input type="text" id="amount" value={amount} onChange={(event) => setAmount(event.target.value)} />
      <br />
      <label htmlFor="assignee">Assignee:</label>
      <select id="assignee" value={assignee} onChange={(event) => setAssignee(event.target.value)}>
        {participants.map((participant) => (
          <option key={participant} value={participant}>
            {participant}
          </option>
        ))}
      </select>
      <br />
      {error && <p>{error}</p>}
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default AddExpenseForm;