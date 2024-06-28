import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from "./page/products/Products.jsx";
import AboutUs from "./page/about-us/AboutUs.jsx";
import Layout from "./components/layout/Layout.jsx";
import { ProductDetail } from "./page/product-details/ProductDetail.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import Register from "./page/auth/register/Register.jsx";
import Login from "./page/auth/login/Login.jsx";
import { Cart } from "./page/cart/Cart.jsx";

import { store } from "./redux/store";
// import { store } from './app/store'
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/product-detail",
        element: <ProductDetail />,
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/products/:id",
        element: <ProductDetail />
      }
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
