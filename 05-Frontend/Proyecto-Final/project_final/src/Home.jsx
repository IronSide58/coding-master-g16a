import React, { useState } from 'react'
import Header from './components/Header/Header';
import Grid from './components/Grid/Grid';

const Home = ({isUserLogin, authentication}) => {
  const [itemSearch, setItemSearch] = useState('');

  const getId = (item) => {
    setItemSearch(item);
  }

  return (
    <>
      <Header getId={getId} isUserLogin={isUserLogin} authentication={authentication}/>
      <Grid props={itemSearch} />
    </>
  )
}

export default Home