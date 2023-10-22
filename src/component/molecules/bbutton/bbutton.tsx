import React from 'react';
import {Text} from '@/component/atoms/text';
import Button from '@/component/atoms/button/button';
import {Loaders} from '@/component/atoms/loaders';
import type {BbuttonProps} from './types';
import {ContainerStyled} from './styles';
const Bbutton = (props: BbuttonProps) => {
  const {
    onPress = () => {},
    title,
    border = 10,
    bcolor = 'transparent',
    padding,
    borderw,
    borderc,
    loaders = false,
    loaderColor,
    loaderSize = 'small',
  } = props;
  return (
    <ContainerStyled>
      <Button
        bcolor={bcolor}
        border={border}
        borderc={borderc}
        borderw={borderw}
        padding={padding}
        onPress={onPress}>
        {loaders ? (
          <Loaders color={loaderColor} size={loaderSize} />
        ) : (
          <Text TextMode="Stext">{title}</Text>
        )}
      </Button>
    </ContainerStyled>
  );
};
export default Bbutton;
