import * as React from 'react';
import { Link } from 'react-router-dom';
import { RouteEnum } from '../../constants';

export default class Nav extends React.PureComponent {
  public render(): JSX.Element {
    return (
      <div>
        <ul>
          <li>
            <Link to={RouteEnum.DASHBOARD}>Dashboard</Link>
          </li>
          <li>
            <Link to={RouteEnum.ARTICLES}>Articles</Link>
          </li>
        </ul>
      </div>
    );
  }
}
