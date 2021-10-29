import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from "react-router-dom";

import App from './App';
// import reportWebVitals from './reportWebVitals';

// uses HashRouter because github pages cannot use BrowserRouter
ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename="/slestcon">
			<App />
		</HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
