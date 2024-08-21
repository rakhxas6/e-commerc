import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: localStorage.getItem("carts")
    ? JSON.parse(localStorage.getItem("carts"))
    : [],
  lovedItems: localStorage.getItem("lovedItems")
    ? JSON.parse(localStorage.getItem("lovedItems"))
    : [],
  statusTab: false,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const { productId, quantity } = action.payload;
      const indexProductId = state.items.findIndex(
        (item) => item.productId === productId
      );
      if (indexProductId >= 0) {
        state.items[indexProductId].quantity += quantity;
      } else {
        state.items.push({ productId, quantity });
      }
      localStorage.setItem("carts", JSON.stringify(state.items));
    },

    changeQuantity(state, action) {
      const { productId, quantity } = action.payload;
      const indexProductId = state.items.findIndex(
        (item) => item.productId === productId
      );
      if (quantity > 0) {
        state.items[indexProductId].quantity = quantity;
      } else {
        state.items = state.items.filter(
          (item) => item.productId !== productId
        );
      }
      localStorage.setItem("carts", JSON.stringify(state.items));
    },

    clearCart(state) {
      state.items = [];
      localStorage.removeItem("carts");
    },

    toggleStatusTab(state) {
      state.statusTab = !state.statusTab;
    },

    toggleLoveItem(state, action) {
      const productId = action.payload;
      const index = state.lovedItems.findIndex((id) => id === productId);
      if (index >= 0) {
        state.lovedItems = state.lovedItems.filter((id) => id !== productId);
      } else {
        state.lovedItems.push(productId);
      }
      localStorage.setItem("lovedItems", JSON.stringify(state.lovedItems));
    },
  },
});

export const {
  addToCart,
  changeQuantity,
  clearCart,
  toggleStatusTab,
  toggleLoveItem,
} = cartSlice.actions;

export default cartSlice.reducer;
