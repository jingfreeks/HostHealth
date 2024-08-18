import React from 'react';
import {Platform, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {LoginContent} from '@/component/template/logincontent';
import {LoginForm} from '@/component/template/loginform';
import {ContainerStyled} from './styles';
import {verticalScale} from 'react-native-size-matters';
import {KeyboardContainerStyled} from '@/screens/signup/styles';

const LoginScreen = () => {
  return (
    <KeyboardContainerStyled
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={verticalScale(100)}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ContainerStyled>
          <LoginContent />
          <LoginForm />
        </ContainerStyled>
      </TouchableWithoutFeedback>
    </KeyboardContainerStyled>
  );
};
export default LoginScreen;
