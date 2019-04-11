import * as React from 'react';
import AuthUserContext from './AuthUserContext';
import { FirebaseContext } from '../../firebase';

const withAuthentication = (Component: any): React.FunctionComponent => {
  const WithAuthentication = (props): JSX.Element => {
    const [authUser, setAuthUser] = React.useState<firebase.User>();
    const firebaseContext = React.useContext(FirebaseContext);
    // check if user is authenticated
    React.useEffect(() => {
      const listener = firebaseContext.auth.onIdTokenChanged(authUser => {
        setAuthUser(authUser);
        // return will be called on componentWillUnmount to unsubscribe the listener
        return () => {
          listener();
        };
      });
    }, []);
    return (
      <AuthUserContext.Provider value={authUser}>
        <Component {...props} />
      </AuthUserContext.Provider>
    );
  };
  return WithAuthentication;
};

export default withAuthentication;
