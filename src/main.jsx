import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.slim';
import '@popperjs/core/dist/umd/popper.min';
import 'bootstrap/dist/js/bootstrap.min.js';
import './ProjectSlide.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
