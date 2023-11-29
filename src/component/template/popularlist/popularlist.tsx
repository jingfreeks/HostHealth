/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import HomeEmptyCard from '@/component/molecules/homeemptycard/homeemptycard';
import {PopularEmptyContainerStyled} from './styles';
import {PcitiesEmptyIcon} from '@/assets';
import {useGetCityQuery} from '@/slice/city';
import Lists from './list'
const PopularListScreen = () => {
  // const {data} = props;
  let content;
  const {
    data: cities,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetCityQuery<any>('getcity');
  if (isLoading) {
    content = (
      <PopularEmptyContainerStyled>
        <HomeEmptyCard
          imgsource={PcitiesEmptyIcon}
          message="No cities matches your preferred locations"
        />
      </PopularEmptyContainerStyled>
    );
  }else if(isSuccess){
    content = cities.ids.map((cityid:string) => <Lists key={cityid} cityId={cityid} />)
  }
  return content;
};
export default PopularListScreen;
