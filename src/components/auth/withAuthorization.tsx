import * as React from 'react';
import { withRouter } from 'react-router-dom';
import AuthUserContext from './AuthUserContext';
import { FirebaseContext } from '../../firebase';
import { RouteEnum } from '../../constants';

const withAuthorization = (Component: React.FunctionComponent): React.ComponentClass => {
  const WithAuthorization = (props): JSX.Element => {
    const { history } = props;
    const authUser = React.useContext(AuthUserContext);
    const firebaseContext = React.useContext(FirebaseContext);
    React.useEffect(() => {
      const listener = firebaseContext.auth.onIdTokenChanged(authUser => {
        if (!authUser) {
          history.push(RouteEnum.SIGN_IN);
        }
        // return will be called on componentWillUnmount to unsubscribe the listener
        return () => {
          listener();
        };
      });
    }, []);
    return authUser ? <Component {...props} /> : null;
  };
  return withRouter(WithAuthorization);
};

export default withAuthorization;
