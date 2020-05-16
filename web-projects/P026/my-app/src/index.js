import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import NewApp from './components/NewApp/NewApp';

ReactDOM.render(
  <React.StrictMode>
    <NewApp appName="Name Manager" />
  </React.StrictMode>,
  document.getElementById('root')
);