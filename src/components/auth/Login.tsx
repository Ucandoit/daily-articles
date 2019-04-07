import * as React from 'react';
import { LoginBox, Input, LoginButton } from './style';

const Login: React.FunctionComponent = (): JSX.Element => {
  return (
    <LoginBox>
      <Input placeholder="请输入邮箱" />
      <Input placeholder="请输入密码" />
      <LoginButton>登录</LoginButton>
    </LoginBox>
  );
};

export default Login;
