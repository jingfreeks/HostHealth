import styled from 'styled-components/native';
import {colors} from '@/utils/themes';
import {Text} from '@/component/atoms/text';
import {verticalScale} from 'react-native-size-matters';

export const ScrollViewContainer = styled.ScrollView`
  background-color: ${colors.primary};
`;

export const ContainerStyled = styled.View`
  flex: 1;
`;