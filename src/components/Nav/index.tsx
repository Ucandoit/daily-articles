import * as React from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends React.PureComponent {
  public render(): JSX.Element {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    );
  }
}
