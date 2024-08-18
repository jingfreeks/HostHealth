import * as React from 'react';
import {renderWithProviders} from '@/utils/testframeworknew';
import {RootNavigator} from '../index';

test('shows profile screen when View Profile is pressed', () => {
  const all = renderWithProviders(
    <RootNavigator />,
  );
  expect(all.toJSON()).toMatchSnapshot();
});
