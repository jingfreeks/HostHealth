/* eslint-disable react/jsx-sort-props */
/* eslint-disable @typescript-eslint/no-explicit-any */
//@ts-check
import React from 'react';
import {
  ContainerStyled,
  FlatlistStyled,
  MyJobsEmptyContainerStyled,
} from './styles';
import HomeEmptyCard from '@/component/molecules/homeemptycard/homeemptycard';
import {testingProps} from '@/utils/testframework';
import {SuggestedEmptyIcon} from '@/assets';
import {useSelector} from 'react-redux';
import type {State} from '@/config/types';
import {useGetCityJobsQuery} from '@/slice';
import RenderList from './renderlist';
import type {RoutesProps} from './types';
import {message} from '@/config/constant';

const MyJobs = (props: RoutesProps) => {
  const {route} = props;
  const {cityId} = route?.params || {};

  const {
    refetch,
    data: cityJobs,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetCityJobsQuery<any>({cityId});


  if (isLoading || isError) {
    let messages;
    if (error?.status === 403) {
      messages = message[100001];
    } else {
      messages = message[100024];
    }
    return (
      <MyJobsEmptyContainerStyled>
        <HomeEmptyCard imgsource={SuggestedEmptyIcon} message={messages} />
      </MyJobsEmptyContainerStyled>
    );
  }
  if (isSuccess) {
    return (
      <ContainerStyled>
        <FlatlistStyled
          data={cityJobs?.ids}
          refreshing={isLoading}
          {...testingProps('CityJobsListingTestId')}
          extraData={cityJobs?.ids}
          keyExtractor={(item, index) => index.toString()}
          onRefresh={() => refetch()}
          ListEmptyComponent={() => (
            <MyJobsEmptyContainerStyled>
              <HomeEmptyCard
                imgsource={SuggestedEmptyIcon}
                message={message[100024]}
              />
            </MyJobsEmptyContainerStyled>
          )}
          renderItem={({item}: {item: any}) => {
            return <RenderList jobId={item} cityId={cityId} />;
          }}
        />
      </ContainerStyled>
    );
  }
  return null;
};
export default MyJobs;
