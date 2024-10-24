import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/product.css';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} className="product-image" />
        <h2 className="product-name">{product.title}</h2>
      </Link>
      <p className="product-price">${product.price.toFixed(2)}</p>
      <button className="add-to-cart" onClick={() => onAddToCart(product)}>Agregar al carrito</button>
    </div>
  );
};

export default ProductCard;
