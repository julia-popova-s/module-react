import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./reducers/basket";

export default configureStore({
  reducer: {
    basket: basketReducer
  }
});
