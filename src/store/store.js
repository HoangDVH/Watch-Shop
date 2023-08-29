import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { updateCart } from "./cartSlice"; // Đường dẫn tới file cartSlice.js
import dataReducer from "./dataSlice";
import commentReducer from "./commentsSlice"

const store = configureStore({
  reducer: {
    data: dataReducer,
    cart: cartReducer,
    comments: commentReducer,
  },
});

// Khôi phục giỏ hàng từ localStorage sau khi store đã được tạo
const savedCart = localStorage.getItem("cart");
if (savedCart) {
  store.dispatch(updateCart(JSON.parse(savedCart)));
}

// Lắng nghe sự thay đổi của state giỏ hàng và lưu vào localStorage
store.subscribe(() => {
  const cart = store.getState().cart;
  localStorage.setItem("cart", JSON.stringify(cart));
});

export default store;
