import React from 'react'

const Card = ({id, name, image, price}) => {
  return (
    <div className="card-container">
        <div className="card-image">
          <img src={image}/>
        </div>
        <hr/>
        <div className="card-content">
          <h2>{name}</h2>
          <p className="price">$ {price}</p>
        </div>
    </div>
  )
}

export default Card