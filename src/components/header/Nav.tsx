import * as React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import { RouteEnum } from '../../constants';
import { SignOut, AuthUserContext } from '../auth';
import LinkButton from '../ui';
import If from '../utils';

const Nav: React.FunctionComponent = (): JSX.Element => {
  const authUser = React.useContext(AuthUserContext);
  return (
    <AppBar color="default">
      <Toolbar>
        <LinkButton to={RouteEnum.DASHBOARD}>Dashboard</LinkButton>
        <If condition={!!authUser}>
          <LinkButton to={RouteEnum.ARTICLES}>Articles</LinkButton>
        </If>
        <If condition={!authUser}>
          <LinkButton to={RouteEnum.SIGN_IN}>登录</LinkButton>
          <LinkButton to={RouteEnum.SIGN_UP}>注册</LinkButton>
        </If>
        <If condition={!!authUser}>
          <SignOut />
        </If>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
