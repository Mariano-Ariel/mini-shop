import React from 'react';
import '../styles/cart.css';

const Checkout = () => {
  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" required />
        </div>
        <div>
          <label htmlFor="address">Dirección:</label>
          <input type="text" id="address" required />
        </div>
        <button type="submit">Finalizar Compra</button>
      </form>
    </div>
  );
};

export default Checkout;
