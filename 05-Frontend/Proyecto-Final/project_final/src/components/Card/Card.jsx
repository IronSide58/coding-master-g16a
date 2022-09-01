import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ id, name, image, price }) => (
  <Link to={`/details/${id}`}>
    <div className="card-container">
      <div className="card-image">
        <img src={image} alt={name} />
      </div>
      <hr />
      <div className="card-content">
        <h2>{name}</h2>
        <p className="price">
          $
          {price}
        </p>
      </div>
    </div>
  </Link>
);

export default Card;
