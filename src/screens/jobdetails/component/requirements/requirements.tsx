import React from 'react';
import {
  DetailTitleContainerStyled,
  DetailsTitleTextStyled,
  SubDetailsContainerStyled,
  SubDetailsTitleContainerStyled,
  SubDetailsDetailsContainerStyled,
  DetailsSubTitleTextStyled,
  RequirementsContainerstyled,
} from '../../styles';

const RequirementScreen = () => {
  return (
    <RequirementsContainerstyled>
      <DetailTitleContainerStyled>
        <DetailsTitleTextStyled>REQUIREMENTS</DetailsTitleTextStyled>
      </DetailTitleContainerStyled>
      <SubDetailsContainerStyled>
        <SubDetailsTitleContainerStyled>
          <DetailsTitleTextStyled>License</DetailsTitleTextStyled>
        </SubDetailsTitleContainerStyled>
        <SubDetailsDetailsContainerStyled>
          <DetailsSubTitleTextStyled>RN, TN, Compact</DetailsSubTitleTextStyled>
        </SubDetailsDetailsContainerStyled>
      </SubDetailsContainerStyled>
      <SubDetailsContainerStyled>
        <SubDetailsTitleContainerStyled>
          <DetailsTitleTextStyled>License State</DetailsTitleTextStyled>
        </SubDetailsTitleContainerStyled>
        <SubDetailsDetailsContainerStyled>
          <DetailsSubTitleTextStyled>RN</DetailsSubTitleTextStyled>
        </SubDetailsDetailsContainerStyled>
      </SubDetailsContainerStyled>
    </RequirementsContainerstyled>
  );
};
export default RequirementScreen;
