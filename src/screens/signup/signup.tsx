import React from 'react';

import {LoginContent} from '@/component/template/logincontent';
import {SignupForm} from '@/component/template/signupform';
import {UseSignUpHooks} from './hooks';
import {ContainerStyled} from './styles';

const SignupScreen = () => {
  const {handleSignUp} = UseSignUpHooks();
  return (
    <ContainerStyled>
      <LoginContent />
      <SignupForm handleSignUp={handleSignUp} />
    </ContainerStyled>
  );
};
export default SignupScreen;
