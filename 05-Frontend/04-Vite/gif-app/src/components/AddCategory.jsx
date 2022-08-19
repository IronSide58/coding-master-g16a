import React, {useState} from "react"

const AddCategory = ({onAddCategory}) => {
  const [input, setInput] = useState('');

  const onInputOnchange = (event) => {
    setInput(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if (input.trim().length <= 1) return;

    onAddCategory(input.trim());
    setInput('');
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Buscar Gifs" value={input} onChange={onInputOnchange} />
      </form>
    </>
  )
}

export default AddCategory;