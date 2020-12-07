import React from 'react';
import { useCartContext } from '../../../contexts/CartContext';
import { formatNumber } from '../../../helpers/utils'
import '../style.css'

const CartItem = ({...props}) => {
  const { cartItem } = props;

  const { increase, decrease, removeProduct } = useCartContext();
  
  return (
    <div className="cart-item">
      <div className="cart-item-image-container">
        <img className="cart-item-image" src={`http://${cartItem.image}`}/>
        <div className="cart-item-quantity">{cartItem.quantity}</div>
      </div>
      <div >
        <p className="cart-item-brand">{cartItem.brand}</p>
        <p className="cart-item-description">{cartItem.description}</p>
        <p className="cart-item-price"><b>{formatNumber(cartItem.price)}</b></p>
      </div>
      <div className="cart-item-buttons">
        <button
          className="cart-item-button-minus"
          onClick={() => {
            cartItem.quantity > 1
            ? decrease(cartItem)
            :removeProduct(cartItem)
          }}>-</button>
        <button
          className="cart-item-button-plus"
          onClick={() => increase(cartItem)}
        >+</button>
        <div className="cart-item-remove-link-container">
          <a
            className="cart-item-remove-link"
            onClick={() => removeProduct(cartItem)}
          >Eliminar</a>
        </div>
      </div>
    </div>
  )
}

export default CartItem;