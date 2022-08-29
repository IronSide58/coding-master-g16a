import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  const [itemSearch, setItemSearch] = useState('');

  const getId = (item) => {
    setItemSearch(item);
  }

  return (
    <>
      <Header getId={getId}/>
      <Home props={itemSearch} />
    </>
  );
}

export default App;
