import { createSlice } from "@reduxjs/toolkit";
import {
  updateAmount,
  updateQuantity,
  getIndex,
  updateCounterUp,
  updateCounterDown,
  removeOneElement,
} from "./helper";

const basketSlice = createSlice({
  name: "basket",
  initialState: {
    basket: [],
    totalAmount: 0,
    totalQuantity: 0,
  },
  reducers: {
    addProduct(state, action) {
      const index = getIndex(state, action);
      if (index !== -1) {
        state.basket = updateCounterUp(state, index);
      } else {
        state.basket.push({
          ...action.payload,
          quantity: 1,
        });
      }
      updateAmount(state);
      updateQuantity(state);
    },

    removeProduct(state, action) {
      const index = getIndex(state, action);
      if (index !== -1) {
        state.basket = removeOneElement(state, index);
      }
      updateAmount(state);
      updateQuantity(state);
    },

    plusProduct(state, action) {
      const index = getIndex(state, action);
      if (index !== -1) {
        state.basket = updateCounterUp(state, index);
      }
      updateAmount(state);
      updateQuantity(state);
    },
    minusProduct(state, action) {
      const index = getIndex(state, action);
      let nextState;
      if (action.payload.quantity > 1) {
        nextState = updateCounterDown(state, index);
      } else {
        nextState = removeOneElement(state, index);
      }
      state.basket = nextState;
      updateAmount(state);
      updateQuantity(state);
    },
  },
});
export const { addProduct, removeProduct, plusProduct, minusProduct } =
  basketSlice.actions;
export default basketSlice.reducer;
