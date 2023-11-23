
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
import React,{memo} from 'react';
import {
  ShareIcon,
  HeartIcon,
  LocationIcon,
  StethoscopeIcon,
  CalendarIcon,
  SunICon,
} from '@/assets';
import {ImageHeaderStyled} from '@/navigation/styles';
import Bbutton from '@/component/molecules/bbutton/bbutton';
import {UseSuggestedCardHooks} from './hooks';
import type {SuggestedCardProps} from './types';
import {Text} from '@/component/atoms/text';
const SuggestedCardScreen = (props: SuggestedCardProps) => {
  const {data} = props;
  const {handlesubmit} = UseSuggestedCardHooks();
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
            <FavoriteImageContainer>
              <ImageHeaderStyled resizeMode={'contain'} source={HeartIcon} />
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
              {data?.city}, {data?.state}
            </LocationTextStyled>
          </LocationContainerStyled>
        </ImageHeaderContainer>
        <JobInfoContainerStyled>
          <JobInfoTextContainerStyled>
            <Text TextMode="Ptitle">{data?.jobtitle}</Text>
            <JobTextSubTitleStyled>{data?.company}</JobTextSubTitleStyled>
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
          <DeptTitleTextStyled>{data?.dept}</DeptTitleTextStyled>
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
          <DeptTitleTextStyled>{data?.shift}</DeptTitleTextStyled>
        </ShiftContainerStyled>
        <EstimatedContainerStyled>
          <EstimatedTextStyled>Estimated</EstimatedTextStyled>
          <EstimatedAmount>${data?.salaryrange}</EstimatedAmount>
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

const SuggestedCardMemo=memo(SuggestedCardScreen)
export default SuggestedCardMemo;
