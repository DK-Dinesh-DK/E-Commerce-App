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
    addItem: (state, action) => {
      let list = state.cartList.map((l) => {
        if (l.produc_id === action.id) {
          return { ...l, count: l.count + 1 };
        }
        return l;
      });
      state.cartList = list;
    },
    removeItem: (state, action) => {
      let list = state.cartList.map((l) => {
        if (l.produc_id === action.id) {
          return { ...l, count: l.count - 1 !== 0 ? l.count - 1 : 0 };
        }
        return l;
      });
      state.cartList = list;
    },
  },
});

export const { addItem, addCart, removeItem } = ProductReducer.actions;
export default ProductReducer.reducer;
