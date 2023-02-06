import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout';
import Homepage from '../pages/Homepage';
import Loginpage from '../pages/Loginpage';
import Profilepag from '../pages/Profilepage';
import Reservepage from '../pages/Reservepage';
import Restaurantpage from '../pages/Restaurantpage';
import TypeofRestaurantspage from '../pages/TypeofRestaurantspage';
import RegisterForm from '../features/auth/RegisterForm';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },

  {
    path: '/login',
    element: <Loginpage />,
  },

  {
    path: '/reserve',
    element: <Reservepage />,
  },
  {
    path: '/profile/:userId',
    element: <Profilepag />,
  },
  {
    path: '/restaurant',
    element: <Restaurantpage />,
  },
  { path: '/type', element: <TypeofRestaurantspage /> },
  { path: '/1', element: <RegisterForm /> },

  {
    path: '/test',
    element: <h1>Test</h1>,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
