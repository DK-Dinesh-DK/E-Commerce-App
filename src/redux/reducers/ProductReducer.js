import { createSlice } from "@reduxjs/toolkit";

export const ProductReducer = createSlice({
  name: "cart_product",
  initialState: {
    cartList: [],
  },
  reducers: {
    addCart: (state, action) => {
      state.cartList = [...state.cartList, action.payload];
    },
    deleteCart: (state, action) => {
      state.cartList = state.cartList.filter((i) => i.id !== action.payload.id);
    },
    addItem: (state, action) => {
      let list = state.cartList.map((l) => {
        if (l.id === action.payload.id) {
          return { ...l, count: l.count + 1 };
        }
        return l;
      });
      state.cartList = list;
    },
    removeItem: (state, action) => {
      let list = state.cartList.map((l) => {
        if (l.id === action.payload.id) {
          return { ...l, count: l.count - 1 < 0 ? 0 : l.count - 1 };
        }
        return l;
      });
      state.cartList = list;
    },
  },
});

export const { addItem, addCart, removeItem, deleteCart } =
  ProductReducer.actions;
export default ProductReducer.reducer;
