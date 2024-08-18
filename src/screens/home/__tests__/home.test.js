import React from 'react';
import {waitFor,act} from '@testing-library/react-native'
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import {renderWithProviders} from '@/utils/testframeworknew';
import Home from '../home';

describe('Home Screen', () => {
  it('Should work as expected to get snapshot', () => {
    const all = renderWithProviders(<Home />);
    waitFor(() => {
      expect(all.toJSON()).toMatchSnapshot();
    });
    const el=all.getByTestId('HomeScreenOnRefreshTestId')
  });

  it('Should work as to trigger refresh function', async() => {
    const all = renderWithProviders(<Home />);

    const el=all.getByTestId('HomeScreenOnRefreshTestId')
    expect(el).toBeDefined();
    const {refreshControl} = el.props;
    await act(async () => {
      refreshControl.props.onRefresh();
    });
    // waitFor(() => {
    //   expect(all.toJSON()).toBeTruthy();
    // });
  });
});

