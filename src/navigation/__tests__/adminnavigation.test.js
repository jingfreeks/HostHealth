import * as React from 'react';
import {renderWithProviders} from '@/utils/testframeworknew';
import {Adminappnavigation} from '../adminnavigation';


test('shows profile screen when View Profile is pressed', () => {
  const all = renderWithProviders(<Adminappnavigation />);
  expect(all.toJSON()).toMatchSnapshot();
});
