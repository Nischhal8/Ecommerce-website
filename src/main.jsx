import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import ProductDetails from './pages/ProductDetails';
import ProductLists from './pages/Products';
import About from './pages/About';
import Cart from './pages/Cart';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/products',
    element: <ProductLists />,
  },
  {
    path: '/products/:productId',
    element: <ProductDetails />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
