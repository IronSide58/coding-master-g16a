import React, { useState } from 'react'

const Form = ({ onChangeForm }) => {
  const [inputName, setInputName] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  const onInputUser = (event) => {
    setInputName(event.target.value);
  };

  const onInputPas = (event) => {
    setInputPassword(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (inputName.trim().length <= 1 && inputPassword.trim().length <= 1) return;

    inputName.trim() === 'usuarioG16' && inputPassword.trim() === 'passw0rd' && onChangeForm()
    
    setInputName('');
    setInputPassword('');
  }

  return (
    <section className="form-login">
      <form>
        <label htmlFor="inputName">UserName</label>
        <input type="text" name="name" value={inputName} onChange={onInputUser}/>
        <label htmlFor="inputPassword">Password</label>
        <input type="password" name="inputPassword" value={inputPassword} onChange={onInputPas}/>
        <input type="submit" value="Ingresar" onClick={onSubmit}/>
      </form>
    </section>
  )
}

export default Form