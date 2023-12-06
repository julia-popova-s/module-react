interface Product {
  id: string;
  img: string;
  name: string;
  price: number;
  quantity: number;
}

interface Basket {
  basket: Product[];
  totalAmount: number;
  totalQuantity: number;
}

export const updateAmount = (state: Basket) => {
  state.totalAmount = state.basket.reduce((sum, elem) => +elem.price * elem.quantity + sum, 0);
};

export const updateQuantity = (state: Basket) => {
  state.totalQuantity = state.basket.reduce((sum, elem) => elem.quantity + sum, 0);
};

export const getIndex = (state: Basket, action: { payload: { id: string } }) => {
  return state.basket.findIndex((elem) => elem.id === action.payload.id);
};

export const updateCounterUp = (state: Basket, index: number) => {
  state.basket[index].quantity += 1;
};

export const updateCounterDown = (state: Basket, index: number) => {
  state.basket[index].quantity -= 1;
};
