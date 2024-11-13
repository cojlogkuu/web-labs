import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Provider} from 'react-redux';
import store from "./assets/store/store";
import Layout from "./components/pages/Layout";
import HomePage from "./components/pages/HomePage";
import CatalogPage from "./components/pages/catalog/CatalogPage";
import ItemPage from "./components/pages/item/ItemPage";
import CartPage from "./components/pages/cart/CartPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <HomePage />
      },
      {
        path: 'catalog',
        element: <CatalogPage />,
      },
      {
        path: 'catalog/:id',
        element: <ItemPage />
      },
      {
        path: 'cart',
        element: <CartPage />,
      },
      {
        path: '*',
        element: <h1>Page not found</h1>,
      }
    ]
  }
])

function App() {
  return (
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
  );
}

export default App;
