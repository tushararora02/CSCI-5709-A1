import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import reportWebVitals from './reportWebVitals';
import Registration from './Registration';
import Login from './login';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    {/* <Registration /> */}
    <App></App>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
