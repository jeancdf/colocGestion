import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import {Match} from '../context/context.js';

interface Props {
colocId: string;


}

export default function Summary () {
    const myMatch = React.useContext(Match)
    const [summary, setSummary] = useState({});
    const [error, setError] = useState('');
  
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const response = await axios.get(`/api/coloc/${colocId}/summary`);
  //         setSummary(response.data);
  //       } catch (error) {
  //         console.error(error);
  //         setError('Error loading summary');
  //       }
  //     };
  //     fetchData();
  //   }, [colocId]);
  
    if (error) {
      return <p>{error}</p>;
    }
  
    return (
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Header>Summary</Card.Header>
              {/* <ListGroup variant="flush">
                <ListGroup.Item>Total cost: {summary.totalCost}</ListGroup.Item>
                <ListGroup.Item>Number of expenses: {summary.numExpenses}</ListGroup.Item>
                <ListGroup.Item>Average cost per person: {summary.avgCostPerPerson}</ListGroup.Item>
              </ListGroup> */}
            </Card>
          </Col>
        </Row>
      </Container>
    );
}

  

