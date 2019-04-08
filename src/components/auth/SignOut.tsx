import * as React from 'react';
import { FirebaseContext } from '../../firebase';

const SignOut: React.FunctionComponent = (): JSX.Element => {
  const firebase = React.useContext(FirebaseContext);
  return <button onClick={() => firebase.doSignOut()}>注销</button>;
};

export default SignOut;
