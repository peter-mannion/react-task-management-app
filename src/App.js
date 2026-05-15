// Application styles
import "./App.css";

// React core
import React from "react";

// Routing components for navigation between pages
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router";

// Page components
import ContactForm from "./components/ContactForm/ContactForm";
import TMContainer from "./components/TMContainer/TMContainer";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Top-level navigation bar */}
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

        {/* Route definitions for the app pages */}
        <Routes>
          {/* Task management page route */}
          <Route path="/" element={<TMContainer />} />

          {/* Contact form page route */}
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
