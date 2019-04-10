import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import CssBaseline from '@material-ui/core/CssBaseline';

import Nav from './header';
import Dashboard from './dashboard';
import Articles from './article';
import { SignIn, SignUp, withAuthentication } from './auth';
import { RouteEnum } from '../constants';
import { theme, Root, Main } from './style';

const App: React.FunctionComponent = (): JSX.Element => {
  return (
    <Root>
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <Nav />
          <Main>
            <Switch>
              <Route path={RouteEnum.SIGN_IN} component={SignIn} />
              <Route path={RouteEnum.SIGN_UP} component={SignUp} />
              <Route path={RouteEnum.DASHBOARD} exact component={Dashboard} />
              <Route path={RouteEnum.ARTICLES} component={Articles} />
            </Switch>
          </Main>
        </BrowserRouter>
        <CssBaseline />
      </MuiThemeProvider>
    </Root>
  );
};

export default withAuthentication(App);
