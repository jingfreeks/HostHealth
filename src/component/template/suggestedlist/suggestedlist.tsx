import React from 'react';
import HomeEmptyCard from '@component/molecules/homeemptycard/homeemptycard';
import SuggestedCard from '@component/molecules/suggesstedcard/suggestedcard';
import {SuggestedEmptyIcon} from '@assets';
import {
  SuggestedListContainerStyled,
  FlatlistStyled,
  RenderItemStyled,
  SuggestedListEmptyContainerStyled,
} from './styles';
const SuggestedList = props => {
  const {data} = props;

  if (data.length > 0) {
    return (
      <SuggestedListContainerStyled>
        <FlatlistStyled
          horizontal
          data={data}
          renderItem={({item}) => {
            return (
              <RenderItemStyled>
                <SuggestedCard data={item} />
              </RenderItemStyled>
            );
          }}
          keyExtractor={item => item.id}
          extraData={data}
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
