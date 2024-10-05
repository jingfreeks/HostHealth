/* eslint-disable @typescript-eslint/no-explicit-any */
//@ts-check
import React, {useState, memo} from 'react';
import {testingProps} from '@/utils/testframework';
import {
  ContainerStyled,
  ImageHeaderContaierStyled,
  JobInfoHeaderContainerStyled,
  JobInfoContainerStyled,
  JobMatchContainerStyled,
  ImageStyled,
  FavoriteContainerStyled,
  FavoriteImageContainer,
  LocationContainerStyled,
  LocationTextStyled,
  JobTitleContainerStyled,
  JobTitleTextStyled,
  JobNumberTextStyled,
  JobMatchTextContainerStyled,
  MatchTextStyled,
  MatchSubTextStyled,
  CompanyTextStyled,
  EstimateContainerStyled,
  EstimateTitleTextStyled,
  EstimateValueTextStyled,
  ButtonContainerStyled,
  ScrollViewContainer,
  LineContainerStyled,
  ButtonFooterContainerStyled,
  FavoriteDropdownContainer,
  AlertModalStyled,
  AlertModalContainerStyled,
  AlertModalViewStyled,
  AlertModalTextTitleStyled,
  AlertModalTextContainerStyled,
  AlertModalTextSubtitleStyled,
} from './styles';
import {ImageHeaderStyled} from '@/navigation/styles';
import {ShareIcon, HeartRedIcon, LocationIcon, DropDownIcon} from '@/assets';
import {colors} from '@/utils/themes';
import {Details} from './component/details';
import {Requirements} from './component/requirements';
import {useGetJobDetailsQuery} from '@/slice/jobdetails';
import Bbutton from '@/component/molecules/bbutton/bbutton';
import {Loaders} from '@/component/atoms/loaders';
import type {RoutesProps} from './types';
const JobDetailScreen = (props: RoutesProps) => {
  const {route} = props;
  const {jobdetail} = route.params;
  const [isVisible, setIsVisible] = useState<boolean>(false);
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
  }>({jobId: jobdetail.jobId || jobdetail._id});
  if (isLoading) {
    return <Loaders size="small" />;
  }
  if (isSuccess) {
    return (
      <>
        <ScrollViewContainer>
          <ContainerStyled>
            <ImageHeaderContaierStyled>
              <ImageStyled source={{uri: jobDetails.image}}    resizeMode={'stretch'}/>
              <FavoriteContainerStyled>
                <FavoriteImageContainer>
                  <ImageHeaderStyled
                    resizeMode={'contain'}
                    source={HeartRedIcon}
                  />
                </FavoriteImageContainer>
                <FavoriteImageContainer>
                  <ImageHeaderStyled
                    resizeMode={'contain'}
                    source={ShareIcon}
                  />
                </FavoriteImageContainer>
              </FavoriteContainerStyled>
              <LocationContainerStyled>
                <ImageHeaderStyled
                  resizeMode={'contain'}
                  size={15}
                  source={LocationIcon}
                />
                <LocationTextStyled>
                  {jobDetails.compaddress}
                </LocationTextStyled>
              </LocationContainerStyled>
              <FavoriteDropdownContainer>
                <ImageHeaderStyled
                  resizeMode={'contain'}
                  source={DropDownIcon}
                />
              </FavoriteDropdownContainer>
            </ImageHeaderContaierStyled>
            <JobInfoHeaderContainerStyled>
              <JobInfoContainerStyled>
                <JobTitleContainerStyled>
                  <JobTitleTextStyled>{jobDetails.jobtitle}</JobTitleTextStyled>
                  <JobNumberTextStyled>
                    {jobDetails.joborderno}
                  </JobNumberTextStyled>
                </JobTitleContainerStyled>
                <CompanyTextStyled>{jobDetails.compname}</CompanyTextStyled>
              </JobInfoContainerStyled>
              <JobMatchContainerStyled>
                <MatchTextStyled>{jobDetails.match}</MatchTextStyled>
              </JobMatchContainerStyled>
            </JobInfoHeaderContainerStyled>
            <JobMatchTextContainerStyled>
              <MatchSubTextStyled>% match</MatchSubTextStyled>
            </JobMatchTextContainerStyled>
            <EstimateContainerStyled>
              <EstimateTitleTextStyled>
                Estimated{' '}
                <EstimateValueTextStyled>
                  {jobDetails.salaryrange}{' '}
                </EstimateValueTextStyled>
                <EstimateTitleTextStyled>/wk</EstimateTitleTextStyled>
              </EstimateTitleTextStyled>
            </EstimateContainerStyled>
            <LineContainerStyled />
            <Details data={jobDetails} />
            <LineContainerStyled />
            <Requirements />
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
                  bcolor={'#d6f3f3'}
                  border={30}
                  testId="JobDetailsScreenSubmitButtonTestId"
                  title="INTERESTED"
                  onPress={() => setIsVisible(!isVisible)}
                />
              </ButtonContainerStyled>
            </ButtonFooterContainerStyled>
          </ContainerStyled>
        </ScrollViewContainer>
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
                  onPress={() => setIsVisible(!isVisible)}
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
