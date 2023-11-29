import React from 'react';
import { createRoot } from 'react-dom/client'; // Use 'react-dom/client' instead of 'react-dom'
import App from './App.jsx';
import { BrowserRouter as Router } from 'react-router-dom';

// Create a root instance using createRoot
const root = createRoot(document.getElementById('root'));

// Render your app inside the root instance
root.render(
  <Router>
    <App />
  </Router>
);
