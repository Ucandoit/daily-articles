import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { withRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import { SignForm, SignButton, SignPaper, SignAvatar } from './style';
import { FirebaseContext } from '../../firebase';
import { RouteEnum } from '../../constants';

const SignIn: React.FunctionComponent<RouteComponentProps> = (props): JSX.Element => {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const firebase = React.useContext(FirebaseContext);

  const isInvalid = email === '' || password === '';

  const { history } = props;

  return (
    <SignPaper>
      <SignAvatar />
      <Typography component="h1" variant="h5">
        登录
      </Typography>
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
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="email">请输入邮箱</InputLabel>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="请输入邮箱"
            value={email}
            onChange={e => setEmail(e.target.value)}
            autoFocus
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
        <SignButton type="submit" fullWidth variant="contained" color="primary" disabled={isInvalid}>
          登录
        </SignButton>
      </SignForm>
    </SignPaper>
  );
};

export default withRouter(SignIn);
