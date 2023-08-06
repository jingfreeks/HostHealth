import styled from 'styled-components/native';
import {verticalScale} from 'react-native-size-matters';

export const ImageHeaderStyled = styled.Image`
  height: ${verticalScale(100)}px;
  width: ${verticalScale(230)}px;
`;

export const ImageContainerStyled = styled.View`
  margin-top: ${verticalScale(50)}px;
  margin-bottom: ${verticalScale(30)}px;
`;
