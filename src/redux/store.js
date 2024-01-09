import { configureStore } from "@reduxjs/toolkit";
import DeliveryDetailsReducer from "./reducers/DeliveryDetailsReducer";
import ProductReducer from "./reducers/ProductReducer";
const Store = configureStore({
  reducer: { cartList: ProductReducer ,deliverDetails:DeliveryDetailsReducer},
});

export default Store;
