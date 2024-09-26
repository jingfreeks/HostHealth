import React from 'react';
import {fireEvent} from '@testing-library/react-native';
import {renderWithProviders} from '@/utils/testframeworknew';
import {Banks} from '../index';

const deleteBanks = () => ({data:{}});
jest.mock('@/slice', () => {
  return {
    useGetBanksQuery: () => ({
      isLoading: false,
      isSuccess: true,
      isError: false,
      bank: {
        __v: 0,
        _id: '66f54f826d56c57bb6ccf641',
        address: 'Metro Manila',
        name: 'Bank of Philippine Island',
      },
      data: {
        entities: {
          '66f54f826d56c57bb6ccf641': {
            __v: 0,
            _id: '66f54f826d56c57bb6ccf641',
            address: 'Metro Manila',
            name: 'Bank of Philippine Island',
          },
        },
        ids: ['66f54f826d56c57bb6ccf641'],
      },
    }),
    useDeleteBanksMutation: () => [
      deleteBanks,
      {isLoading: false, isError: false},
    ],
  };
});
describe('Banks admin with data screen', () => {
  it('Should work as expected to get snapshot', () => {
    const all = renderWithProviders(<Banks />);
    expect(all.toJSON()).toMatchSnapshot();
  });

  it('Should to trigger Create Button', () => {
    const all = renderWithProviders(<Banks />);
    const el = all.getByTestId('BanksCreateButtonTestId');
    fireEvent(el, 'onPress');
    expect(all.toJSON()).toBeTruthy();
  });

  it('Should to trigger Edit Button', () => {
    const all = renderWithProviders(<Banks />);
    const el = all.getByTestId('BankEditFormTestId');
    fireEvent(el, 'onPress');
    expect(all.toJSON()).toBeTruthy();
  });

  it('Should to trigger Delete Item Button', () => {
    const all = renderWithProviders(<Banks />);
    const el = all.getByTestId('BankDeleteItemTestId');
    fireEvent(el, 'onPress');
    expect(all.toJSON()).toBeTruthy();
  });
  
});
