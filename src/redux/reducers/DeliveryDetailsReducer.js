import { createSlice } from "@reduxjs/toolkit";

export const DeliveryReducer = createSlice({
  name: "cart_product",
  initialState: {
    userDetails: {
      name: "",
      doorNo: "",
      street: "",
      city: "",
      state: "",
      pinCode: "",
      paymentMethod: "",
    },
  },
  reducers: {
    updateDeliveryDetails: (state, action) => {
      state.userDetails = { ...action.payload };
    },
  },
});

export const { updateDeliveryDetails } = DeliveryReducer.actions;
export default DeliveryReducer.reducer;
