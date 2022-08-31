import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Details from './components/Details/Details';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Home from './Home';

function App() {
  const [isUserLogin, setIsUserLogin] = useState(false);
  const [authentication, setAuthentication] = useState({});
  console.log(isUserLogin);

  // useEffect(() => {
  //   const userSession =localStorage.getItem('isUserLogin');
  //   setIsUserLogin(userSession);
  // }, [])
  
  // useEffect(() => {
  //   localStorage.setItem('isUserLogin', isUserLogin);
  // }, [isUserLogin])

  return (
    <>
      <Routes>
        <Route path='/' element={<Home isUserLogin={isUserLogin} authentication={authentication}/>}/>
        {!isUserLogin && <>
          <Route path='/login' element={<Login setAuthentication={setAuthentication} setIsUserLogin={setIsUserLogin}/>}/>
          <Route path='/signup' element={<SignUp />}/>
        </>}
        <Route path='/details/:id' element={<Details />}/>
        <Route path='*' element={<h1>404:  No found</h1>}/>
      </Routes>
    </>
  );
}

export default App;
