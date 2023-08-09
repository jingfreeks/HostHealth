import React from 'react';
import {HomeCard} from '@/component/molecules/homecard';
import {Hheaderlist} from './constant';
const HomeHeaderList = () => {
  return Hheaderlist.map((item, idx) => (
    <HomeCard
      key={idx}
      imgsource={item.imagesource}
      title={item.title}
      subtitle={item.subtitle}
    />
  ));
};
export default HomeHeaderList;
