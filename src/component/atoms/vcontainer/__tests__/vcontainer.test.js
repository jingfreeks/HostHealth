import React from 'react';
import {render} from '@testing-library/react-native';
import Vcontainer from '../vcontainer';

describe('VContainer Component', () => {
  it('Should work as expected to get snapshot', () => {
    const all = render(<Vcontainer />);
    expect(all.toJSON()).toMatchSnapshot();
  });
});
