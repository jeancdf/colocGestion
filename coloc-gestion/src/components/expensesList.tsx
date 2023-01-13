import React, { useState, useContext, useReducer } from 'react';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function ExpensesList () {
  //   const { tricounts, setTricounts } = useContext(ExpenseList);
  const [coloc, dispatch] = useReducer(Reducer,0,  Initializer);
  
//   useEffect(() => {
//     const id = props.match.params.id;
//     const findColoc = colocs.find(clc => clc.id === id);
//     setColoc(findColoc);
//   }, [Colocs]);

//   const handleDelete = (id) => {
//     // delete logic here
//     setColocs(colocs.filter(clc => clc.id !== id));
//   };

  return (
    <Container>
      <Row>
        <Col>
          <h1>{coloc.name}</h1>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Amount</th>
                <th>Paid by</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* {tricount.expenses.map((expense, idx) => (
                <tr key={idx}>
                  <td>{expense.name}</td>
                  <td>{expense.amount}</td>
                  <td>{expense.paidBy}</td>
                  <td>
                    <Link >Edit</Link>
                    <Button variant="danger">Delete</Button>
                  </td>
                </tr>
              ))} */}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );  
}

