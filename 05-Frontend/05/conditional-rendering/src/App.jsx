import { useState } from 'react'
import './App.css'
import ActiveUser from './components/ActiveUser';
import Counter from './components/Counter';

function App() {
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const greetings = (num) => {
    return num >= 18 ? <span>Eres Mayor de Edad</span> : <span>No puedes beber alchol</span>;
  }

  return (
    <div className="App">
      {greetings(8)}

      {/*Conditional Rendering*/}
      {/* {if () -> validation && components} */}
      { count  <= 0 && <Counter/>}
      {/* {if else () -> validation ? true : false  ----> truthy*/} 
      { isActive ? <ActiveUser/> : <h4>Inactive User</h4>}
    </div>
  );
}

export default App;