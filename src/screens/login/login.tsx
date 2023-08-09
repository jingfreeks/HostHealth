import React from 'react';

import {LoginContent} from '@/component/template/logincontent';
import {LoginForm} from '@/component/template/loginform';
import {ContainerStyled} from './styles';
const LoginScreen = () => {
  return (
    <ContainerStyled>
      <LoginContent />
      <LoginForm />
    </ContainerStyled>
  );
};
export default LoginScreen;
