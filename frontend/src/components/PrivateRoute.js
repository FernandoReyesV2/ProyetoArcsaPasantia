import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';

const PrivateRoute = ({ element, ...rest }) => {
  const auth = getAuth();
  const user = auth.currentUser;

  return user ? element : <Navigate to="/auth/login" />;
};

export default PrivateRoute;
