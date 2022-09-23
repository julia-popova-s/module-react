export const updateAmount = (state) => {
  state.totalAmount = state.basket.reduce(
    (sum, elem) => +elem.price * elem.quantity + sum,
    0
  );
};

export const updateQuantity = (state) => {
  state.totalQuantity = state.basket.reduce(
    (sum, elem) => elem.quantity + sum,
    0
  );
};

export const getIndex = (state, action) => {
  return state.basket.findIndex((elem) => elem.id === action.payload.id);
};

export const updateCounterUp = (state, index) => {
  state.basket[index].quantity += 1;
};

export const updateCounterDown = (state, index) => {
  state.basket[index].quantity -= 1;
};
