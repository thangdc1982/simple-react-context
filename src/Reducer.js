export const getBasketTotal = (basket) => {
  let amount = 0;
  if (basket && basket.length) {
    amount = basket.reduce((accumulator, item) => accumulator + item.price, 0);
  }
  return amount;
}

const reducer = (state, action) => {  
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        basket: [...state.basket, action.item]
      };
    case "REMOVE_FROM_CART":
      let newBasket = [...state.basket];
      if (newBasket && newBasket.length) {
        newBasket.splice(0, 1); // Remove 1 element at the begin
      } else {
        console.warn("Basket is empty");
      }
      return {
        ...state,
        basket: newBasket
      }
    case "EMPTY_CART":
      return {
        ...state,
        basket: []
      }
    default:
      return state;
  }
};

export default reducer;