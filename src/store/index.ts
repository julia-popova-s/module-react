import { configureStore } from '@reduxjs/toolkit';
import basketReducer from './reducers/cart';

export const store = configureStore({
  reducer: {
    cart: basketReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
