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
import {useCityHooks} from './hooks';

const City = () => {
  let content;
  const {navigation, city, isLoading, isSuccess, error, isError} =
  useCityHooks();

  const renderItem: ListRenderItem<any> = useCallback(
    ({item}: ListRenderItemInfo<any>) => {
      return <List cityId={item} />;
    },
    [],
  );
  console.log('city',city)
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
          data={city.ids}
          extraData={city.ids}
          renderItem={renderItem}
          keyExtractor={(item: any, index) => index.toString()}
        />
        <FAB
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
