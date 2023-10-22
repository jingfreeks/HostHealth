import React from 'react';
import {render} from '@testing-library/react-native';
import Button from '../hcontainer';

describe('HContainer Component', () => {
  it('Should work as expected to get snapshot', () => {
    const all = render(<Button onPress={() => jest.fn()} />);
    expect(all.toJSON()).toMatchSnapshot();
  });
});
