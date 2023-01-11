import React, { useState, useContext } from 'react';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ExpenseList = (props) => {
//   const { tricounts, setTricounts } = useContext(ExpenseList);
  const [tricount, setTricount] = useState({});
  
//   useEffect(() => {
//     const id = props.match.params.id;
//     const findTricount = tricounts.find(tc => tc.id === id);
//     setTricount(findTricount);
//   }, [tricounts]);

//   const handleDelete = (id) => {
//     // delete logic here
//     setTricounts(tricounts.filter(tc => tc.id !== id));
//   };

  return (
    <Container>
      <Row>
        <Col>
          <h1>{tricount.name}</h1>
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

export default ExpenseList;