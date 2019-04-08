import * as React from 'react';
import { Link } from 'react-router-dom';
import { RouteEnum } from '../../constants';
import { SignOut, AuthUserContext } from '../auth';

const Nav: React.FunctionComponent = (): JSX.Element => {
  const authUser = React.useContext(AuthUserContext);
  return (
    <div>
      <ul>
        <li>
          <Link to={RouteEnum.DASHBOARD}>Dashboard</Link>
        </li>
        {authUser ? (
          <React.Fragment>
            <li>
              <Link to={RouteEnum.ARTICLES}>Articles</Link>
            </li>
            <li>
              <SignOut />
            </li>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <li>
              <Link to={RouteEnum.SIGN_IN}>登录</Link>
            </li>
            <li>
              <Link to={RouteEnum.SIGN_UP}>注册</Link>
            </li>
          </React.Fragment>
        )}
      </ul>
    </div>
  );
};

export default Nav;
