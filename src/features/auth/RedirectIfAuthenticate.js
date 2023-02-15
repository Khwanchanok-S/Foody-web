import { Navigate } from 'react-router-dom';
import useAuth from '../../hook/useAuth';

export default function RedirectIfAuthenticate({ children }) {
  const { authenticatedUser } = useAuth();
  if (authenticatedUser) {
    return <Navigate to={'/'} />;
  }
  return children;
}
