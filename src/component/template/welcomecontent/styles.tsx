import styled from 'styled-components/native';
import {verticalScale} from 'react-native-size-matters';

export const TextContainerStyled = styled.View`
  margin-bottom: 20px;
  margin-top: 20px;
  align-items: center;
`;

export const ButtonContainer = styled.View`
  margin-top: ${verticalScale(20)}px;
`;

export const ContainerStyled = styled.View`
  margin-top: ${verticalScale(30)}px;
  margin-bottom: ${verticalScale(30)}px;
`;
