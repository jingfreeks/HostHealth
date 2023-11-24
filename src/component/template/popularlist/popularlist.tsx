/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import HomeEmptyCard from '@/component/molecules/homeemptycard/homeemptycard';
import {PopularEmptyContainerStyled, PopularContainerStyled} from './styles';
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
  console.log('cities', cities);
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
  // if (data?.length > 0) {
  //   return data?.map((item, idx) => {
  //     return (
  //       <PopularContainerStyled key={idx}>
  //         <PopularCard item={item} />
  //       </PopularContainerStyled>
  //     );
  //   });
  // }
  // return (
  //   <PopularEmptyContainerStyled>
  //     <HomeEmptyCard
  //       imgsource={PcitiesEmptyIcon}
  //       message="No cities matches your preferred locations"
  //     />
  //   </PopularEmptyContainerStyled>
  // );
  return content;
};
export default PopularListScreen;
