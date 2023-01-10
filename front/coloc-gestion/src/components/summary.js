import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Summary = ({ tricountId }) => {
  const [summary, setSummary] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/tricounts/${tricountId}/summary`);
        setSummary(response.data);
      } catch (error) {
        console.error(error);
        setError('Error loading summary');
      }
    };
    fetchData();
  }, [tricountId]);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <h2>Summary</h2>
      <p>Total cost: {summary.totalCost}</p>
      <p>Number of expenses: {summary.numExpenses}</p>
      <p>Average cost per person: {summary.avgCostPerPerson}</p>
    </>
  );
};

export default Summary;