import React from 'react'
import { fireEvent } from '@testing-library/react-native';
import {renderWithProviders} from '@/utils/testframeworknew';
import {Banks} from '../banks';
describe('Banks admin screen', () => {
  it('Should work as expected to get snapshot', () => {
    const all = renderWithProviders(<Banks />);
    expect(all.toJSON()).toMatchSnapshot();
  });

  it('Should to trigger Create Button', () => {
    const all = renderWithProviders(<Banks />);
    const el=all.getByTestId('BanksCreateButtonTestId')
    fireEvent(el,'onPress')
    expect(all.toJSON()).toBeTruthy();
  });
});
