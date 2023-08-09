import React from 'react';
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
import {Text} from '@/component/atoms/text';
const SuggestedCardScreen = props => {
  const {data} = props;
  const {handlesubmit} = UseSuggestedCardHooks();
  return (
    <Container>
      <ImageHeaderContainer>
        <ImageStyled
          source={{
            uri: data.image,
          }}
          resizeMode={'stretch'}
        />
        <FavoriteContainerStyled>
          <FavoriteImageContainer>
            <ImageHeaderStyled source={HeartIcon} resizeMode={'contain'} />
          </FavoriteImageContainer>
          <FavoriteImageContainer>
            <ImageHeaderStyled source={ShareIcon} resizeMode={'contain'} />
          </FavoriteImageContainer>
        </FavoriteContainerStyled>
        <LocationContainerStyled>
          <ImageHeaderStyled
            source={LocationIcon}
            resizeMode={'contain'}
            size={15}
          />
          <LocationTextStyled>
            {data.city}, {data.state}
          </LocationTextStyled>
        </LocationContainerStyled>
      </ImageHeaderContainer>
      <JobInfoContainerStyled>
        <JobInfoTextContainerStyled>
          <Text TextMode="Ptitle">{data.jobtitle}</Text>
          <JobTextSubTitleStyled>{data.company}</JobTextSubTitleStyled>
        </JobInfoTextContainerStyled>
        <MatchContainersStyled>
          <MatchTextStyled>{data.match}</MatchTextStyled>
        </MatchContainersStyled>
      </JobInfoContainerStyled>
      <MatchContainerStyled>
        <MatchSubTextStyled>% match</MatchSubTextStyled>
      </MatchContainerStyled>
      <DeptContainerStyled>
        <DeptImageContainerStyled>
          <ImageHeaderStyled
            source={StethoscopeIcon}
            resizeMode={'contain'}
            size={15}
          />
        </DeptImageContainerStyled>
        <DeptTitleTextStyled>{data.dept}</DeptTitleTextStyled>
      </DeptContainerStyled>
      <WeeksContaienrStyled>
        <DeptImageContainerStyled>
          <ImageHeaderStyled
            source={CalendarIcon}
            resizeMode={'contain'}
            size={15}
          />
        </DeptImageContainerStyled>
        <WeeksTitleTextStyled>{data.weeks} Weeks</WeeksTitleTextStyled>
      </WeeksContaienrStyled>
      <ShiftContainerStyled>
        <DeptImageContainerStyled>
          <ImageHeaderStyled
            source={SunICon}
            resizeMode={'contain'}
            size={15}
          />
        </DeptImageContainerStyled>
        <DeptTitleTextStyled>{data.shift}</DeptTitleTextStyled>
      </ShiftContainerStyled>
      <EstimatedContainerStyled>
        <EstimatedTextStyled>Estimated</EstimatedTextStyled>
        <EstimatedAmount>${data.salaryrange}</EstimatedAmount>
        <EstimatedTextStyled>/wk</EstimatedTextStyled>
      </EstimatedContainerStyled>
      <SubmitContainerStyled>
        <Bbutton
          onPress={() => handlesubmit(data)}
          padding={5}
          border={50}
          bcolor={'#d6f3f3'}
          title="PLEASE SUBMIT"
        />
      </SubmitContainerStyled>
    </Container>
  );
};
export default SuggestedCardScreen;
