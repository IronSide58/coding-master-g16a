import { useState } from 'react'
import Grid from './components/Grid'
import AddCategory from './components/AddCategory'

function App() {
  const [categories, setCategories] = useState(['One Punch', 'Harry Potter']);
  
  const onAddCategory = (category) => {
    if (categories.includes(category)) return;

    setCategories([category, ...categories]);
  }

  return (
    <>
      <h1>Gif App</h1>
      <AddCategory onAddCategory = {onAddCategory}/>
      {
        categories.map((category) => (<Grid key={category} category= {category} />))
      }
    </>
  )
}

export default App
