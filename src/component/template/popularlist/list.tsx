/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {PopularContainerStyled} from './styles';
import {useGetCityQuery} from '@/slice/city';
import {listingType} from './types';
import {PopularCard} from '@/component/molecules/popularcard';

const ListScreen = (props: listingType) => {
  const {cityId} = props;

  const {city} = useGetCityQuery('getcity', {
    selectFromResult: ({data}: any) => ({
      city: data?.entities[cityId],
    }),
  });
  return (
    <PopularContainerStyled>
      <PopularCard item={city} />
    </PopularContainerStyled>
  );
};
export default ListScreen;
