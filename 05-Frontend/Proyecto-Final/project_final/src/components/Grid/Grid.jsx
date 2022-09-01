import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../Card/Card';
import productDefaults from '../../assets/img/product_default.png';

const Grid = ({ props }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    try {
      const response = await axios.get('https://ecomerce-master.herokuapp.com/api/v1/item');
      const item = response.data.map((param) => (
        {
          id: param._id,
          name: param.product_name,
          image: param.image !== undefined ? param.image === undefined || !param.image.startsWith('http') ? productDefaults : param.image : param.images === undefined || !param.images.startsWith('http') ? productDefaults : param.images,
          price: param.price,
        }
      ));
      setItems(item);
    } catch (error) {
      console.error('Error', error);
    }
  };

  return (
    <main className="grid-container">
      {
        props !== '' ? items.filter((item) => item.name.toUpperCase().includes(props.toUpperCase())).map((item) => (
          <Card key={item.id} {...item} />
        ))
          : items.map((item) => (
            <Card key={item.id} {...item} />
          ))
      }
    </main>
  );
};

export default Grid;
