import React, { useState } from 'react';
import Header from './components/Header/Header';
import Grid from './components/Grid/Grid';

const Home = ({ isUserLogin, dataUser }) => {
  const [itemSearch, setItemSearch] = useState('');

  const getSearch = (item) => {
    setItemSearch(item);
  };

  return (
    <>
      <Header getSearch={getSearch} isUserLogin={isUserLogin} dataUser={dataUser} />
      <Grid itemSearch={itemSearch} />
    </>
  );
};

export default Home;
