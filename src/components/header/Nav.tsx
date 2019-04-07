import * as React from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends React.PureComponent {
  public render(): JSX.Element {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/articles">Articles</Link>
          </li>
        </ul>
      </div>
    );
  }
}
