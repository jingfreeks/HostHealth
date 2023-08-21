import styled from 'styled-components/native';
import {ImageURISource} from 'react-native';
import {colors} from '@/utils/themes';
import {verticalScale} from 'react-native-size-matters';

export const Container = styled.View`
  border-width: 2px;
  alignself: stretch;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 10px;
  flex-direction: row;
  border-color: ${colors.lightgreen};
`;

export const TextContainer = styled.View`
  flex: 3;
  justify-content: center;
  align-self: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const ImageContainerstyled = styled.View`
  margin-left: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  flex: 1;
`;

export const ImageHeaderStyled = styled.Image<{
  source?: ImageURISource | string | undefined;
  resizeMode: 'contain' | 'stretch';
  size: number;
}>`
  height: ${verticalScale(60)}px;
  width: ${verticalScale(50)}px;
`;
