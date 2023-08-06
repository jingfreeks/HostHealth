import styled from 'styled-components/native';
import {verticalScale} from 'react-native-size-matters';

export const ContainerStyled = styled.View`
  flex: 1;
`;

export const TextInputContainerStyled = styled.View`
  padding: 10px;
`;

export const ForgotPassContainerStyled = styled.TouchableOpacity`
  align-items: center;
  margin-top: ${verticalScale(20)}px;
`;

export const AccountContainerStyled = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: ${verticalScale(30)}px;
  flex-direction: row;
`;

export const SignUpButtonStyled = styled.TouchableOpacity`
  margin-left: 5px;
`;
