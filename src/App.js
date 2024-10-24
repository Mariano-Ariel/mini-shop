// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import OffersBanner from './components/OffersBanner';  
import ProductList from './components/ProductList';
import ProductPage from './components/ProductPage'; // Asegúrate de importar ProductPage
import Footer from './components/Footer';  
import './App.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const itemInCart = prevItems.find((item) => item.id === product.id);
      if (itemInCart) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <Router> {/* Agrega el Router aquí */}
      <div className="app">
        <Header cartItems={cartItems} />
        <main>
          <OffersBanner />
          <Routes>
            <Route path="/" element={<ProductList onAddToCart={addToCart} />} />
            <Route path="/product/:productId" element={<ProductPage onAddToCart={addToCart} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
