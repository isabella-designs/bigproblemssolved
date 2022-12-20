import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './pages/Home';
import Overview from './pages/Overview';
import County from './pages/County';
import {GlobalState} from './GlobalState';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <BrowserRouter>
      <GlobalState>
       <Routes>
        <Route path="/" element={ <App/> } />
        <Route path="/Home" element={ <Home/> } />
        <Route path="/County" element={ <County/> } />
        <Route path="/Overview" element={ <Overview/> } />
      </Routes>
      </GlobalState>
      </BrowserRouter>,
    );

reportWebVitals();