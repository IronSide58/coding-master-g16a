import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
  const [dataForm, setDataForm] = useState({});
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    console.log(dataForm);
    setDataForm({ ...dataForm, [name]: value });
  };

  const register = async (event) => {
    event.preventDefault();
    console.log(dataForm);
    try {
      const response = await axios.post('https://ecomerce-master.herokuapp.com/api/v1/signup', {
        first_name: dataForm.firstName,
        last_name: dataForm.lastName,
        birth_date: dataForm.birth_date,
        gender: dataForm.gender,
        email: dataForm.email,
        password: dataForm.password,
      }).catch((error) => {
        console.log(error.response);
        if (error.response.status === 500) {
          alert('Usuario registrado');
        } else if (error.response.status === 400) {
          alert('Faltan campos por rellenar');
        }
      });
      console.log(response);
      if (response.status !== 500 || response.status !== 400) {
        navigate('/', { replace: true });
        setDataForm({});
      }
    } catch (errors) {
      console.error('Error', errors);
    }
  };

  return (
    <div className="backgroundImage mrg">
      <section className="login-container form-register">
        <h1 className="title-form">Registrarse</h1>
        <form method="post" className="form_container" onSubmit={register}>
          <label htmlFor="firstName">Nombre</label>
          <input type="text" placeholder="Ingresa tu nombre" name="firstName" className="input-login" onChange={handleChange} value={dataForm.firstName} />
          <label htmlFor="lastName">Apellidos</label>
          <input type="text" placeholder="Ingresa tus apellidos" name="lastName" value={dataForm.lastName} className="input-login" onChange={handleChange} />
          <label htmlFor="birthDate">Fecha de Nacimiento</label>
          <input type="date" className="input-login" name="birth_Date" value={dataForm.birth_date} onChange={handleChange} />
          <label htmlFor="gender">Genero</label>
          <select className="select-gender input-login" name="gender" value={dataForm.gender} onChange={handleChange}>
            <option value="">Selecciona tu genero</option>
            <option value="F">Female</option>
            <option value="M">Male</option>
          </select>
          <label htmlFor="email">Correo electrónico</label>
          <input type="text" placeholder="Ingresa un email" name="email" className="input-login" value={dataForm.email} onChange={handleChange} />
          <label htmlFor="password">Contraseña</label>
          <input type="password" name="password" className="input-login" value={dataForm.password} onChange={handleChange} />
          <input type="submit" className="btn_claim" value="Registrarse" />
          <Link to="/login" className="link-login">Iniciar Sesion</Link>
        </form>
      </section>
    </div>
  );
};

export default SignUp;
