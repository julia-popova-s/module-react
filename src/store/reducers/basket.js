import { createSlice } from "@reduxjs/toolkit";
import {
  updateAmount,
  updateQuantity,
  getIndex,
  updateCounterUp,
  updateCounterDown,
} from "../../utils/helperForBasket";

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
        updateCounterUp(state, index);
      } else {
        state.basket.push(Object.assign(action.payload, { quantity: 1 }));
      }
      updateAmount(state);
      updateQuantity(state);
    },

    removeProduct(state, action) {
      const index = getIndex(state, action);
      if (index !== -1) {
        state.basket = state.basket.filter(
          (item) => item.id !== action.payload.id
        );
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
        state.basket = state.basket.filter(
          (item) => item.id !== action.payload.id
        );
      }
      updateAmount(state);
      updateQuantity(state);
    },
  },
});
export const { addProduct, removeProduct, plusProduct, minusProduct } =
  basketSlice.actions;
export default basketSlice.reducer;
