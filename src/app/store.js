import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/products/productsSlice'
import cartReducer from "../features/cart/cartSlice"

// import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    product: productsReducer,
    cart:cartReducer
  },
});
