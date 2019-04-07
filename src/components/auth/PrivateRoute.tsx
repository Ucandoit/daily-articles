import * as React from 'react';
import { Route, Redirect, RouteProps } from 'react-router';

const isAuthenticated = false;

const PrivateRoute = ({ component: Component, ...rest }: RouteProps): JSX.Element => {
  return (
    <Route
      render={(props): JSX.Element => (isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />)}
      {...rest}
    />
  );
};

export default PrivateRoute;
