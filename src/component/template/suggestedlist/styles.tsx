import styled from 'styled-components/native';
import {verticalScale} from 'react-native-size-matters';
export const ContainerStyled = styled.View`
  align-items: center;
  justify-content: center;
  align-self: center;
  flex: 1;
`;

export const SuggestedListContainerStyled = styled.View`
  flex: 1;
`;

export const FlatlistStyled = styled.FlatList``;

export const RenderItemStyled = styled.View`
  width: ${verticalScale(300)}px;
  margin-right: 10px;
`;

export const SuggestedListEmptyContainerStyled = styled.View`
  align-items: center;
  justify-content: center;
  align-self: center;
  flex: 1;
`;
