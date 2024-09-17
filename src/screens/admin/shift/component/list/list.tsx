import React from 'react';
import {useGetShiftQuery} from '@/slice';
import {ListItem} from '../index';
import {ListItemContainerStyled} from '../../styles';
const List = (props: {shiftId: string}) => {
  const {shiftId} = props;
  const {shift} = useGetShiftQuery('getShift', {
    selectFromResult: ({data}: any) => ({
      shift: data?.entities[shiftId],
    }),
  });

  return (
    <ListItemContainerStyled>
      <ListItem item={shift} />
    </ListItemContainerStyled>
  );
};
export default List;
