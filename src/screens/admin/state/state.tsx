import React, {useCallback} from 'react';
import {FlatList, ListRenderItem, ListRenderItemInfo} from 'react-native';
import {FAB} from 'react-native-elements';
import {ContainerStyled, StateEmptyContainerStyled} from './styles';
import {List} from './component';
import {HomeEmptyCard} from '@/component';
import {PcitiesEmptyIcon} from '@/assets';
import {message} from '@/config/constant';
import {useStateHooks} from './hooks';
import {testingProps} from '@/utils/testframework';

const State = () => {
  let content;
  const {navigation, states, isLoading, isSuccess, error, isError} =
    useStateHooks();
  const renderItem: ListRenderItem<any> = useCallback(
    ({item}: ListRenderItemInfo<any>) => {
      return <List stateId={item} />;
    },
    [],
  );

  if (isLoading || isError) {
    let messages;
    if (error?.status === 403) {
      messages = message[100001];
    } else {
      messages = message[100002];
    }
    content = (
      <StateEmptyContainerStyled>
        <HomeEmptyCard imgsource={PcitiesEmptyIcon} message={messages} />
        {error?.status !== 403 && (
          <FAB
            {...testingProps('StateCreateButtonTestId')}
            title="Create"
            placement="right"
            size="large"
            onPress={() => navigation.navigate('StateForm')}
          />
        )}
      </StateEmptyContainerStyled>
    );
  } else if (isSuccess) {
    content = (
      <ContainerStyled>
        <FlatList
          data={states.ids}
          extraData={states.ids}
          renderItem={renderItem}
          keyExtractor={(item: any, index) => index.toString()}
        />
        <FAB
          {...testingProps('StateCreateButtonTestId')}
          title="Create"
          placement="right"
          size="large"
          onPress={() => navigation.navigate('StateForm')}
        />
      </ContainerStyled>
    );
  }
  return content;
};

export default State;
