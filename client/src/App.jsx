import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './scenes/root';
import ProductPage, { productsLoader } from './scenes/product';
import ProductDetailPage, { productLoader } from './scenes/productDetail';
import CartPage from './scenes/cart';
import AuthenticationPage from './scenes/authentication';

import './index.css';
import ErrorPage from './scenes/error/Error';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          id: 'products',
          element: <ProductPage />,
          loader: productsLoader,
        },
        {
          path: 'product/:productId',
          id: 'product',
          element: <ProductDetailPage />,
          loader: productLoader,
        },
        {
          path: 'cart',
          element: <CartPage />,
        },
        {
          path: 'auth',
          element: <AuthenticationPage />,
        },
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
