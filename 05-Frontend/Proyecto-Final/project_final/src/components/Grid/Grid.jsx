import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../Card/Card';
import product_defaults from '../../assets/img/product_default.png'

const Grid = ({props}) => {
  const [items, setItems] = useState([])
  
  useEffect(() => {
    getItems()
  },[])

  const getItems = async () => {
    try {
      const response = await axios.get('https://ecomerce-master.herokuapp.com/api/v1/item');
      const item = response.data.map(item => (
        {
          id: item._id,
          name: item.product_name,
          image: 
            item.image !== undefined ? item.image === undefined || !item.image.startsWith('http') ? product_defaults : item.image : item.images === undefined || !item.images.startsWith('http') ? product_defaults : item.images, 
          price: item.price
        }
      ))
      setItems(item)
    } catch (error) {
      console.error('Error', error);
    }
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

export default Grid