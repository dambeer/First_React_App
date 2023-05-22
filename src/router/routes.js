import { Navigate } from 'react-router-dom';
import About from '../pages/About';
import Error from '../pages/Error';
import Login from '../pages/Login';
import PostIdPage from '../pages/PostIdPage';
import Posts from '../pages/Posts';

export const PrivateRoutes = [
  { path: '/about', element: <About /> },
  { path: '/posts', element: <Posts /> },
  { path: '/posts/:id', element: <PostIdPage /> },
  { path: '/error', element: <Error /> },
  { path: '/*', element: <Navigate to="/error" /> },
];
export const PublicRoutes = [
  { path: '/about', element: <About /> },
  { path: '/login', element: <Login /> },
  { path: '/error', element: <Error /> },
  { path: '/*', element: <Navigate to="/login" /> },
];
