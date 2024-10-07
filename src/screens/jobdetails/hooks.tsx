import React, {useState} from 'react';
import {useGetJobDetailsQuery, usePostInterestedJobsMutation} from '@/slice';

export const useJobDetailsHooks = () => {
  const [postInterestedJobs, {isLoading: interestedLoading}] =
    usePostInterestedJobsMutation();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  return {
    postInterestedJobs,
    interestedLoading,
    isVisible,
    setIsVisible,
  };
};
