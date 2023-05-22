import React from 'react';
import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthContext from '../Context/AuthContext';
import Loader from '../Loader/Loader';
import { PrivateRoutes, PublicRoutes } from '../router/routes';

const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading) return <Loader />;

  return (
    <Routes>
      {isAuth
        ? PrivateRoutes.map(route => (
            <Route
              key={route.path}
              path={route.path}
              element={route.element}
            />
          ))
        : PublicRoutes.map(route => (
            <Route
              key={route.path}
              path={route.path}
              element={route.element}
            />
          ))}
    </Routes>
  );
};

export default AppRouter;
