import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import LoginDiv from './components/LoginDiv'

function App() {
  const [estadoDiv, setEstadoDiv] = useState(false);
  
  const onChangeDiv = () => {
    setEstadoDiv(!estadoDiv);
  }

  return (
    <>
      <Form onChangeForm = {onChangeDiv}/>
      {estadoDiv === true && <LoginDiv onChangeDiv = {onChangeDiv} /> }
    </>
  )
}

export default App
