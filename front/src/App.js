import React from 'react';
import {createBrowserRouter, Link, RouterProvider} from "react-router-dom";
import Layout from "./components/pages/Layout";
import HomePage from "./components/pages/HomePage";
import CatalogPage from "./components/pages/CatalogPage";
import ItemPage from "./components/pages/ItemPage";
import StonesProvider from "./components/context/StonesContext";

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
        path: '*',
        element: <h1>Page not found</h1>,
      }
    ]
  }
])

function App() {
  return (
      <StonesProvider>
        <RouterProvider router={router} />
      </StonesProvider>
  );
}

export default App;
