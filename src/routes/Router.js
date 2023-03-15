import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Homepage from '../pages/Homepage';
import Loginpage from '../pages/Loginpage';

import Reservepage from '../pages/Reservepage';
import Restaurantpage from '../pages/Restaurantpage';
import TypeofRestaurantspage from '../pages/TypeofRestaurantspage';

import Registercontanier from '../features/auth/RegisterContainer';
import RedirectIfAuthenticate from '../features/auth/RedirectIfAuthenticate';
import ProtectedRoute from '../features/auth/ProtectedRoute';
import AuthLayout from '../layouts/AuthLayout';
import Profilepage from '../pages/Profilepage';
import Adminpage from '../pages/Adminpage';
import EditRespage from '../pages/EditRespage';
const router = createBrowserRouter([
  {
    path: '/login',
    element: (
      <RedirectIfAuthenticate>
        <Loginpage />
      </RedirectIfAuthenticate>
    ),
  },
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <AuthLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: '/',
        index: true,
        element: <Homepage />,
      },

      {
        path: 'profile/:userId',
        element: <Profilepage />,
      },
      {
        path: 'restaurant/:restaurantId',
        element: <Restaurantpage />,
      },
      { path: '/type', element: <TypeofRestaurantspage /> },
    ],
  },

  { path: '/admincreate', element: <Adminpage /> },
  { path: '/editrestaurant/:restaurantId', element: <EditRespage /> },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
