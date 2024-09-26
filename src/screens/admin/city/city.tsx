import React, {useCallback} from 'react';
import {FlatList, ListRenderItem, ListRenderItemInfo} from 'react-native';
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
  const {navigation, city, isLoading, isSuccess, error, isError} =
    useCityHooks();

    console.log('citiess',city)
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
