import "./App.css";
import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router";

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
      </div>
    </Router>
  );
}

export default App;
