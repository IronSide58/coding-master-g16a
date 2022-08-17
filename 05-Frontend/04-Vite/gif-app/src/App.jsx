import { useState } from 'react'
import Grid from './components/Grid'
import AddCategory from './components/AddCategory'

function App() {
  const [categories, setCategories] = useState(['One Punch', 'Harry Potter']);
  
  return (
    <>
      <h1>Gif App</h1>
      <AddCategory/>
      {
        categories.map((category) => (<Grid key={category} category= {category} />))
      }
    </>
  )
}

export default App
