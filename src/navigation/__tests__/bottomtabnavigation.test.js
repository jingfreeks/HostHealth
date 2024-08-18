import * as React from 'react';
import {renderWithProviders} from '@/utils/testframeworknew';
import Bottomtabnavigation from '../bottomtabnavigation';


test('Bottomtabnavigation', () => {
  const all = renderWithProviders(<Bottomtabnavigation />);
  expect(all.toJSON()).toMatchSnapshot();
});
