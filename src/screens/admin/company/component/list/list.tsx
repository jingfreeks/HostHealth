import React from 'react';
import {useGetCityQuery} from '@/slice/city';
import {ListItem} from '../index';
import {ListItemContainerStyled} from '../../styles';
const List = (props: {cityId: string}) => {
  const {cityId} = props;
  const {city} = useGetCityQuery('getState', {
    selectFromResult: ({data}: any) => ({
      city: data?.entities[cityId],
    }),
  });
  return (
    <ListItemContainerStyled>
      <ListItem item={city} />
    </ListItemContainerStyled>
  );
};
export default List;
