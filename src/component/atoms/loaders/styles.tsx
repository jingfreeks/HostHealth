import styled from 'styled-components/native';
import {verticalScale} from 'react-native-size-matters';
export const ActivityIndicatorStyled = styled.ActivityIndicator<{
  size?: string;
  color?: string;
}>`
  flex: 1;
  justify-content: center;
  padding: ${verticalScale(10)}px;
`;
