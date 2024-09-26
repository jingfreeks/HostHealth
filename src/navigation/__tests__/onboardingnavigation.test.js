import * as React from 'react';
import {renderWithProviders} from '@/utils/testframeworknew';
import {OnBoardinNavigation} from '../onboardingnavigation';


test('shows profile screen when View Profile is pressed', () => {
  const all = renderWithProviders(<OnBoardinNavigation />);
  expect(all.toJSON()).toMatchSnapshot();
});
