import * as React from 'react';
import {renderWithProviders} from '@/utils/testframeworknew';
import {AuthNavigation} from '../authnavigation';


test('AuthNavigation', () => {
  const all = renderWithProviders(<AuthNavigation />);
  expect(all.toJSON()).toMatchSnapshot();
});
