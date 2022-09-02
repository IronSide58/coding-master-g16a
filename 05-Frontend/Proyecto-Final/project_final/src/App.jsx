import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Details from './components/Details/Details';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Home from './Home';

const App = () => {
  const [isUserLogin, setIsUserLogin] = useState(false);
  const [authentication, setAuthentication] = useState({});
  const [dataUser, setDataUser] = useState({});

  useEffect(() => {
    const userSession = localStorage.getItem('isUserLogin');
    userSession === 'false' ? setIsUserLogin(false) : setIsUserLogin(true);
  }, []);

  useEffect(() => {
    localStorage.setItem('isUserLogin', isUserLogin);
  }, [isUserLogin]);

  useEffect(() => {
    authentication.token && (async () => {
      const userData = await axios.get('https://ecomerce-master.herokuapp.com/api/v1/user/me', { headers: { Authorization: `JWT ${authentication.token}` } });
      setDataUser(userData.data.user);
    })();
  }, [authentication]);

  return (
    <Routes>
      <Route path="/" element={<Home isUserLogin={isUserLogin} dataUser={dataUser} setIsUserLogin={setIsUserLogin} />} />
      {!isUserLogin ? (
        <>
          <Route path="/login" element={<Login setAuthentication={setAuthentication} setIsUserLogin={setIsUserLogin} />} />
          <Route path="/signup" element={<SignUp />} />
        </>
      ) : null}
      <Route path="/details/:id" element={<Details isUserLogin={isUserLogin} dataUser={dataUser} />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default App;
