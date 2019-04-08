import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from './header';
import Dashboard from './dashboard';
import Articles from './article';
import { SignIn, SignUp, withAuthentication } from './auth';
import { RouteEnum } from '../constants';
import { GlobalStyle } from './style';

const App: React.FunctionComponent = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path={RouteEnum.SIGN_IN} component={SignIn} />
        <Route path={RouteEnum.SIGN_UP} component={SignUp} />
        <Route path={RouteEnum.DASHBOARD} exact component={Dashboard} />
        <Route path={RouteEnum.ARTICLES} component={Articles} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
};

export default withAuthentication(App);
