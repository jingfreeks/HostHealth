/* eslint-disable @typescript-eslint/no-explicit-any */
//@ts-check
import React, {memo, useMemo} from 'react';
import {Alert} from 'react-native';
import {testingProps} from '@/utils/testframework';
import {
  ButtonContainerStyled,
  ButtonFooterContainerStyled,
  AlertModalStyled,
  AlertModalContainerStyled,
  AlertModalViewStyled,
  AlertModalTextTitleStyled,
  AlertModalTextContainerStyled,
  AlertModalTextSubtitleStyled,
} from './styles';
import {useGetJobDetailsQuery} from '@/slice';
import Bbutton from '@/component/molecules/bbutton/bbutton';
import {Loaders} from '@/component/atoms/loaders';
import type {RoutesProps} from './types';
import {useSelector} from 'react-redux';
import type {State} from '@/config/types';
import {useJobDetailsHooks} from './hooks';
import {JobDetailsTemplate} from '@/component'


const JobDetailScreen = (props: RoutesProps) => {
  const {route} = props;
  const {jobdetail} = route.params;
  const {postInterestedJobs, interestedLoading, isVisible, setIsVisible} =
    useJobDetailsHooks();
  const userId = useSelector((state: State) => state.auth.userId);

  const {
    refetch,
    data: jobDetails,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetJobDetailsQuery<{
    refetch: () => void;
    data: any;
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
    error: string;
  }>(
    useMemo(() => {
      return {jobId: jobdetail.jobId || jobdetail._id,userId};
    }, [jobdetail]),
  );
  if (isLoading) {
    return <Loaders size="small" />;
  }
  const handleInterested = async () => {
    try {
      const response: any = await postInterestedJobs({
        jobId: jobdetail.jobId || jobdetail._id,
        userId,
      });
      if (response?.error) {
        Alert.alert(response?.error?.data?.message);
      } else {
        setIsVisible(!isVisible);
        await refetch()
      }
      console.log('response', response);
    } catch (error) {
      console.log('error', error);
    }
  };
  if (isSuccess) {
    return (
      <>
            <JobDetailsTemplate data={jobDetails}>
            <ButtonFooterContainerStyled>
              {/* <ButtonContainerStyled>
                <Bbutton
                  // onPress={() => setIsVisible(!isVisible)}
                  bcolor={colors.primary}
                  border={30}
                  title="TELL ME MORE"
                />
              </ButtonContainerStyled> */}
              <ButtonContainerStyled>
                <Bbutton
                  loaders={interestedLoading}
                  disabled={jobDetails?.status == 'available' ? false : true}
                  bcolor={
                    jobDetails?.status === 'available' ? '#d6f3f3' : '#D3D3D3'
                  }
                  border={30}
                  testId="JobDetailsScreenSubmitButtonTestId"
                  title={
                    jobDetails?.status === 'available'
                      ? 'INTERESTED'
                      : jobDetails?.status
                  }
                  onPress={handleInterested}
                />
              </ButtonContainerStyled>
            </ButtonFooterContainerStyled>
            </JobDetailsTemplate>
          {/* </ContainerStyled>
        </ScrollViewContainer> */}
        <AlertModalStyled
          animationType="slide"
          {...testingProps('JobDetailsAlertModalTestId')}
          transparent={true}
          visible={isVisible}
          onRequestClose={() => {
            setIsVisible(!isVisible);
          }}>
          <AlertModalContainerStyled>
            <AlertModalViewStyled>
              <AlertModalTextContainerStyled>
                <AlertModalTextTitleStyled>
                  Your request has been submitted
                </AlertModalTextTitleStyled>
                <AlertModalTextSubtitleStyled>
                  Your recruiter will contact you shortly.
                </AlertModalTextSubtitleStyled>
                <Bbutton
                  bcolor={'#d6f3f3'}
                  border={5}
                  testId="JobDetailsScreenAlertModalSubmitOkButtonTestId"
                  title="OK"
                  onPress={() => {
                    setIsVisible(!isVisible);
                  }}
                />
              </AlertModalTextContainerStyled>
            </AlertModalViewStyled>
          </AlertModalContainerStyled>
        </AlertModalStyled>
      </>
    );
  }
  return null;
};

const MemoJobDetails = memo(JobDetailScreen);
export default MemoJobDetails;
