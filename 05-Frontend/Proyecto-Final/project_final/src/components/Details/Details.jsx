import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom";
import Header from '../Header/Header';

const Details = () => {
  const [itemId, setItemId] = useState('')
  const params = useParams()
  
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`https://ecomerce-master.herokuapp.com/api/v1/item/${params.id}`);
        setItemId(response.data);
      } catch (error) {
        console.error('Error', error);
      }
    })()
  }, [])
  
  return (
    <>
      <Header />
      <main>
        <section className="details">
          <div className="details-image">
            <img src={itemId.image} alt={itemId.name}/>
          </div>
          <div className="details-content">
            <h1>{itemId.product_name}</h1>
            <h2>{itemId.brand}</h2>
            <p>{itemId.description}</p>
            <span className="category">{itemId.category}</span>
            <strong>$ {itemId.price}</strong>
            <div className="btn-shop">
              <button type="submit" className="btn-shopping">Comprar</button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Details