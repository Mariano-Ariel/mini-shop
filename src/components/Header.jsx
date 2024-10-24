import React, { useState } from 'react';
import '../styles/header.css';
import CartDropdown from './CartDropdown';

const Header = ({ cartItems }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="header">
      <div className="logo">Tu Tienda</div>
      <input type="text" placeholder="Buscar productos..." className="search-bar" />
      <nav>
        <ul>
          <li
            className="cart-menu"
            onMouseEnter={() => setIsDropdownVisible(true)}
            onMouseLeave={() => setIsDropdownVisible(false)}
          >
            <a href="/cart" className="cart-link">
              Carrito <span className="cart-count">{cartCount}</span>
            </a>
            {isDropdownVisible && <CartDropdown cartItems={cartItems} />}
          </li>
          <li><a href="/checkout">Checkout</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
