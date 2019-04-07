import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { withRouter } from 'react-router-dom';
import { SignForm, Input, SignButton } from './style';
import { FirebaseContext } from '../../firebase';
import { RouteEnum } from '../../constants';

const SignIn: React.FunctionComponent<RouteComponentProps> = (props): JSX.Element => {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const firebase = React.useContext(FirebaseContext);

  const isInvalid = email === '' || password === '';

  const { history } = props;

  return (
    <SignForm
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        firebase
          .doSignInWithEmailAndPassword(email, password)
          .then(auth => {
            console.log(auth);
            history.push(RouteEnum.DASHBOARD);
          })
          .catch(err => {
            console.log(err);
          });
      }}
    >
      <Input value={email} onChange={e => setEmail(e.target.value)} placeholder="请输入邮箱" type="email" required />
      <Input
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="请输入密码"
        type="password"
        required
      />
      <SignButton disabled={isInvalid} type="submit">
        登录
      </SignButton>
    </SignForm>
  );
};

export default withRouter(SignIn);
