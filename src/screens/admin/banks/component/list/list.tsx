import React from 'react';
import {useGetBanksQuery} from '@/slice';
import {ListItem} from '../index';
import {ListItemContainerStyled} from '../../styles';
const List = (props: {bankId: string}) => {
  const {bankId} = props;
  const {bank} = useGetBanksQuery('getBanks', {
    selectFromResult: ({data}: any) => ({
      bank: data?.entities[bankId],
    }),
  });

  return (
    <ListItemContainerStyled>
      <ListItem item={bank} />
    </ListItemContainerStyled>
  );
};
export default List;
