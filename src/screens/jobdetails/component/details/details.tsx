import React from 'react';
import {
  DetailsContainerStyled,
  DetailTitleContainerStyled,
  DetailsTitleTextStyled,
  SubDetailsContainerStyled,
  SubDetailsTitleContainerStyled,
  SubDetailsDetailsContainerStyled,
  DetailsSubTitleTextStyled,
} from '../../styles';
import type {DetailsTypes} from './types';
const DetailScreen = (props: DetailsTypes) => {
  const {data} = props;
  return (
    <>
      <DetailsContainerStyled>
        <DetailTitleContainerStyled>
          <DetailsTitleTextStyled>DETAILS</DetailsTitleTextStyled>
        </DetailTitleContainerStyled>
        <SubDetailsContainerStyled>
          <SubDetailsTitleContainerStyled>
            <DetailsTitleTextStyled>Discipline</DetailsTitleTextStyled>
          </SubDetailsTitleContainerStyled>
          <SubDetailsDetailsContainerStyled>
            <DetailsSubTitleTextStyled>RN</DetailsSubTitleTextStyled>
          </SubDetailsDetailsContainerStyled>
        </SubDetailsContainerStyled>
        <SubDetailsContainerStyled>
          <SubDetailsTitleContainerStyled>
            <DetailsTitleTextStyled>Specialty</DetailsTitleTextStyled>
          </SubDetailsTitleContainerStyled>
          <SubDetailsDetailsContainerStyled>
            <DetailsSubTitleTextStyled>
              Cardic Cath Lab
            </DetailsSubTitleTextStyled>
          </SubDetailsDetailsContainerStyled>
        </SubDetailsContainerStyled>
        <SubDetailsContainerStyled>
          <SubDetailsTitleContainerStyled>
            <DetailsTitleTextStyled>Duration</DetailsTitleTextStyled>
          </SubDetailsTitleContainerStyled>
          <SubDetailsDetailsContainerStyled>
            <DetailsSubTitleTextStyled>13 Weeks</DetailsSubTitleTextStyled>
          </SubDetailsDetailsContainerStyled>
        </SubDetailsContainerStyled>
        <SubDetailsContainerStyled>
          <SubDetailsTitleContainerStyled>
            <DetailsTitleTextStyled>Shift</DetailsTitleTextStyled>
          </SubDetailsTitleContainerStyled>
          <SubDetailsDetailsContainerStyled>
            <DetailsSubTitleTextStyled>{data.shift}</DetailsSubTitleTextStyled>
          </SubDetailsDetailsContainerStyled>
        </SubDetailsContainerStyled>
      </DetailsContainerStyled>
    </>
  );
};
export default DetailScreen;
