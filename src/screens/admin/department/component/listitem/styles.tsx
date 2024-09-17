import styled from 'styled-components/native';
import {verticalScale} from 'react-native-size-matters';

export const ContainerStyled = styled.View`
  width: ${verticalScale(200)}px;
  height: ${verticalScale(60)}px;
  padding: 10px;
  border-width: 1px;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
`;

export const InfoContainerStyled = styled.View`
  padding: 5px;
  flex:1;
`;

export const ActionButtonContainerStyled = styled.View`
  flex-direction: row;
`;
