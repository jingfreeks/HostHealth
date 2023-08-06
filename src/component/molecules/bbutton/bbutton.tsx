import React from 'react';
import {Text} from '@component/atoms/text';
import Button from '@component/atoms/button/button';

import {ContainerStyled} from './styles';
const Bbutton = props => {
  const {onPress, title, border = 10, bcolor = 'transparent', padding} = props;
  return (
    <ContainerStyled>
      <Button
        onPress={onPress}
        alignment={'center'}
        border={border}
        padding={padding}
        bcolor={bcolor}>
        <Text TextMode="Stext">{title}</Text>
      </Button>
    </ContainerStyled>
  );
};
export default Bbutton;
