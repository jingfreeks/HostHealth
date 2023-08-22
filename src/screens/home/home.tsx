import React, {useEffect} from 'react';
import {Text} from '@/component/atoms/text';
import {SuggestedList} from '@/component/template/suggestedlist';
import {PopularList} from '@/component/template/popularlist';
import {HomeHeaderList} from '@/component/template/homeheaderlist';
import {Jobslist, PopularListData} from '@/screens/home/constant';
import {useSelector, useDispatch} from 'react-redux';
import {fetchPCities} from '@/slice/pcities';
import {fetchSuggested} from '@/slice/suggested';
import {
  ScrollViewContainer,
  ListsContainerStyled,
  SuggestedTextContainerStyled,
} from './styles';
const HomeScreen = () => {
  const pcities = useSelector(state => state.pcities.data);
  const loading = useSelector(state => state.pcities.loading);
  const suggestedJobs = useSelector(state => state.suggetedjob.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPCities());
    dispatch(fetchSuggested());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log('pcities', Jobslist);
  return (
    <ScrollViewContainer>
      <HomeHeaderList />

      <ListsContainerStyled>
        <SuggestedTextContainerStyled>
          <Text TextMode="Htitlenormal">SUGGESTED</Text>
        </SuggestedTextContainerStyled>
        <SuggestedList data={Jobslist} />
        <SuggestedTextContainerStyled>
          <Text TextMode="Htitlenormal">POPULAR CITIES</Text>
          <PopularList data={PopularListData} />
        </SuggestedTextContainerStyled>
      </ListsContainerStyled>
    </ScrollViewContainer>
  );
};

export default HomeScreen;
