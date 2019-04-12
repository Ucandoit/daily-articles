import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { withRouter } from 'react-router-dom';
import { SignButton, SignForm, SignPaper, SignAvatar } from './style';
import { FirebaseContext } from '../../firebase';
import { RouteEnum } from '../../constants';
import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const SignUp: React.FunctionComponent<RouteComponentProps> = (props): JSX.Element => {
  const [username, setUserName] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [passwordCheck, setPasswordCheck] = React.useState<string>('');

  const firebase = React.useContext(FirebaseContext);

  const isInvalid = username === '' || email === '' || password === '' || password !== passwordCheck;

  const { history } = props;

  return (
    <SignPaper>
      <SignAvatar />
      <Typography component="h1" variant="h5">
        注册
      </Typography>
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
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="username">请输入用户名</InputLabel>
          <Input
            id="username"
            name="username"
            type="text"
            autoComplete="请输入用户名"
            value={username}
            onChange={e => setUserName(e.target.value)}
            autoFocus
          />
        </FormControl>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="email">请输入邮箱</InputLabel>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="请输入邮箱"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="password">请输入密码</InputLabel>
          <Input
            id="password"
            name="password"
            type="password"
            autoComplete="请输入密码"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </FormControl>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="passwordCheck">请确认密码</InputLabel>
          <Input
            id="passwordCheck"
            name="passwordCheck"
            type="password"
            autoComplete="请确认密码"
            value={passwordCheck}
            onChange={e => setPasswordCheck(e.target.value)}
          />
        </FormControl>
        <SignButton type="submit" fullWidth variant="contained" color="primary" disabled={isInvalid}>
          注册
        </SignButton>
      </SignForm>
    </SignPaper>
  );
};

export default withRouter(SignUp);
