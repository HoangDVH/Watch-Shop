import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    products: [],
    currentPage: 1,
    totalPages: 1,
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload.products;
      state.totalPages = action.payload.totalPages;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    updateProduct: (state, action) => {
      const { productId, updatedProductData } = action.payload;
      const updatedProducts = state.products.map((product) =>
        product.id === productId ? { ...product, ...updatedProductData } : product
      );
      state.products = updatedProducts;
    },
  },
});

export const { setProducts, setCurrentPage, updateProduct } = dataSlice.actions;

export const selectProducts = (state) => state.data.products;
export const selectCurrentPage = (state) => state.data.currentPage;
export const selectTotalPages = (state) => state.data.totalPages;

export default dataSlice.reducer;
