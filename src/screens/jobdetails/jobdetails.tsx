import React, {useState} from 'react';
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
import {ImageHeaderStyled} from '@navigation/styles';
import {ShareIcon, HeartRedIcon, LocationIcon, DropDownIcon} from '@assets';
import {colors} from '@themes';
import {Details} from './component/details';
import {Requirements} from './component/requirements';
import Bbutton from '@component/molecules/bbutton/bbutton';
const JobDetailScreen = props => {
  const {route} = props;
  const {jobdetail} = route.params;
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <ScrollViewContainer>
        <ContainerStyled>
          <ImageHeaderContaierStyled>
            <ImageStyled source={{uri: jobdetail.image}} />
            <FavoriteContainerStyled>
              <FavoriteImageContainer>
                <ImageHeaderStyled
                  source={HeartRedIcon}
                  resizeMode={'contain'}
                />
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
              <LocationTextStyled>{jobdetail.address}</LocationTextStyled>
            </LocationContainerStyled>
            <FavoriteDropdownContainer>
              <ImageHeaderStyled source={DropDownIcon} resizeMode={'contain'} />
            </FavoriteDropdownContainer>
          </ImageHeaderContaierStyled>
          <JobInfoHeaderContainerStyled>
            <JobInfoContainerStyled>
              <JobTitleContainerStyled>
                <JobTitleTextStyled>{jobdetail.jobtitle}</JobTitleTextStyled>
                <JobNumberTextStyled>
                  {jobdetail.joborderno}
                </JobNumberTextStyled>
              </JobTitleContainerStyled>
              <CompanyTextStyled>{jobdetail.company}</CompanyTextStyled>
            </JobInfoContainerStyled>
            <JobMatchContainerStyled>
              <MatchTextStyled>97</MatchTextStyled>
            </JobMatchContainerStyled>
          </JobInfoHeaderContainerStyled>
          <JobMatchTextContainerStyled>
            <MatchSubTextStyled>% match</MatchSubTextStyled>
          </JobMatchTextContainerStyled>
          <EstimateContainerStyled>
            <EstimateTitleTextStyled>
              Estimated{' '}
              <EstimateValueTextStyled>
                {jobdetail.salaryrange}{' '}
              </EstimateValueTextStyled>
              <EstimateTitleTextStyled>/wk</EstimateTitleTextStyled>
            </EstimateTitleTextStyled>
          </EstimateContainerStyled>
          <LineContainerStyled />
          <Details data={jobdetail} />
          <LineContainerStyled />
          <Requirements />
          <ButtonFooterContainerStyled>
            <ButtonContainerStyled>
              <Bbutton
                // onPress={() => setIsVisible(!isVisible)}
                border={30}
                bcolor={colors.primary}
                title="TELL ME MORE"
              />
            </ButtonContainerStyled>
            <ButtonContainerStyled>
              <Bbutton
                onPress={() => setIsVisible(!isVisible)}
                border={30}
                bcolor={'#d6f3f3'}
                title="PLEASE SUBMIT"
              />
            </ButtonContainerStyled>
          </ButtonFooterContainerStyled>
        </ContainerStyled>
      </ScrollViewContainer>
      <AlertModalStyled
        animationType="slide"
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
                onPress={() => setIsVisible(!isVisible)}
                border={5}
                bcolor={'#d6f3f3'}
                title="OK"
              />
            </AlertModalTextContainerStyled>
          </AlertModalViewStyled>
        </AlertModalContainerStyled>
      </AlertModalStyled>
    </>
  );
};
export default JobDetailScreen;
