import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Root from "./Root";
import Store from "./Store";
import ShoppingCart from "./ShoppingCart";
import ErrorPage from "./ErrorPage";

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (newItem) => {
    setCart([...cart, newItem]);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Root cart={cart} addToCart={addToCart} />}
        />
        <Route path="/store" element={<Store cart={cart} />} />
        <Route path="/cart" element={<ShoppingCart cart={cart} />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}
