import React from 'react';
import {WelcomeContent} from '@/component/template/welcomecontent';
import {WelcomebuttonGroup} from '@/component/template/welcomebuttongroup';
import {testingProps} from '@/utils/testframework'
import {UseWelcomeHooks} from './hooks';
import {ContainerStyled} from './styles';
const WelcomeScreen = () => {
  const {handleSignIn, handleSignUp} = UseWelcomeHooks();
  return (
    <ContainerStyled {...testingProps('WelcomeButtonGroupTestID')}>
      <WelcomeContent
        subTitle={'Sign up to find your perfect job today.'}
        title={'Welcome to Host Healthcare!'}
      />
      <WelcomebuttonGroup
        signInPress={handleSignIn}
        signUpPress={handleSignUp}
      />
    </ContainerStyled>
  );
};
export default WelcomeScreen;
