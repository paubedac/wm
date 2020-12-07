import Services from '../services/services';

const groupBy = (objectArray, property) => {
  return objectArray.reduce(function (acc, obj) {
    let key = obj[property]
    if (!acc[key]) {
      acc[key] = 0;
    }
    acc[key] += obj.price * obj.quantity
    return acc
  }, {})
}

export const sumItems = (cartItems) => {
  let itemCount = cartItems.reduce((total, product) => total + product.quantity, 0);
  let total = cartItems.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(0);
  let totalByBrand = groupBy(cartItems, 'brand');
  
  return { itemCount, total, totalByBrand }
}

export const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.cartItems.find(item => item.id === action.payload.id)) {
        state.cartItems.push({
          ...action.payload,
          quantity: 1
        })
      } 
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems]
      }
      
    case "REMOVE_ITEM":
      return {
        ...state,
        ...sumItems(state.cartItems.filter(item => item.id !== action.payload.id)),
        cartItems: [...state.cartItems.filter(item => item.id !== action.payload.id)]
      }

    case "INCREASE":
      state.cartItems[state.cartItems.findIndex(item => item.id === action.payload.id)].quantity++
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems]
      }

    case "DECREASE":
      state.cartItems[state.cartItems.findIndex(item => item.id === action.payload.id)].quantity--
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems]
      }

    case "CHECKOUT":
      return {
        cartItems: [],
        checkout: true,
        ...sumItems([], []),
      }

    case "CLEAR":
      return {
        cartItems: [],
        ...sumItems([], []),
      }
    
    case "TOGGLE_CART":
      return {
        ...state,
        showCart: !state.showCart
      }
 
    default:
      return state
  }
}