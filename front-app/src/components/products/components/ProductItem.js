import React from 'react';
import { formatNumber } from '../../../helpers/utils'
import { useCartContext } from '../../../contexts/CartContext';
import '../style.css'

const ProductItem = ({...props}) => {
  const { product } = props;
  const { addProduct, cartItems, increase, decrease, removeProduct } = useCartContext();

  const isInCart = product => {
    return !!cartItems.find(item => item.id === product.id);
  }

  const quantityInCart = product => {
    return cartItems.find(item => item.id === product.id).quantity;
  }
  
  return (
    <div className="product-item">
      <div className="product-item-image-container">
        <img className="product-item-image" src={`http://${product.image}`}/>
      </div>
      <div className="product-item-description">
        <span><b>{product.brand}</b>&nbsp;{product.description}</span>
      </div>
      <div className="product-item-price">
        <p><b>{formatNumber(product.price)}</b></p>
      </div>
      <div className="product-item-button-container"> 
        {
          isInCart(product)
          ? (
            <div className="product-item-buttons-container">
              <button
                className="product-item-button-minus"
                onClick={() => {
                  quantityInCart(product) > 1
                  ? decrease(product)
                  : removeProduct(product)
                }}>-</button>
              <div className="product-item-quantity">
                {quantityInCart(product)}
              </div>
              <button 
                className="product-item-button-plus"
                onClick={() => increase(product)}
                >+</button>
            </div>
          )
          : (
            <button
              className="product-item-button"
              onClick={() => addProduct(product)}
              type="button">Agregar</button>
          ) 
        }
      </div>
    </div>
  )
}

export default ProductItem;