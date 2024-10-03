import styled from 'styled-components/native';
import {verticalScale} from 'react-native-size-matters';

export const ContainerStyled = styled.View`
  flex: 1;
  margin: 10px;
`;

export const TextInputContainerStyled = styled.View`
  padding: 10px;
`;

export const ProfileAvatarContainerStyled = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const NextButtonStyled = styled.TouchableOpacity`
  flex: 1;
  background-color: red;
  align-items: center;
  margin-left: 10px;
  border-radius: 5px;
`;

export const BankListContainerStyled=styled.View`
  margin-top:10px;
  margin-bottom:20px;
`

export const FormContainerStyled=styled.View`
  flex:1;
`
export const ButtonContainerStyled=styled.View`
  flex-direction: row;
  margin-bottom:${verticalScale(20)}px;
`
