import React from 'react';
import {interestedTypes} from './types';
import {Text} from '@/component';
import {Avatar} from '@/component/molecules';
import {
  RenderItemContainerStyled,
  ListItemInterestedInfoStyled,
} from './styles';

const RenderItem = (props: {item: interestedTypes}) => {
  const {item} = props;
  return (
    <RenderItemContainerStyled>
      <Avatar isView={false} uri={item.picture} size={100} />
      <ListItemInterestedInfoStyled>
        <Text TextMode='Title'>{`${item.firstname} `}</Text>
        <Text TextMode='Title'>{`${item.lastname} `}</Text>
        <Text TextMode='Title'>{item.middlename}</Text>
      </ListItemInterestedInfoStyled>
    </RenderItemContainerStyled>
  );
};
export default RenderItem;
