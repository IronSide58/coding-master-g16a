import { useState } from 'react'
import './App.css'
import ActiveUser from './components/ActiveUser';
import Counter from './components/Counter';

function App() {
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [age, setAge] = useState(35);
  const greetings = (num) => {
    return num >= 18 ? <span>Eres Mayor de Edad</span> : <span>No puedes beber alchol</span>;
  }

  return (
    <div className="App">
      <h1 className='h1'>Vite + React</h1>
      <div className="card" style={{border: '3px solid #fff'}}>
        {greetings(8)}
        {/*Conditional Rendering*/}
        {/* {if () -> validation && <--Output components} */}
        { count  <= 0 && <Counter/>}
        {/* {if else () -> validation ? true : false  ----> truthy*/} 
        { isActive ? <ActiveUser/> : <h4>Inactive User</h4>}
        {/* {if else if else -> validation ? true : validation2 ? true2 : false*/}
        {age >= 18 ? <strong>Eres mayor de edad</strong> : age < 18 && age >= 12 ? <b>Eres un adolecente</b> : <h5>Eres un ñiño</h5>}
      </div>
    </div>
  );
}

export default App;