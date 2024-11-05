
import styled from 'styled-components/native';
import {verticalScale} from 'react-native-size-matters';

export const FormContainerStyled = styled.View`
  flex: 1;
  justify-content: center;
  margin-left: ${verticalScale(20)}px;
  margin-right: ${verticalScale(20)}px;
`;

export const ButtonContainerStyled=styled.View`
  margin-bottom:${verticalScale(10)}px;
`