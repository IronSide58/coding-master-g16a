import React from 'react'

const LoginDiv = ({ onChangeDiv }) => {
  const date = Date()

  const onSubmit = () => {
    onChangeDiv()
  }

  return (
    <section className="message">
      <h2>Usuario loggeado exitosamente - {date}</h2>
      <button type="submit" onClick={onSubmit}>Cerrar Sesion</button>
    </section>
  )
}

export default LoginDiv