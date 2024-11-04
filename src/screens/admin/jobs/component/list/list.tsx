import React,{useMemo} from 'react';
import {useGetJobsQuery} from '@/slice';
import {ListItem} from '../index';
import {ListItemContainerStyled} from '../../styles';
const List = (props: {jobsId: string;usrId:string;}) => {
  const {jobsId,usrId} = props;
  const {jobs} = useGetJobsQuery(
    useMemo(() => {
      return {usrId};
    }, [usrId]),
    {
      selectFromResult: ({data}: any) => ({
        jobs: data?.entities[jobsId],
      }),
    },
  );
  return (
    <ListItemContainerStyled>
      <ListItem item={jobs} />
    </ListItemContainerStyled>
  );
};
export default List;
