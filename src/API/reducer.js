export const initialState = {
  cart: [],
  user: null,
};

export const getCartTotal = (cart) =>
  cart?.reduce((amount, items) => amount + items.price * items.qty , 0);

export const reducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    return {
      ...state,
      cart: [...state.cart, { ...action.item, qty: 1 }],
    };
  }
  if (action.type === "REMOVE_FROM_CART") {
    return {
      ...state,
      cart: state.cart.filter((x) => x.id !== action.item.id),
    };
  }
  if (action.type === "REMOVE") {
    return {
      ...state,
      cart: state.cart.filter((x) => x.id !== action.payload),
    };
  }
  if (action.type === "REMOVE_ALL") {
    return {
      ...state,
      cart: [],
    };
  }
  if (action.type === "SET_USER") {
    return { ...state, user: action.user };
  }
  if(action.type === "CHANGE_QTY_inc") {
    return{...state, cart: state.cart.map((x) => {
      if(x.id === action.payload){
        x.qty = x.qty + 1
      }
      return x
    })}
  }
  if(action.type === "CHANGE_QTY_dec") {
    return{...state, cart: state.cart.map((x) => {
      if(x.id === action.payload){
        x.qty = x.qty - 1
      }
      return x
    }).filter((x) => x.qty !== 0)}
  }
  if(action.type === "EMPTY_CART"){
    return {
      ...state,
      cart: []
    }
  }
  return state;
};
