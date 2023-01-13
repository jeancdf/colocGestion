import React from "react";
import { Navbar, Nav } from 'react-bootstrap'
import './App.css';
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Home from "./components/home"
import ExpensesList from "./components/expensesList"
import NewColoc from "./components/newColoc"
import Summary from "./components/summary"
import AcceptInvites from "./components/acceptInvite"
import AddNewExpenses from "./components/addNewExpenses"

export default function App() {
    return (

        <BrowserRouter>
            <div>
                <h1>Mon Router</h1>
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
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/expenselist" element={<ExpensesList/>}/>
                    <Route path="/addnewexpenses" element={<AddNewExpenses/>}/>
                    <Route path="/newcoloc" element={<NewColoc/>}/>
                    <Route path="/summary" element={<Summary/>}/>
                    <Route path="/acceptinvites" element={<AcceptInvites/>}/>
                </Routes>
            </div>
            

        </BrowserRouter>

    );
}