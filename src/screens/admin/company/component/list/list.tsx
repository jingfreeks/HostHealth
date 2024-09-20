import React from 'react';
import {useGetCompanyQuery} from '@/slice';
import {ListItem} from '../index';
import {ListItemContainerStyled} from '../../styles';
const List = (props: {companyId: string}) => {
  const {companyId} = props;
  const {company} = useGetCompanyQuery('getCompany', {
    selectFromResult: ({data}: any) => ({
      company: data?.entities[companyId],
    }),
  });
  return (
    <ListItemContainerStyled>
      <ListItem item={company} />
    </ListItemContainerStyled>
  );
};
export default List;
