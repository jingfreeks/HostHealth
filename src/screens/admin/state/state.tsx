import React, {useCallback} from 'react';
import {
  View,
  Text,
  FlatList,
  ListRenderItem,
  ListRenderItemInfo,
} from 'react-native';
import {FAB} from 'react-native-elements';
import {ContainerStyled,StateEmptyContainerStyled} from './styles';
import {ListItem, List} from './component';
import {HomeEmptyCard} from '@/component';
import {PcitiesEmptyIcon} from '@/assets';
import {useStateHooks} from './hooks';

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
      messages = 'Token Expired you must logout and login it again';
    } else {
      messages = 'No cities matches your preferred locations';
    }
    content = (
      <StateEmptyContainerStyled>
        <HomeEmptyCard imgsource={PcitiesEmptyIcon} message={messages} />
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
