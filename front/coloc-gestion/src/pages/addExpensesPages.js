import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddExpenseForm from '../components/AddExpenseForm';
import Summary from '../components/Summary';

const AddExpensePage = ({ match }) => {
  const [tricount, setTricount] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/tricounts/${match.params.tricountId}`);
        setTricount(response.data);
      } catch (error) {
        console.error(error);
        setError('Error loading tricount');
      }
    };
    fetchData();
  }, [match.params.tricountId]);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <h1>Add Expense</h1>
      <AddExpenseForm tricountId={match.params.tricountId} participants={tricount.participants} />
      <Summary tricountId={match.params.tricountId} />
    </>
  );
};

export default AddExpensePage;