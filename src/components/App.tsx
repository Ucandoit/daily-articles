import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from './header';
import Dashboard from './dashboard';
import Articles from './article';
import { PrivateRoute, Login } from './auth';
import { GlobalStyle } from './style';

const App: React.FunctionComponent = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute path="/" exact component={Dashboard} />
        <PrivateRoute path="/articles" component={Articles} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;
