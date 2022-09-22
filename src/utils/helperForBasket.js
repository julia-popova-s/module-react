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
  state.basket[index].quantity += 1;
};

const updateCounterDown = (state, index) => {
  state.basket[index].quantity -= 1;
};

export {
  updateAmount,
  updateQuantity,
  getIndex,
  updateCounterUp,
  updateCounterDown,
};
