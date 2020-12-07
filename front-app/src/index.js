import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './routes'
import reportWebVitals from './reportWebVitals';
import ProductsContextProvider from './contexts/ProductsContext';
import DiscountsContextProvider from './contexts/DiscountContext';
import CartContextProvider from './contexts/CartContext';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.render(
    <HelmetProvider>
      <ProductsContextProvider>
        <DiscountsContextProvider>
          <CartContextProvider>
            <Routes />
          </CartContextProvider>
        </DiscountsContextProvider>
      </ProductsContextProvider>
    </HelmetProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
