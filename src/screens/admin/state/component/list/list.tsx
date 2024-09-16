import React from 'react';
import {useGetStateQuery} from '@/slice/state';
import {ListItem} from '../index';
import {ListItemContainerStyled} from '../../styles';
const List = (props: {stateId: string}) => {
  const {stateId} = props;
  const {states} = useGetStateQuery('getState', {
    selectFromResult: ({data}: any) => ({
      states: data?.entities[stateId],
    }),
  });
  return (
    <ListItemContainerStyled>
      <ListItem item={states} />
    </ListItemContainerStyled>
  );
};
export default List;
