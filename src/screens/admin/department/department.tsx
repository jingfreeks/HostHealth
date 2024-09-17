import React, {useCallback} from 'react';
import {
  FlatList,
  ListRenderItem,
  ListRenderItemInfo,
} from 'react-native';
import {FAB} from 'react-native-elements';
import {ContainerStyled,StateEmptyContainerStyled} from './styles';
import {List} from './component';
import {HomeEmptyCard} from '@/component';
import {PcitiesEmptyIcon} from '@/assets';
import {useStateHooks} from './hooks';
import {message} from '@/config/constant';


const State = () => {
  let content;
  const {navigation, dept, isLoading, isSuccess, error, isError} =
    useStateHooks();
  const renderItem: ListRenderItem<any> = useCallback(
    ({item}: ListRenderItemInfo<any>) => {
      return <List deptId={item} />;
    },
    [],
  );

  if (isLoading || isError) {
    let messages;
    if (error?.status === 403) {
      messages = message[100001];
    } else {
      messages = message[100004];
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
          data={dept.ids}
          extraData={dept.ids}
          renderItem={renderItem}
          keyExtractor={(item: any, index) => index.toString()}
        />
        <FAB
          title="Create"
          placement="right"
          size="large"
          onPress={() => navigation.navigate('DepartmentForm')}
        />
      </ContainerStyled>
    );
  }
  return content;
};

export default State;
