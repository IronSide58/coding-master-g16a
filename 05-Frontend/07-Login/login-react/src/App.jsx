import { useState } from 'react'
import './App.css'
import Home from './components/Home'

function App() {
  // Hard-code : Son datos estaticos que no se obtienen de ningna api para realizar ciertas funciones en el codigo
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [isUserLogged, setisUserLogged] = useState(false)

  const userNameHrd = 'usuarioG16'
  const passwordHrd = 'passw0rd'
  
  const onChangeName = (event) => {
    setUser(event.target.value)
  }

  const onChangePass = (event) => {
    setPassword(event.target.value)
  }

  const validation = () => {
    if(user === userNameHrd && password === passwordHrd) {
      setisUserLogged(true);
    }
  }
  return (
    <div className="App">
      <input type="text" value={user} name="user" onChange={onChangeName}/>
      <input type="password" value={password} name="password" onChange={onChangePass}/>
      <button type="submit" onClick={validation}>Ingresar</button>
      {isUserLogged && <Home logout={() => setisUserLogged(!isUserLogged)} />}
    </div>
  )
}

export default App
