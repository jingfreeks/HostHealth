import styled from 'styled-components/native';
import {verticalScale,scale} from 'react-native-size-matters';

export const ContainerStyled = styled.View`
  width: ${scale(300)}px;
  height: ${verticalScale(120)}px;
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

export const ImageContainerStyled = styled.View`
  flex:1;
`;

export const ImageStyled = styled.Image`
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  height:100%;
`;