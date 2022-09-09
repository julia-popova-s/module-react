import { createSlice } from "@reduxjs/toolkit";
const basketSlice = createSlice({
  name: "basket",
  initialState: {
    basket: [],
    totalAmount: 0,
    totalQuantity: 0,
  },
  reducers: {
    addProduct(state, action) {
      const index = state.basket.findIndex(
        (elem) => elem.id === action.payload.id
      );

      if (index !== -1) {
        const updateData = [...state.basket];
        updateData[index] = {
          ...updateData[index],
          quantity: updateData[index].quantity + 1,
        };
        state.basket = updateData;
      } else {
        state.basket.push({
          ...action.payload,
          quantity: 1,
        });
      }
      state.totalAmount = state.basket.reduce(
        (sum, elem) => +elem.price * elem.quantity + sum,
        0
      );

      state.totalQuantity = state.basket.reduce(
        (sum, elem) => elem.quantity + sum,
        0
      );
    },

    removeProduct(state, action) {
      const index = state.basket.findIndex(
        (elem) => elem.id === action.payload.id
      );
      if (index !== -1) {
        const updateData = [
          ...state.basket.slice(0, index),
          ...state.basket.slice(index + 1),
        ];
        state.basket = updateData;
      }
      state.totalAmount = state.basket.reduce(
        (sum, elem) => +elem.price * elem.quantity + sum,
        0
      );

      state.totalQuantity = state.basket.reduce(
        (sum, elem) => elem.quantity + sum,
        0
      );
    },

    plusProduct(state, action) {
      const index = state.basket.findIndex(
        (elem) => elem.id === action.payload.id
      );
      const updateData = [...state.basket];
      updateData[index] = {
        ...updateData[index],
        quantity: updateData[index].quantity + 1,
      };
      state.basket = updateData;
    },

    minusProduct(state, action) {
      const index = state.basket.findIndex(
        (elem) => elem.id === action.payload.id
      );
      const updateData = [...state.basket];
      updateData[index] = {
        ...updateData[index],
        quantity: updateData[index].quantity - 1,
      };
      state.basket = updateData;
    },
  },
});
export const { addProduct, removeProduct, plusProduct, minusProduct } =
  basketSlice.actions;
export default basketSlice.reducer;
