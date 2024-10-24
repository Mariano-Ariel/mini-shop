import React from 'react';
import '../styles/cart.css';

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      {cartItems.length > 0 ? (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <div className="cart-item">
                  <img src={item.image} alt={item.title} />
                  <div className="cart-item-details">
                    <span>{item.title}</span>
                    <span>{item.quantity} x ${item.price}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <button className="checkout-button">Finalizar Compra</button>
        </>
      ) : (
        <p>Tu carrito está vacío</p>
      )}
    </div>
  );
};

export default CartDropdown;
