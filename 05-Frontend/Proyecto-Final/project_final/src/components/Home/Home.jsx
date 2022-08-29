import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../Card/Card';

const Home = ({props}) => {
  const [items, setItems] = useState([])
  
  useEffect(() => {
    getItems()
  },[])

  const getItems = async () => {
    const data = await axios.get('https://ecomerce-master.herokuapp.com/api/v1/item')
    .then(response => response.data)
    .catch(err => console.error(err));
    
    const item = data.filter(item => item.image || item.images).map(item => (
      {
        id: item._id,
        name: item.product_name,
        image: item.image !== undefined ? item.image : item.images,
        price: item.price
      }
    ))
    setItems(item.filter(item => item.image.startsWith('http')))
  }
  
  return (
    <main className="grid-container">
      {
        props !== ''
        ? items.filter(item => item.name.toUpperCase().includes(props.toUpperCase())).map(item => (
          <Card key={item.id} {...item}/>
        ))
        : items.map(item => (
          <Card key={item.id} {...item}/>
        ))
      }
    </main>
  )
}

export default Home