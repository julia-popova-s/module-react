import { createSlice } from "@reduxjs/toolkit";
const basketSlice = createSlice({
  name: "basket",
  initialState: {
    basket: [],
  },
  reducers: {
    addProduct(state, action) {
      const index = state.basket.findIndex(
        (elem) => elem.id === action.payload.id
      );
      console.log(index);
      if (index !== -1) {
        const updateData = [...state.basket];
        updateData[index] = {
          ...updateData[index],
          quantity: updateData[index].quantity + 1,
        };
        state.basket = updateData;
      } else {
        const updateData = state.basket.concat({
          ...action.payload,
          quantity: 1,
        });
        state.basket = updateData;
      }
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
    },
  },
});
export const { addProduct, removeProduct } = basketSlice.actions;
export default basketSlice.reducer;
