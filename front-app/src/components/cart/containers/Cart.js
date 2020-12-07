import React from 'react';
import CartItem from '../components/CartItem'
import EmptyCart from '../../../images/empty-cart.svg'
import { useCartContext } from '../../../contexts/CartContext';
import { useDiscountContext } from '../../../contexts/DiscountContext'
import { formatNumber } from '../../../helpers/utils'

const Cart = () => {
  const { total, cartItems, toggleCart, handleCheckout, showCart, totalByBrand } = useCartContext();
  const { discounts } = useDiscountContext();
  const checkDiscount = (total, thresold) => total >= thresold;

  const showTotalAndDiscounts = (totalAmount) => {
    let totalWithDiscounts = totalAmount;
    let hasDiscount = false;
    let finalDiscount = {
      discount: 0
    };
    let hasBetterDiscount = false;
    let discountDifference = 0;
    let betterDiscount = {
      discount: 0
    };
    Object.entries(totalByBrand).forEach(entry => {
      const [key, value] = entry;
      if (discounts.find(item => item.brand === key)){
        const currentDiscount = discounts.find(item => item.brand === key);
        if (checkDiscount(value, currentDiscount.threshold)) {
          if(totalAmount - currentDiscount.discount <= totalWithDiscounts){
            totalWithDiscounts = totalAmount - currentDiscount.discount;
            hasDiscount = true;
            finalDiscount = currentDiscount;
          }
        }
        if (currentDiscount.discount > betterDiscount.discount) {
          hasBetterDiscount = true;
          betterDiscount = currentDiscount;
          discountDifference = currentDiscount.threshold - value;
        }
        if (hasBetterDiscount && betterDiscount.discount == finalDiscount.discount ) {
          hasBetterDiscount = false;
        }
      }
    });

    return (
      <div>
        { 
          hasBetterDiscount &&
        <p className="cart-possible-discount">Agrega <b>{formatNumber(discountDifference)}</b> más en productos {betterDiscount.brand} y aprovecha un descuento total de <b>{formatNumber(betterDiscount.discount)}</b> en tu compra!</p>
        }
        <p className="cart-subtotal">Subtotal de productos {formatNumber(total)}</p>
        {
          hasDiscount &&
          <>
            <p className="cart-applied-brand-discount">Descuento por marca -{formatNumber(finalDiscount.discount)}</p>
            <p className="cart-applied-discount">*Se aplicó un descuento de <b>{formatNumber(finalDiscount.discount)}</b> por haber comprado <b>{formatNumber(finalDiscount.threshold)}</b> de productos {finalDiscount.brand}!</p>
          </>
        }
        <p className="cart-total"><b>Total a pagar {formatNumber(totalWithDiscounts)}</b></p>
      </div>
    )
  }

  return (
    <>
      {
        showCart &&
        <div className="cart-container">
          {
            cartItems.length > 0
            ? (
              <div className="cart-items">
                {
                  cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} cartItem={cartItem}/>
                  ))
                }
              </div>
            )
            : <div className="empty-cart">
                <img src={EmptyCart} />
                <h3>Tu carro esta vacio</h3>
              </div>
          }
          {
            cartItems.length > 0 && 
            <div className="cart-checkout-information">
              {showTotalAndDiscounts(total)}
              <div>
                <div className="checkout-container">
                  <button
                    className="checkout-button"
                    type="button"
                    onClick={handleCheckout}
                  >Ir a pagar</button>
                </div>
                <div className="keep-shopping-container">
                  <a
                    className="keep-shopping-link" 
                    onClick={toggleCart}
                  >Seguir comprando</a>
                </div>
              </div>
            </div>
          }
        </div>
      }
    </>
  )
}

export default Cart;
