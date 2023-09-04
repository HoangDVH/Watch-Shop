import { setProducts } from "./dataSlice";
import { updateProduct as updateProductAction } from "./dataSlice";
export const fetchProducts = (page) => async (dispatch) => {
  try {
    const response = await fetch(
      `https://ktc99p-8080.csb.app/watches?_page=${page}&_limit=15`
    );
    const products = await response.json();
    const totalCountHeader = response.headers.get("X-Total-Count");
    const totalPages = Math.ceil(totalCountHeader / 15);
    dispatch(setProducts({ products, totalPages }));
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

export const addProduct = (productData) => async (dispatch) => {
  try {
    const response = await fetch("https://ktc99p-8080.csb.app/watches", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });

    if (response.ok) {
      dispatch(fetchProducts());
    } else {
      console.error("Error adding product:", response.statusText);
    }
  } catch (error) {
    console.error("Error adding product:", error);
  }
};

export const deleteProduct = (productId) => async (dispatch) => {
  try {
    const response = await fetch(`https://ktc99p-8080.csb.app/watches/${productId}`, {
      method: "DELETE",
    });

    if (response.ok) {
      // Reload products after deleting
      dispatch(fetchProducts());
    } else {
      console.error("Error deleting product:", response.statusText);
    }
  } catch (error) {
    console.error("Error deleting product:", error);
  }
};

export const updateProduct =
  (productId, updatedProductData) => async (dispatch) => {
    try {
      const response = await fetch(
        `https://ktc99p-8080.csb.app/watches/${productId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedProductData),
        }
      );

      if (response.ok) {
        // Dispatch the updateProduct action to update the Redux store
        dispatch(updateProductAction({ productId, updatedProductData }));
      } else {
        console.error("Error updating product:", response.statusText);
      }
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };
