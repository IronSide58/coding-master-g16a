import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const Login = ({setAuthentication , setIsUserLogin}) => {
  const [credentials, setCredentials] = useState({});
  const navigate = useNavigate();
  
  const handleCredentials = ({target: {name, value}}) => {
    setCredentials({...credentials, [name]: value});
  }

  const handleLogin = (event) => {
    event.preventDefault();
    try {
      (async () => {
        const response = await axios.post('https://ecomerce-master.herokuapp.com/api/v1/login',
        {
          email: credentials.email,
          password: credentials.password
        })
        response.status === 200 && setAuthentication(response.data); setIsUserLogin(true);
        setCredentials({}); navigate("/", {replace: true});
      })()
    } catch (error) {
      console.log('Error: ', error);
    }
  }
  
  return (
    <div className="backgroundImage">
      <section className="login-container">
        <h1 className="title-form">Iniciar Sesión</h1>
        <form onSubmit={handleLogin} method="post" className="form_container">
          <label form="email">Usuario</label>
          <input type="email" placeholder="Ingresa tu email..." name="email" className="input-login" value={credentials.email} onChange={handleCredentials}/>
          <label form="password">Contraseña</label>
          <input type="password" placeholder="Ingresa tu contaseña..." className="input-login" value={credentials.password} name="password" onChange={handleCredentials}/>
          <input type="submit" className="btn_claim" value="Ingresar"/>
        </form>
      </section>
    </div>
  )
}

export default Login