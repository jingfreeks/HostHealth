import styled from 'styled-components/native';
import {FlatList} from 'react-native';
import {verticalScale} from 'react-native-size-matters';
import type {SuggestedListProps, SuggestedCardDetailsProps} from './types';
export const ContainerStyled = styled.View`
  align-items: center;
  justify-content: center;
  align-self: center;
  flex: 1;
`;

export const SuggestedListContainerStyled = styled.View`
  flex: 1;
`;

export const FlatlistStyled = styled.FlatList<SuggestedCardDetailsProps>``;

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
