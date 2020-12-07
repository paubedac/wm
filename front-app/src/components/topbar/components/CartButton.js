import React from 'react';
import CartIcon from '../../../images/lider-cart.svg'
import { useCartContext } from '../../../contexts/CartContext'
import '../style.css'

const CartButton = () => {
  const { itemCount, toggleCart } = useCartContext();

  return (
    <div className="cart-button-container">
      <div className="cart-button" onClick={() => toggleCart()}>
        <img src={CartIcon} className="cart-button-icon" alt="cart" />
        <div className="cart-button-quantity">{itemCount}</div>
      </div>
    </div>
  );
}

export default CartButton;