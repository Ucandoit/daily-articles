import * as React from 'react';
import { Route, Redirect, RouteProps } from 'react-router';
import { RouteEnum } from '../../constants';

const isAuthenticated = false;

const PrivateRoute = ({ component: Component, ...rest }: RouteProps): JSX.Element => {
  return (
    <Route
      render={(props): JSX.Element =>
        isAuthenticated ? <Component {...props} /> : <Redirect to={RouteEnum.SIGN_IN} />
      }
      {...rest}
    />
  );
};

export default PrivateRoute;
