import React from 'react';
import {Text} from '@/component/atoms/text';
import Button from '@/component/atoms/button/button';
import type {BbuttonProps} from './types';
import {ContainerStyled} from './styles';
const Bbutton = (props: BbuttonProps) => {
  const {
    onPress,
    title,
    border = 10,
    bcolor = 'transparent',
    padding,
    borderw,
    borderc,
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
        <Text TextMode="Stext">{title}</Text>
      </Button>
    </ContainerStyled>
  );
};
export default Bbutton;
