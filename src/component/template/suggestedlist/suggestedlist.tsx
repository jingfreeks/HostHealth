import React, {useCallback} from 'react';
import {ListRenderItem, ListRenderItemInfo, FlatList} from 'react-native';
import HomeEmptyCard from '@/component/molecules/homeemptycard/homeemptycard';
import SuggestedCard from '@/component/molecules/suggesstedcard/suggestedcard';
import {SuggestedEmptyIcon} from '@/assets';
import type {SuggestedListProps, SuggestedCardDetailsProps} from './types';
import {
  SuggestedListContainerStyled,
  FlatlistStyled,
  RenderItemStyled,
  SuggestedListEmptyContainerStyled,
} from './styles';
const SuggestedList = (props: SuggestedListProps) => {
  const {data = []} = props;

  const renderItem: ListRenderItem<SuggestedCardDetailsProps> = useCallback(
    ({item}: ListRenderItemInfo<SuggestedCardDetailsProps>) => (
      <RenderItemStyled>
        <SuggestedCard data={item} />
      </RenderItemStyled>
    ),
    [],
  );
  if (data?.length > 0) {
    return (
      <SuggestedListContainerStyled>
        <FlatList
          horizontal
          data={data}
          extraData={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
        />
      </SuggestedListContainerStyled>
    );
  }
  return (
    <SuggestedListEmptyContainerStyled>
      <HomeEmptyCard
        imgsource={SuggestedEmptyIcon}
        message="No suggested jobs matches with your profile"
      />
    </SuggestedListEmptyContainerStyled>
  );
};
export default SuggestedList;
