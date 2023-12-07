import { Cart } from '../customTypes/cart';

interface Action {
  payload: { id: string };
  type: string;
}

export const updateAmount = (state: Cart) => {
  state.totalAmount = state.items.reduce((sum, elem) => +elem.price * elem.quantity + sum, 0);
};

export const updateQuantity = (state: Cart) => {
  state.totalQuantity = state.items.reduce((sum, elem) => elem.quantity + sum, 0);
};

export const getIndex = (state: Cart, action: Action) => {
  return state.items.findIndex((elem) => elem.id === action.payload.id);
};

export const updateCounterUp = (state: Cart, index: number) => {
  state.items[index].quantity += 1;
};

export const updateCounterDown = (state: Cart, index: number) => {
  state.items[index].quantity -= 1;
};