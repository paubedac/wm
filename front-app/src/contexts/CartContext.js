import React, { createContext, useReducer, useContext } from 'react';
import { CartReducer, sumItems } from '../reducers/CartReducer';

export const CartContext = createContext()

const initialState = { cartItems: [], ...sumItems([]), showCart: false};

const CartContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(CartReducer, initialState)
  const increase = payload => {
    dispatch({type: 'INCREASE', payload})
  }

  const decrease = payload => {
    dispatch({type: 'DECREASE', payload})
  }

  const addProduct = payload => {
    dispatch({type: 'ADD_ITEM', payload})
  }

  const removeProduct = payload => {
    dispatch({type: 'REMOVE_ITEM', payload})
  }

  const clearCart = () => {
    dispatch({type: 'CLEAR'})
  }

  const handleCheckout = () => {
    dispatch({type: 'CHECKOUT'})
  }

  const toggleCart = () => {
    dispatch({type: 'TOGGLE_CART'})
  }

  const contextValues = {
    removeProduct,
    addProduct,
    increase,
    decrease,
    clearCart,
    handleCheckout,
    toggleCart,
    ...state
  } 

  return ( 
    <CartContext.Provider value={contextValues} >
      { children }
    </CartContext.Provider>
  );
}
 
export default CartContextProvider;

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}