import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
  Login,
  SignUp,
  Activation,
  HomePage,
  ProductsPage,
  BestSellingPage,
  EventsPage,
  FAQPage,
  ProductDetailPage,
  ProfilePage,
  ShopCreatePage,
  SellerActivationPage,
  ShopLoginPage,
} from "./Routes.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Store from "./redux/store";
import { loadUser } from "./redux/action/user";
import { useSelector } from "react-redux";
import ProtectedRoute from "./ProtectedRoute";
import { loadSeller } from "./redux/action/seller";
import { ShopHomePage } from "./ShopRoute.js";
import SellerProtectedRoute from "./SellerProtectedRoute";

const App = () => {
  const { loading, isAuthenticated } = useSelector((state) => state.user);
  const { isSeller, isLoading } = useSelector((state) => state.seller);
  useEffect(() => {
    Store.dispatch(loadUser());
    Store.dispatch(loadSeller());

    if (isSeller === true) {
      return <Navigate to="/shop" replace />;
    }
  }, []);
  return (
    <>
      {loading || isLoading ? null : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route
              path="/activation/:activation_token"
              element={<Activation />}
            />
            <Route
              path="/seller/activation/:activation_token"
              element={<SellerActivationPage />}
            />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/product/:name" element={<ProductDetailPage />} />
            <Route path="/best-selling" element={<BestSellingPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route
              path="/profile"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <ProfilePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/checkout"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <ProfilePage />
                </ProtectedRoute>
              }
            />
            {/* shop routes */}
            <Route path="/shop-create" element={<ShopCreatePage />} />
            <Route path="/shop-login" element={<ShopLoginPage />} />
            <Route
              path="/shop/:id"
              element={
                <SellerProtectedRoute>
                  <ShopHomePage />
                </SellerProtectedRoute>
              }
            />
          </Routes>
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
        </BrowserRouter>
      )}
    </>
  );
};

export default App;
