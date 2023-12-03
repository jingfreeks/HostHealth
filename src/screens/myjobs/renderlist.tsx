/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {useGetMyJobsQuery} from '@/slice/myjobs';
import SuggestedCard from '@/component/molecules/suggesstedcard/suggestedcard';
const RenderList = (props: {jobId:string;userId:string;}) => {

  const {jobId,userId} = props;

  const {myjobs} = useGetMyJobsQuery({userId}, {
    selectFromResult: ({data}: any) => ({
        myjobs: data?.entities[jobId],
    }),
  });
  return <SuggestedCard data={myjobs} />;
};
export default RenderList;
