import styled from 'styled-components/native';
import {ImageURISource} from 'react-native';
import {verticalScale} from 'react-native-size-matters';

export const ImageHeaderStyled = styled.Image<{
  source?: string | ImageURISource | undefined;
  resizeMode: 'contain' | 'stretch';
  size?: number | 20;
}>`
  height: ${({size = 20}) => verticalScale(size)}px;
  width: ${({size = 20}) => verticalScale(size)}px;
`;

export const HeaderLeftStyled = styled.View`
  margin-left: 10px;
`;
