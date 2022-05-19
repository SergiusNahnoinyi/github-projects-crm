import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { authSelectors } from '../redux/auth';

export default function PublicRoute({ children }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return isLoggedIn ? <Navigate to="/projects" /> : children;
}
