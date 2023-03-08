import { useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from 'react-router-dom';

import ProductPage, { productsLoader } from './scenes/productPage';
import ProductDetailPage from './scenes/productDetailPage';
import CartPage from './scenes/cartPage';

import './index.css';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      children: [
        {
          index: true,
          id: 'products',
          element: <ProductPage />,
          loader: productsLoader,
        },
        // {
        //   path: 'product/:productId',
        //   element: <ProductDetailPage />,
        // },
        // {
        //   path: 'cart',
        //   element: <CartPage />,
        // },
      ],
    },
  ]);

  return (
    <div className='app'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
