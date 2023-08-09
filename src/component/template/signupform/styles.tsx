import styled from 'styled-components/native';
import {Text} from '@/component/atoms/text';
import {verticalScale} from 'react-native-size-matters';

export const ContainerStyled = styled.View`
  flex: 1;
`;
export const TextInputContainerStyled = styled.View`
  padding: 10px;
`;

export const ScrollViewContainer = styled.ScrollView`
  flex: 1;
  margin-bottom: 10px;
`;

export const AccountTextContainerStyled = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 10px;
`;

export const SignTextStyled = styled(Text)`
  text-decoration-line: underline;
`;

export const SignInButtonStyled = styled.TouchableOpacity`
  margin-left: 5px;
`;
