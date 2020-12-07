import React from 'react';
import Cart from './components/cart/containers/Cart'
import Products from './components/products/containers/Products';
import TopBar from './components/topbar/containers/Topbar';
import Footer from './components/footer/containers/Footer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <TopBar />
      <Cart />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
