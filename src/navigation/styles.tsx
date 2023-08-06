import styled from 'styled-components/native';
import {verticalScale} from 'react-native-size-matters';

export const ImageHeaderStyled = styled.Image`
  height: ${({size = 20}) => verticalScale(size)}px;
  width: ${({size = 20}) => verticalScale(size)}px;
`;

export const HeaderLeftStyled = styled.View`
  margin-left: 10px;
`;
