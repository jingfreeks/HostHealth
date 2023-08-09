import React from 'react';
import {render} from '@testing-library/react-native';
import Bbutton from '../bbutton';

describe('Bbutton Component', () => {
  it('Should work as expected to get snapshot', () => {
    const all = render(<Bbutton onPress={() => jest.fn()} />);
    expect(all.toJSON()).toMatchSnapshot();
  });
});
