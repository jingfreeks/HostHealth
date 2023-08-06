import React from 'react';
import {WelcomeContent} from '@component/template/welcomecontent';
import {WelcomebuttonGroup} from '@component/template/welcomebuttongroup';
import {UseWelcomeHooks} from './hooks';
import {ContainerStyled} from './styles';
const WelcomeScreen = () => {
  const {handleSignIn, handleSignUp} = UseWelcomeHooks();
  return (
    <ContainerStyled>
      <WelcomeContent
        title={'Welcome to Host Healthcare!'}
        subTitle={'Sign up to find your perfect job today.'}
      />
      <WelcomebuttonGroup
        signInPress={handleSignIn}
        signUpPress={handleSignUp}
      />
    </ContainerStyled>
  );
};
export default WelcomeScreen;
