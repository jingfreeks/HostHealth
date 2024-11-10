import React from 'react'
import {JobDetailsContainer} from '@/component'
import {
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
    LineContainerStyled,
    FavoriteDropdownContainer,
  } from './styles';
  import {ShareIcon, HeartRedIcon, LocationIcon, DropDownIcon} from '@/assets';
  import {ImageHeaderStyled} from '@/navigation/styles';
  import {Details,Requirements} from './component';
  import type {JobDetailsTemplateProps} from './types'

const JobsDetails=(props:JobDetailsTemplateProps)=>{
    const {data,children}=props
    return(
        <JobDetailsContainer>
            <ImageHeaderContaierStyled>
              <ImageStyled
                source={{uri: data.image}}
                resizeMode={'stretch'}
              />
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
                  {data.compaddress}
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
                  <JobTitleTextStyled>{data.jobtitle}</JobTitleTextStyled>
                  <JobNumberTextStyled>
                    {data.joborderno}
                  </JobNumberTextStyled>
                </JobTitleContainerStyled>
                <CompanyTextStyled>{data.compname}</CompanyTextStyled>
              </JobInfoContainerStyled>
              <JobMatchContainerStyled>
                <MatchTextStyled>{data.match}</MatchTextStyled>
              </JobMatchContainerStyled>
            </JobInfoHeaderContainerStyled>
            <JobMatchTextContainerStyled>
              <MatchSubTextStyled>% match</MatchSubTextStyled>
            </JobMatchTextContainerStyled>
            <EstimateContainerStyled>
              <EstimateTitleTextStyled>
                Estimated{' '}
                <EstimateValueTextStyled>
                  {data.salaryrange}{' '}
                </EstimateValueTextStyled>
                <EstimateTitleTextStyled>/wk</EstimateTitleTextStyled>
              </EstimateTitleTextStyled>
            </EstimateContainerStyled>
            <LineContainerStyled />
            <Details data={data} />
            <LineContainerStyled />
            <Requirements />
            {children}
        </JobDetailsContainer>
    )
};
export default JobsDetails