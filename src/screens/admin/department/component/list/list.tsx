import React from 'react';
import {useGetDeptQuery} from '@/slice/department';
import {ListItem} from '../index';
import {ListItemContainerStyled} from '../../styles';
const List = (props: {deptId: string}) => {
  const {deptId} = props;
  const {dept} = useGetDeptQuery('getDept', {
    selectFromResult: ({data}: any) => ({
      dept: data?.entities[deptId],
    }),
  });
  return (
    <ListItemContainerStyled>
      <ListItem item={dept} />
    </ListItemContainerStyled>
  );
};
export default List;
