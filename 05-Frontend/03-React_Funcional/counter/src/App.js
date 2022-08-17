import React, { useState, useEffect } from "react";
import axios from "axios";

const App = (props) => {
  const [count, setCount] = useState(0);
  const [character, setCharacter] = useState([]);
  useEffect(() => {
    axios.get("https://api.twitter.com/1.1/statuses")
      .then (res => {
        const character = res.data.results;
        setCharacter(character)
      })
  }, [character])
  const sum = () => {
    setCount(count + 1);
  }
  const res = () => {
    setCount(count - 1);
  }
  const reset = () => {
    setCount(0);
  }
  console.log(character);
  return (
    <>
      <h1>Haz hecho click: { count }</h1>
      <button onClick={sum}>Click +</button>
      <button onClick={res}>Click -</button>
      <button onClick={reset}>Click Reset</button>
    </>
  )
}

export default App;
