import { createSlice } from '@reduxjs/toolkit';
import {
  updateAmount,
  updateQuantity,
  getIndex,
  updateCounterUp,
  updateCounterDown,
} from '../../utils/helperForCart';

import { Cart } from '../../customTypes/cart';

const cartSliceState: Cart = {
  items: [],
  totalAmount: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: cartSliceState,
  reducers: {
    addProduct(state, action) {
      const index = getIndex(state, action);
      if (index !== -1) {
        updateCounterUp(state, index);
      } else {
        state.items.push(Object.assign(action.payload, { quantity: 1 }));
      }
      updateAmount(state);
      updateQuantity(state);
    },

    removeProduct(state, action) {
      const index = getIndex(state, action);
      if (index !== -1) {
        state.items = state.items.filter((item) => item.id !== action.payload.id);
      }
      updateAmount(state);
      updateQuantity(state);
    },

    plusProduct(state, action) {
      const index = getIndex(state, action);
      if (index !== -1) {
        updateCounterUp(state, index);
      }
      updateAmount(state);
      updateQuantity(state);
    },

    minusProduct(state, action) {
      const index = getIndex(state, action);
      if (action.payload.quantity > 1) {
        updateCounterDown(state, index);
      } else {
        state.items = state.items.filter((item) => item.id !== action.payload.id);
      }
      updateAmount(state);
      updateQuantity(state);
    },
  },
});

export const { addProduct, removeProduct, plusProduct, minusProduct } = cartSlice.actions;
export default cartSlice.reducer;
