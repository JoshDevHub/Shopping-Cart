import { BrowserRouter, Routes, Route } from "react-router-dom";

import Root from "./Root";
import Store from "./Store";
import ShoppingCart from "./ShoppingCart";
import ErrorPage from "./ErrorPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />} errorElement={<ErrorPage />} />
        <Route path="/store" element={<Store />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}
