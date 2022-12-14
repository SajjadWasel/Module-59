import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Main from './layouts/Main';
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import { productsAndCartLoader } from './loaders/productsAndCartLoader';
import Login from './Login/Login';
import Signup from './Signup/Signup';


function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children: [
        {
          path: '/shop',
          loader: () => fetch('products.json'),
          element: <Shop></Shop>
        },
        {
          path:'/orders',
          loader: productsAndCartLoader,
          element: <Orders></Orders>
        },
        {
          path: 'inventory',
          element: <Inventory></Inventory>
        },
        {
          path:'about',
          element:<About></About>
        },
        {
          path:'signup',
          element:<Signup></Signup>
        },
        {
          path:'login',
          element:<Login></Login>
        }
      ]
    },
    
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
