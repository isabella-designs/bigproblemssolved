import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './pages/Home';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <BrowserRouter>
       <Routes>
        <Route path="/" element={ <App/> } />
        <Route path="/Home" element={ <Home/> } />
      </Routes>
      </BrowserRouter>,
    );

reportWebVitals();