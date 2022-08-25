import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Details from './components/Details/Details';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/details/:id' element={<Details />}/>
        <Route path='*' element={<h1>404:  No found</h1>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
