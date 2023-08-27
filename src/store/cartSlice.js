import { createSelector, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },
    increaseQuantity: (state, action) => {
      const itemToIncrease = state.find(
        (item) => item.id === action.payload.id
      );
      if (itemToIncrease) {
        itemToIncrease.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const itemToDecrease = state.find(
        (item) => item.id === action.payload.id
      );
      if (itemToDecrease && itemToDecrease.quantity > 1) {
        itemToDecrease.quantity -= 1;
      }
    },
    updateCart: (state, action) => {
      return action.payload; // Cập nhật giỏ hàng
    },
    removeFromCart: (state, action) => {
      const itemToRemoveIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemToRemoveIndex !== -1) {
        state.splice(itemToRemoveIndex, 1); // Xóa sản phẩm khỏi giỏ hàng
      }
    },
    updateSoldQuantity: (state, action) => {
      const { id, soldQuantity } = action.payload;
      const productToUpdate = state.find((item) => item.id === id);
      if (productToUpdate) {
        productToUpdate.soldQuantity = soldQuantity;
      }
    },
  },
});


const selectCartItems = (state) => state.cart;

export const selectTotalPrice = createSelector(selectCartItems, (cartItems) => {
  return cartItems.reduce(
    (total, item) => total + item.quantity * item.current_price,
    0
  );
});
export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  updateCart,
  removeFromCart,
  updateSoldQuantity
} = cartSlice.actions;
export default cartSlice.reducer;
