import React from 'react';
import Summary from '../components/Summary';

const SummaryPage = ({ match }) => {
  return (
    <>
      <h1>Summary</h1>
      <Summary tricountId={match.params.tricountId} />
    </>
  );
};

export default SummaryPage;