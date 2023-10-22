import React, {useCallback} from 'react';
import {ListRenderItem} from 'react-native';
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

  const renderItem = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ({item}: {item: any}) => (
      <RenderItemStyled>
        <SuggestedCard data={item} />
      </RenderItemStyled>
    ),
    [],
  );
  if (data?.length > 0) {
    return (
      <SuggestedListContainerStyled>
        <FlatlistStyled
          horizontal
          data={data}
          extraData={data}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          keyExtractor={(item: any) => item.id}
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
