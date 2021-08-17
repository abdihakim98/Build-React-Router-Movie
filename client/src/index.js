import React from 'react';
import ReactDOM from 'react-dom';
// Import React Router dom
//step one import browser Router 
import {BrowserRouter as Router} from "react-router-dom"
import './index.css';
import App from './App';

// You'll need to wrap <App /> for routing to work
//step two put Router before app and after
ReactDOM.render(
    <Router>
        <App />
    </Router>
     , document.getElementById('root')

   );
