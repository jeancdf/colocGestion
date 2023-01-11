import React from "react";
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

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">home</Link>
            </li>
            <li>
              <Link to="/expenselist">expenselist</Link>
            </li>
            <li>
              <Link to="/addnewexpenses">addnewexpenses</Link>
            </li>
            <li>
              <Link to="/newcoloc">newcoloc</Link>
            </li>
            <li>
              <Link to="/summary">summary</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        { <Routes>
        <Route path="/expenselist" element={<ExpenseList/>} />
        <Route path="/addnewexpenses" element={<AddNewExpenses/>} />
        <Route path="/newcoloc" element={<NewColoc/>} />
        <Route path="/summary" element={<Summary/>} />
        <Route path="/home" element={<Home/>} />
        </Routes> }
      </div>
    </Router>
  );
}