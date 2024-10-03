import styled from 'styled-components/native';
import {Avatar} from 'react-native-elements';
import {colors} from '@/utils/themes';

export const ScrollViewContainer = styled.ScrollView`
  background-color: ${colors.primary};
  flex: 1;
`;
export const BackgroundContainer = styled.View`
  background-color: ${colors.primary};
`;
export const ContainerStyled = styled(BackgroundContainer)`
  flex: 1;
`;

export const NameInfoStyled = styled.View`
  margin-right: 20px;
  margin-left: 20px;
  flex: 1;
  
`;

export const HeaderStyled = styled.View`
  flex-direction: row;
  justify-content: center;
  align-self: center;
  align-items: center;
`;

export const ContentStyled = styled.View`
  flex: 1;
  margin-right: 20px;
  margin-left: 20px;
  margin-top: 20px;
`;

export const FooterStyled = styled.View`
  flex: 0.1;
  margin-right: 20px;
  margin-left: 20px;
  margin-top: 10px;
`;
export const ListButtonStyled = styled.TouchableOpacity`
  flex: 1;
  padding: 10px;
`;
