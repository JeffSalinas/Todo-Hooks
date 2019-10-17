import React from 'react';
import ReactDOM from 'react-dom';
import App from'./app.jsx';
import GlobalState from './components/GlobalState';


ReactDOM.render(
  <GlobalState>
    <App />
  </GlobalState>
, document.getElementById('root'));