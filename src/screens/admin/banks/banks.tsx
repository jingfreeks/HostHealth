import React, {useCallback} from 'react';
import {FlatList, ListRenderItem, ListRenderItemInfo} from 'react-native';
import {FAB} from 'react-native-elements';
import {ContainerStyled, StateEmptyContainerStyled} from './styles';
import {List} from './component';
import {HomeEmptyCard} from '@/component';
import {PcitiesEmptyIcon} from '@/assets';
import {useBankHooks} from './hooks';
import {message} from '@/config/constant';
import {testingProps} from '@/utils/testframework';

const Banks = () => {
  let content;
  const {navigation, bank, isLoading, isSuccess, error, isError} =
    useBankHooks();

    console.log('bank',bank)
  const renderItem: ListRenderItem<any> = useCallback(
    ({item}: ListRenderItemInfo<any>) => {
      return <List bankId={item} />;
    },
    [],
  );

  if (isLoading || isError) {
    let messages;
    if (error?.status === 403) {
      messages = message[100001];
    } else {
      messages = message[100015];
    }
    content = (
      <StateEmptyContainerStyled>
        <HomeEmptyCard imgsource={PcitiesEmptyIcon} message={messages} />
        <FAB
          {...testingProps('BanksCreateButtonTestId')}
          title="Create"
          placement="right"
          size="large"
          onPress={() => navigation.navigate('BankForm')}
        />
      </StateEmptyContainerStyled>
    );
  } else if (isSuccess) {
    content = (
      <ContainerStyled>
        <FlatList
          data={bank.ids}
          extraData={bank.ids}
          renderItem={renderItem}
          keyExtractor={(item: any, index) => index.toString()}
        />
        <FAB
          {...testingProps('BanksCreateButtonTestId')}
          title="Create"
          placement="right"
          size="large"
          onPress={() => navigation.navigate('BankForm')}
        />
      </ContainerStyled>
    );
  }
  return content;
};

export default Banks;
