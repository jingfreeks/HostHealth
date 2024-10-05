import React from 'react';
import {TouchableOpacity} from 'react-native';
import {PopularContainerStyled} from './styles';
import {useGetCityQuery} from '@/slice/city';
import {listingType} from './types';
import {StackNavigationProp} from '@react-navigation/stack';
import type {RootNavigationProps} from '@/navigation/types';
import {useNavigation} from '@react-navigation/native';
import {PopularCard} from '@/component/molecules/popularcard';

const ListScreen = (props: listingType) => {
  const navigation = useNavigation<StackNavigationProp<RootNavigationProps>>();
  const {cityId} = props;

  const {city} = useGetCityQuery('getcity', {
    selectFromResult: ({data}: any) => ({
      city: data?.entities[cityId],
    }),
  });
  return (
    <PopularContainerStyled>
      <TouchableOpacity onPress={()=>navigation.navigate('CityJobsList',{cityId})}>
        <PopularCard item={city} />
      </TouchableOpacity>
    </PopularContainerStyled>
  );
};
export default ListScreen;
