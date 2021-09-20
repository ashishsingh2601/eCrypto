import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import 'antd/dist/antd.css'; 



ReactDOM.render(
  // <React.StrictMode>
    <Router>
      <App />
    </Router>,
    document.getElementById('root')
  // </React.StrictMode>,
  
);

