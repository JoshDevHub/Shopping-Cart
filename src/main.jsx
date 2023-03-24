import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'

import Store from "./Store";
import ShoppingCart from "./ShoppingCart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Store />,
  },
  {
    path: "/cart",
    element: <ShoppingCart />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
