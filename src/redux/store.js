import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./reducers/ProductReducer";
const Store = configureStore({
  reducer: { cartList: ProductReducer },
});

export default Store;
