import React from 'react';
import {interestedTypes} from './types';
import {Text} from '@/component'
import {Avatar} from '@/component/molecules';

const RenderItem = (props: {item: interestedTypes}) => {
  const {item} = props;
  return (
    <>
      <Avatar
        isView={false}
        uri={item.picture}
        size={100}
      />
      <Text>{item.firstname}</Text>
      <Text>{item.lastname}</Text>
      <Text>{item.middlename}</Text>
    </>
  );
};
export default RenderItem;
