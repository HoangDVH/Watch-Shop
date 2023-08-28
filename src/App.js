import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import { HomePage } from "./pages/HomePage/HomePage";
import { HomeProduct } from "./pages/ProductPage/HomeProduct";
import { ProductDetailPage } from "./pages/ProductDetailPage/ProductDetailPage";
import { CartPage } from "./pages/CartPage/CartPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import CSS for styling
import { PaymentPage } from "./pages/PaymentPage/PaymentPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import { AuthContextProvider } from "./context/AuthContext";
import { AdminPage } from "./pages/AdminPage/AdminPage";
import { NewsPage } from "./pages/NewsPage/NewsPage";
import { NewsDetailPage } from "./pages/NewsDetailPage/NewsDetailPage";
function App() {
  return (
    <div className="App">
      {/* Render your components using the lobinniProducts state */}
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/:category" element={<HomeProduct />} />
          <Route
            path="/:category/:productTitle"
            element={<ProductDetailPage />}
          />
          <Route path="/gio-hang" element={<CartPage />} />
          <Route path="/gio-hang/thanh-toan" element={<PaymentPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/tin tức và sự kiện" element={<NewsPage />} />
          <Route path="/tin tức và sự kiện/:news" element={<NewsDetailPage />} />



        </Routes>
      </AuthContextProvider>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default App;
