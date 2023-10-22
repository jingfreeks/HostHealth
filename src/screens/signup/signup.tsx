import React from 'react';
import {Platform, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {LoginContent} from '@/component/template/logincontent';
import {SignupForm} from '@/component/template/signupform';
import {UseSignUpHooks} from './hooks';
import {verticalScale} from 'react-native-size-matters';
import {ContainerStyled, KeyboardContainerStyled} from './styles';

const SignupScreen = () => {
  const {handleSignUp} = UseSignUpHooks();
  return (
    <KeyboardContainerStyled
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={verticalScale(100)}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ContainerStyled>
          <LoginContent />
          <SignupForm handleSignUp={handleSignUp} />
        </ContainerStyled>
      </TouchableWithoutFeedback>
    </KeyboardContainerStyled>
  );
};
export default SignupScreen;
