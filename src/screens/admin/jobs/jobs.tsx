import React, {useCallback} from 'react';
import {FlatList, ListRenderItem, ListRenderItemInfo} from 'react-native';
import {FAB} from 'react-native-elements';
import {ContainerStyled, StateEmptyContainerStyled} from './styles';
import {List} from './component';
import {HomeEmptyCard} from '@/component';
import {PcitiesEmptyIcon} from '@/assets';
import {useJobsHooks} from './hooks';
import {message} from '@/config/constant';
import {testingProps} from '@/utils/testframework';

const Jobs = () => {
  let content;
  const {navigation, jobs, jobLoading,fetchingJobs, jobsSuccess, jobIsError, jobsError,usrId} =
    useJobsHooks();

  const renderItem: ListRenderItem<any> = useCallback(
    ({item}: ListRenderItemInfo<any>) => {
      return <List jobsId={item} usrId={usrId}/>;
    },
    [],
  );

  if (jobLoading || fetchingJobs || jobIsError ) {
    let messages;
    if (jobsError?.status === 403) {
      messages = message[100001];
    } else {
      messages = message[100008];
    }
    content = (
      <StateEmptyContainerStyled>
        <HomeEmptyCard imgsource={PcitiesEmptyIcon} message={messages} />
      </StateEmptyContainerStyled>
    );
  } else if (jobsSuccess) {
    content = (
      <ContainerStyled>
        <FlatList
          data={jobs.ids}
          extraData={jobs.ids}
          renderItem={renderItem}
          keyExtractor={(item: any, index) => index.toString()}
        />
        <FAB
          {...testingProps('CompanyCreateButtonTestId')}
          title="Create"
          placement="right"
          size="large"
          onPress={() => navigation.navigate('JobsForm')}
        />
      </ContainerStyled>
    );
  }
  return content;
};

export default Jobs;
