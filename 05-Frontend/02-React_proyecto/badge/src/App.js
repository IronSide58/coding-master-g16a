import React from 'react';
import NavBar from './components/navBar';
import Badge from './components/badge';

function App() {
  return (
    <>
      <NavBar/> 
      <Badge firstName="Uriel" lastName="Bucio" jobTitle="Frontend" userName="UrielBucio"/>
    </>
  );
}

export default App;
