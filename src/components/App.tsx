import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import CssBaseline from '@material-ui/core/CssBaseline';

import Nav from './header';
import Dashboard from './dashboard';
import Articles from './article';
import { SignIn, SignUp, withAuthentication } from './auth';
import { RouteEnum } from '../constants';
import { Root, Main, styles } from './style';
import theme from './theme';

interface AppProps {
  classes: {
    appBarSpacer: string;
  };
}

const App: React.FunctionComponent<AppProps> = (props: AppProps): JSX.Element => {
  const { classes } = props;
  return (
    <Root>
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <Nav />
          <Main>
            <div className={classes.appBarSpacer} />
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

export default withAuthentication(withStyles(styles)(App));
