import React, {useEffect} from 'react';
import {Text} from '@component/atoms/text';
import {SuggestedList} from '@component/template/suggestedlist';
import {PopularList} from '@component/template/popularlist';
import {HomeHeaderList} from '@component/template/homeheaderlist';
import {useSelector, useDispatch} from 'react-redux';
import {fetchPCities} from '@slice/pcities';
import {fetchSuggested} from '@slice/suggested';
import {
  ScrollViewContainer,
  ListsContainerStyled,
  SuggestedTextContainerStyled,
} from './styles';
const HomeScreen = () => {
  const pcities = useSelector(state => state.pcities.data);
  const suggestedJobs = useSelector(state => state.suggetedjob.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPCities());
    dispatch(fetchSuggested());
  }, [dispatch]);
  return (
    <ScrollViewContainer>
      <HomeHeaderList />

      <ListsContainerStyled>
        <SuggestedTextContainerStyled>
          <Text TextMode="Htitlenormal">SUGGESTED</Text>
        </SuggestedTextContainerStyled>
        <SuggestedList data={suggestedJobs} />
        <SuggestedTextContainerStyled>
          <Text TextMode="Htitlenormal">POPULAR CITIES</Text>
          <PopularList data={pcities} />
        </SuggestedTextContainerStyled>
      </ListsContainerStyled>
    </ScrollViewContainer>
  );
};

export default HomeScreen;
