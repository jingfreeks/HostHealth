import styled from 'styled-components/native';
import {verticalScale} from 'react-native-size-matters';
import {Text} from '@/component';

export const ListItemContainerStyled = styled.View`
  align-items: center;
  padding: 10px;
`;

export const ContainerStyled = styled.SafeAreaView`
  flex: 1;
  margin-bottom: 10px;
`;

export const FormContainerStyled = styled.View`
  flex: 1;
  justify-content: center;
  margin-left: ${verticalScale(20)}px;
  margin-right: ${verticalScale(20)}px;
`;
export const FormHeaderContainerStyled = styled.View`
  align-items: center;
  margin-bottom: ${verticalScale(20)}px;
`;
export const FormTextInputContainerStyled = styled.View`
  margin-top: ${verticalScale(20)}px;
  margin-bottom: ${verticalScale(5)}px;
`;

export const FormHeaderTextStyled = styled(Text)`
  font-size: 30px;
  font-weight: 900;
`;

export const StateEmptyContainerStyled=styled.View`
  flex:1;
  align-items:center;
  justify-content:center;
`
export const ProfileAvatarContainerStyled = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;