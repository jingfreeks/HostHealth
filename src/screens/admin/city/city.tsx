import React, {useCallback,useState} from 'react';
import {
  FlatList,
  ListRenderItem,
  ListRenderItemInfo,
  ScrollView,
  RefreshControl,
} from 'react-native';
import {FAB} from 'react-native-elements';
import {ContainerStyled, StateEmptyContainerStyled} from './styles';
import {List} from './component';
import {HomeEmptyCard} from '@/component';
import {PcitiesEmptyIcon} from '@/assets';
import {useCityHooks} from './hooks';
import {testingProps} from '@/utils/testframework';
import {message} from '@/config/constant';

const City = () => {
  let content;
  const {navigation, city, isLoading, isSuccess, error, isError, onRefresh} =
    useCityHooks();
  
  const [refreshing,setRefreshing]=useState<boolean>(false)
  const renderItem: ListRenderItem<any> = useCallback(
    ({item}: ListRenderItemInfo<any>) => {
      return <List cityId={item} />;
    },
    [],
  );
  if (isLoading || isError) {
    let messages;
    if (error?.status === 403) {
      messages = message[100001];
    } else {
      messages = message[100003];
    }
    content = (
      <ScrollView
        contentContainerStyle={{flex: 1, alignItems: 'center'}}
        refreshControl={
          <RefreshControl refreshing={false} onRefresh={onRefresh} />
        }>
        <StateEmptyContainerStyled>
          <HomeEmptyCard imgsource={PcitiesEmptyIcon} message={messages} />
          {error?.status !== 403 && (
            <FAB
              {...testingProps('CityCreateButtonTestId')}
              title="Create"
              placement="right"
              size="large"
              onPress={() => navigation.navigate('Cityform')}
            />
          )}
        </StateEmptyContainerStyled>
      </ScrollView>
    );
  } else if (isSuccess) {
    content = (
      <ContainerStyled>
        <FlatList
          data={city.ids}
          extraData={city.ids}
          renderItem={renderItem}
          onRefresh={onRefresh}
          refreshing={refreshing}
          keyExtractor={(item: any, index) => index.toString()}
        />
        <FAB
          {...testingProps('CityCreateButtonTestId')}
          title="Create"
          placement="right"
          size="large"
          onPress={() => navigation.navigate('Cityform')}
        />
      </ContainerStyled>
    );
  }
  return content;
};

export default City;
