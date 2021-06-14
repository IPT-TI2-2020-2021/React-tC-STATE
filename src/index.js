// ***********************************************
// index.js
// ***********************************************

import React from 'react';  // <--- esta instrução por causa da linha 11
import ReactDOM from 'react-dom';  // <--- esta instrução por causa da linha 10
import App from './App';  // <--- esta instrução por causa da linha 12
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
