import React from 'react'

const Home = ({logout}) => {
  const fecha_actual = new Date().toLocaleDateString();
  
  const handleLogout = () => {
    logout();
  };

  return (
    <div style={{border: '1px solid white'}}>
      Usuario loggeado el dia {fecha_actual}
      <button onClick={handleLogout}>Cerrar Sesion</button>
    </div>
  )
}

export default Home