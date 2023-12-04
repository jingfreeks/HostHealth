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
  console.log('isError',cities)
  if (isLoading || isError) {
    let messages;
    if(error?.status===403){
      messages='Token Expired you must logout and login it again'
    }else{
      messages='No cities matches your preferred locations'
    }
    content = (
      <PopularEmptyContainerStyled>
        <HomeEmptyCard
          imgsource={PcitiesEmptyIcon}
          message={messages}
        />
      </PopularEmptyContainerStyled>
    );
  }else if(isSuccess){
    content = cities.ids.map((cityid:string) => <Lists key={cityid} cityId={cityid} />)
  }
  return content;
};
export default PopularListScreen;
