import React from 'react';
import {render} from '@testing-library/react-native';
import Text from '../text';

describe('Text Component', () => {
  it('Should work as expected to get snapshot', () => {
    const all = render(<Text />);
    expect(all.toJSON()).toMatchSnapshot();
  });
});
