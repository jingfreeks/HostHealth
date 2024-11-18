import React,{useCallback} from 'react'
import {FlatList, ListRenderItemInfo} from 'react-native';
import {Text} from '@/component'
import {ContainerStyled} from './styles'
import type {interestedTypes,interestedProps} from './types'
import ListItem from './renderItem' 

const InterestedScreen=(props:interestedProps)=>{
    const {data}=props
    const renderItem= useCallback(
        ({item}: ListRenderItemInfo<interestedTypes>) => {
          return <ListItem item={item} />;
        },
        [],
      );
    return(
        <ContainerStyled>
        <FlatList
          data={data}
          extraData={data}
          renderItem={renderItem}
          keyExtractor={(item: any, index) => index.toString()}
        />
        </ContainerStyled>
    )
};
export default InterestedScreen