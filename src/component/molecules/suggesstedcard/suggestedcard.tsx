import {
  Container,
  ImageHeaderContainer,
  JobInfoContainerStyled,
  JobInfoTextContainerStyled,
  MatchContainersStyled,
  MatchContainerStyled,
  DeptContainerStyled,
  WeeksContaienrStyled,
  ShiftContainerStyled,
  ImageStyled,
  FavoriteContainerStyled,
  FavoriteImageContainer,
  LocationContainerStyled,
  LocationTextStyled,
  MatchTextStyled,
  JobTextSubTitleStyled,
  MatchSubTextStyled,
  DeptImageContainerStyled,
  DeptTitleTextStyled,
  WeeksTitleTextStyled,
  EstimatedContainerStyled,
  EstimatedTextStyled,
  EstimatedAmount,
  SubmitContainerStyled,
} from './styles';
import React, {memo,useState} from 'react';
import {
  ShareIcon,
  HeartIcon,
  LocationIcon,
  StethoscopeIcon,
  CalendarIcon,
  SunICon,
  HeartRedIcon,
} from '@/assets';
import {ImageHeaderStyled} from '@/navigation/styles';
import {Loaders} from '@/component/atoms/loaders';
import {UseSuggestedCardHooks} from './hooks';
import type {SuggestedCardProps} from './types';
import {Text} from '@/component/atoms/text';
import {Bbutton} from '@/component';
import {usePostBookmarkingJobsMutation} from '@/slice';
import {selectCurrentUserId} from '@/slice/auth';
import {useSelector} from 'react-redux';
const SuggestedCardScreen = (props: SuggestedCardProps) => {
  const {data} = props;
  const [bookmark,setBookmarking]=useState<boolean>(data?.bookmark);
  const usrId = useSelector(selectCurrentUserId)?.toString();
  const [postBookmarkingJobs, {isLoading}] = usePostBookmarkingJobsMutation();
  const {handlesubmit} = UseSuggestedCardHooks();
  const handleBookMarking = async () => {
    try {
      const response = await postBookmarkingJobs({
        jobId: data._id?.toString(),
        userId: usrId,
      });
      if(response){
        setBookmarking(!bookmark)
      }
    } catch (err) {
      console.log('error', err);
    }
  };

  if (data) {
    return (
      <Container>
        <ImageHeaderContainer>
          <ImageStyled
            resizeMode={'stretch'}
            source={{
              uri: data?.image,
            }}
          />
          <FavoriteContainerStyled>
            <FavoriteImageContainer onPress={handleBookMarking}>
              {isLoading ? (
                <Loaders size={'small'} />
              ) : (
                <ImageHeaderStyled
                  resizeMode={'contain'}
                  source={bookmark ? HeartRedIcon : HeartIcon}
                />
              )}
            </FavoriteImageContainer>
            <FavoriteImageContainer>
              <ImageHeaderStyled resizeMode={'contain'} source={ShareIcon} />
            </FavoriteImageContainer>
          </FavoriteContainerStyled>
          <LocationContainerStyled>
            <ImageHeaderStyled
              resizeMode={'contain'}
              size={15}
              source={LocationIcon}
            />
            <LocationTextStyled>
              {data?.cityname}, {data?.statename}
            </LocationTextStyled>
          </LocationContainerStyled>
        </ImageHeaderContainer>
        <JobInfoContainerStyled>
          <JobInfoTextContainerStyled>
            <Text TextMode="Ptitle">{data?.jobtitle}</Text>
            <JobTextSubTitleStyled>{data?.companyinfo?.name}</JobTextSubTitleStyled>
          </JobInfoTextContainerStyled>
          <MatchContainersStyled>
            <MatchTextStyled>{data?.match}</MatchTextStyled>
          </MatchContainersStyled>
        </JobInfoContainerStyled>
        <MatchContainerStyled>
          <MatchSubTextStyled>% match</MatchSubTextStyled>
        </MatchContainerStyled>
        <DeptContainerStyled>
          <DeptImageContainerStyled>
            <ImageHeaderStyled
              resizeMode={'contain'}
              size={15}
              source={StethoscopeIcon}
            />
          </DeptImageContainerStyled>
          <DeptTitleTextStyled>{data?.departmentinfo?.name}</DeptTitleTextStyled>
        </DeptContainerStyled>
        <WeeksContaienrStyled>
          <DeptImageContainerStyled>
            <ImageHeaderStyled
              resizeMode={'contain'}
              size={15}
              source={CalendarIcon}
            />
          </DeptImageContainerStyled>
          <WeeksTitleTextStyled>{data?.weeks} Weeks</WeeksTitleTextStyled>
        </WeeksContaienrStyled>
        <ShiftContainerStyled>
          <DeptImageContainerStyled>
            <ImageHeaderStyled
              resizeMode={'contain'}
              size={15}
              source={SunICon}
            />
          </DeptImageContainerStyled>
          <DeptTitleTextStyled>{data?.shiftinfo?.title}</DeptTitleTextStyled>
        </ShiftContainerStyled>
        <EstimatedContainerStyled>
          <EstimatedTextStyled>Estimated</EstimatedTextStyled>
          <EstimatedAmount>{data?.salaryrange}</EstimatedAmount>
          <EstimatedTextStyled>/wk</EstimatedTextStyled>
        </EstimatedContainerStyled>
        <SubmitContainerStyled>
          <Bbutton
            bcolor={'#d6f3f3'}
            border={50}
            padding={5}
            testId="MoleculesSuggestedCardSubmitButtonTestId"
            title="PLEASE SUBMIT"
            onPress={() => handlesubmit(data)}
          />
        </SubmitContainerStyled>
      </Container>
    );
  }
  return null;
};

const SuggestedCardMemo = memo(SuggestedCardScreen);
export default SuggestedCardMemo;
