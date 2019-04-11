import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { withRouter } from 'react-router-dom';
import { SignButton, SignForm } from './style';
import { FirebaseContext } from '../../firebase';
import { RouteEnum } from '../../constants';
import Input from '@material-ui/core/Input';

const SignUp: React.FunctionComponent<RouteComponentProps> = (props): JSX.Element => {
  const [username, setUserName] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [passwordCheck, setPasswordCheck] = React.useState<string>('');

  const firebase = React.useContext(FirebaseContext);

  const isInvalid = username === '' || email === '' || password === '' || password !== passwordCheck;

  const { history } = props;

  return (
    <SignForm
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        firebase
          .doCreateUserWithEmailAndPassword(email, password)
          .then(auth => {
            console.log(auth);
            history.push(RouteEnum.DASHBOARD);
          })
          .catch(err => {
            console.log(err);
          });
      }}
    >
      <Input
        value={username}
        onChange={e => setUserName(e.target.value)}
        placeholder="请输入用户名"
        type="text"
        required
      />
      <Input value={email} onChange={e => setEmail(e.target.value)} placeholder="请输入邮箱" type="email" required />
      <Input
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="请输入密码"
        type="password"
        required
      />
      <Input
        value={passwordCheck}
        onChange={e => setPasswordCheck(e.target.value)}
        placeholder="请确认密码"
        type="password"
        required
      />
      <SignButton disabled={isInvalid} type="submit">
        注册
      </SignButton>
    </SignForm>
  );
};

export default withRouter(SignUp);
