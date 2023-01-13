import React from "react";
import { Navbar, Nav } from 'react-bootstrap'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

// These are the components that will be rendered by the router
import Home from "./components/home";
import ExpenseList from "./components/expensesList";
import AddNewExpenses from "./components/addNewExpenses";
import NewColoc from "./components/newColoc";
import Summary from "./components/summary";
import AcceptInvites from "./components/acceptInvite";

export default function App() {
  return (
    <Router>
      <div>
      <Navbar className="p-2 mb-3" bg="dark" variant="dark">
        <Navbar.Brand>Tricount App</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/home">Home</Nav.Link>
          <Nav.Link as={Link} to="/expenselist">Expense List</Nav.Link>
          <Nav.Link as={Link} to="/addnewexpenses">New Expenses</Nav.Link>
          <Nav.Link as={Link} to="/newcoloc">New Coloc</Nav.Link>
          <Nav.Link as={Link} to="/summary">Summary</Nav.Link>
          <Nav.Link as={Link} to="/acceptinvites">Invitations</Nav.Link>
        </Nav>
      </Navbar>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        { <Routes>
        <Route path="/expenselist" element={<ExpenseList/>} />
        <Route path="/addnewexpenses" element={<AddNewExpenses/>} />
        <Route path="/newcoloc" element={<NewColoc/>} />
        <Route path="/summary" element={<Summary/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/acceptinvites" element={<AcceptInvites/>} />
        </Routes> }
      </div>
    </Router>
  );
}