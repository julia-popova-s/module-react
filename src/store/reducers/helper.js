const updateAmount = (state) => {
  state.totalAmount = state.basket.reduce(
    (sum, elem) => +elem.price * elem.quantity + sum,
    0
  );
};
const updateQuantity = (state) => {
  state.totalQuantity = state.basket.reduce(
    (sum, elem) => elem.quantity + sum,
    0
  );
};
const getIndex = (state, action) => {
  return state.basket.findIndex((elem) => elem.id === action.payload.id);
};
const updateCounterUp = (state, index) => {
  const nextState = [...state.basket];
  nextState[index] = {
    ...nextState[index],
    quantity: nextState[index].quantity + 1,
  };
  return nextState;
};
const updateCounterDown = (state, index) => {
  const nextState = [...state.basket];
  nextState[index] = {
    ...nextState[index],
    quantity: nextState[index].quantity - 1,
  };
  return nextState;
};
const removeOneElement = (state, index) => {
  return [...state.basket.slice(0, index), ...state.basket.slice(index + 1)];
};
export {
  updateAmount,
  updateQuantity,
  getIndex,
  updateCounterUp,
  updateCounterDown,
  removeOneElement,
};
