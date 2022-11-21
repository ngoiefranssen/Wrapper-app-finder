import React from 'react';
import ReactDOM from 'react-dom/client';
// import './styles/styles.scss';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const rootElement = ReactDOM.createRoot(document.getElementById('root'));

rootElement.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

