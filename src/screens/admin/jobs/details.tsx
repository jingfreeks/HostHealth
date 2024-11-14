import React, {useMemo} from 'react';
import {FlatList} from 'react-native';
import {useGetAdminJobDetailsQuery} from '@/slice';
import {JobDetailsTemplate} from '@/component';
import {RoutesAdminJobsProps} from './types';
import {InterestedUser} from './component';
import {Loaders} from '@/component/atoms/loaders';

const JobDetails = (props: RoutesAdminJobsProps) => {
  const {route} = props;
  const {adminJobDetail} = route.params;
  let content;
  const {
    refetch,
    data: jobDetails,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetAdminJobDetailsQuery<{
    refetch: () => void;
    data: any;
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
    error: string;
  }>(
    useMemo(() => {
      return {jobId: adminJobDetail.jobId || adminJobDetail._id};
    }, [adminJobDetail]),
  );

  // const interestedUser=useMemo(()=>{
  //     return jobDetails?.interested.map((item:any)=>{
  //         return{
  //           ...item?.userInfo
  //         }
  //     })
  // },[jobDetails?.interested])

  // console.log('isLoading', jobDetails.interested);
  if (isLoading) {
    content = <Loaders size="small" />;
  } else if (isSuccess) {
    content = (
      <JobDetailsTemplate data={jobDetails}>
        {jobDetails?.interested?.length > 0 && (
          <InterestedUser data={jobDetails?.interested} />
        )}
      </JobDetailsTemplate>
    );
  }

  return content;
};
export default JobDetails;
