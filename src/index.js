import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./styles/styles.scss";
import App from './App';

const rootElement = ReactDOM.createRoot(document.getElementById('root'));

rootElement.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

