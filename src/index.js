// Entry point for the React application.
// Renders the root App component into the DOM and initializes performance reporting.
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// Render the application wrapped in StrictMode for highlighting potential problems.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Initialize performance measurement. Pass a callback to log or send metrics if needed.
// Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
