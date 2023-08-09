import React from 'react';
import HomeEmptyCard from '@/component/molecules/homeemptycard/homeemptycard';
import {PopularEmptyContainerStyled, PopularContainerStyled} from './styles';
import {PcitiesEmptyIcon} from '@/assets';
import {PopularCard} from '@/component/molecules/popularcard';
const PopularListScreen = props => {
  const {data} = props;
  if (data?.length > 0) {
    return data?.map((item, idx) => {
      return (
        <PopularContainerStyled key={idx}>
          <PopularCard item={item} />
        </PopularContainerStyled>
      );
    });
  }
  return (
    <PopularEmptyContainerStyled>
      <HomeEmptyCard
        imgsource={PcitiesEmptyIcon}
        message="No cities matches your preferred locations"
      />
    </PopularEmptyContainerStyled>
  );
};
export default PopularListScreen;
