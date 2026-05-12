import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router";
import ContactForm from "./components/ContactForm/ContactForm";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation Bar */}
        <nav className="nav-bar-style">
          <div className="logo">Task Management App</div>
          <ul className="ul-style">
            <li>
              <NavLink to="/" className="nav-link">
                Tasks
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="nav-link">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
        {/* Routing Logic */}
        <Routes>
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
