import React, { useEffect } from "react";
import Counter from "./features/counter/Counter";
import "./App.css";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

// import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";
import ProductDetailPage from "./pages/ProductDetailPage";
import Protected from "./features/auth/components/Protected";
import { useDispatch, useSelector } from "react-redux";
import { fetchItemsByUserIdAsync } from "./features/cart/cartSlice";
import { selectLoggedInUser } from "./features/auth/authSlice";
import PageNotFound from "./pages/404";
import OrderSuccessPage from "./pages/OrderSuccessPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected>
        <Home></Home>
      </Protected>
    ),
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/cart",
    element: (
      <Protected>
        <CartPage />
      </Protected>
    ),
  },
  {
    path: "/checkout",
    element: (
      <Protected>
        <Checkout />
      </Protected>
    ),
  },
  {
    path: "/product-detail/:id",
    element: (
      <Protected>
        <ProductDetailPage />
      </Protected>
    ),
  },
  {
    path: "/order-success/:id",
    element: <OrderSuccessPage />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

function App() {
  const dispatch = useDispatch();
  let user = useSelector(selectLoggedInUser);
  // console.log(user);

  useEffect(() => {
    if (user) {
      dispatch(fetchItemsByUserIdAsync(user.id));
    }
  }, [dispatch, user?.id]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
