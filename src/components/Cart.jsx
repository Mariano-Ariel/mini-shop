import React from 'react';
import '../styles/cart.css';

const Cart = ({ cartItems, onRemoveFromCart }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);
  
  return (
    <div className="cart">
      <h2>Tu Carrito</h2>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price.toFixed(2)}
              <button onClick={() => onRemoveFromCart(item.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
