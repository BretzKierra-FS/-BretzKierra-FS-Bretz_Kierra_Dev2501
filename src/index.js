import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';  //For ReactRouter!

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter> 
   <App />
   </BrowserRouter>
  </React.StrictMode>
);

// Coolors Swatch
// --indigo-dye: #084b83ff;
// --aero: #43bfdeff;
// --mustard: #ffd744ff;
// --antiflash-white: #f0f6f6ff;
// --carnation-pink: #ffa3d1ff;


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
