/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {useGetCityJobsQuery} from '@/slice';
import SuggestedCard from '@/component/molecules/suggesstedcard/suggestedcard';
const RenderList = (props: {jobId:string;cityId?:string;}) => {

  const {jobId,cityId} = props;

  const {cityJobs} = useGetCityJobsQuery({cityId}, {
    selectFromResult: ({data}: any) => ({
      cityJobs: data?.entities[jobId],
    }),
  });
  return <SuggestedCard data={cityJobs} />;
};
export default RenderList;
