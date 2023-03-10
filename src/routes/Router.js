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
const router = createBrowserRouter([
  {
    path: '/login',
    element: (
      // <RedirectIfAuthenticate>
      <Loginpage />
      // </RedirectIfAuthenticate>
    ),
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        // path: '/',
        index: true,
        element: <Homepage />,
      },
      {
        path: 'reserve',
        element: (
          // <ProtectedRoute>
          <Reservepage />
          // {/* </ProtectedRoute> */}
        ),
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

  { path: '/1', element: <Registercontanier /> },

  {
    path: '/test',
    element: <h1>Test</h1>,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
