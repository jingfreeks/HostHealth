/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {useGetJobsQuery} from '@/slice/suggested';
import type {JobIdList} from './types'
import SuggestedCard from '@/component/molecules/suggesstedcard/suggestedcard';
import {
    RenderItemStyled,
  } from './styles';
const ListScreen=(props:JobIdList)=>{
    const {jobId} = props;

    const {jobs} = useGetJobsQuery('getJobs', {
      selectFromResult: ({data}: any) => ({
        jobs: data?.entities[jobId],
      }),
    });
    return(
        <RenderItemStyled>
          <SuggestedCard data={jobs} />
        </RenderItemStyled>
    )
};
export default ListScreen