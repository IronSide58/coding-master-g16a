import React, { useState } from 'react';
import Header from './components/Header/Header';
import Grid from './components/Grid/Grid';

const Home = ({ isUserLogin, dataUser }) => {
  const [itemSearch, setItemSearch] = useState('');

  const getId = (item) => {
    setItemSearch(item);
  };

  return (
    <>
      <Header getId={getId} isUserLogin={isUserLogin} dataUser={dataUser} />
      <Grid props={itemSearch} />
    </>
  );
};

export default Home;
