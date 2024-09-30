import React from 'react';
import {fireEvent} from '@testing-library/react-native';
import {renderWithProviders} from '@/utils/testframeworknew';
import {Shift} from '../index';

const deleteShift = () => ({data: {}});
jest.mock('@/slice', () => {
  return {
    useGetShiftQuery: () => ({
      isLoading: false,
      isSuccess: true,
      isError: false,
      shift: {
        __v: 0,
        _id: '66f54f826d56c57bb6ccf641',
        title: 'Test Department',
      },
      data: {
        entities: {
          '66f54f826d56c57bb6ccf641': {
            __v: 0,
            _id: '66f54f826d56c57bb6ccf641',
            title: 'Test Department',
          },
        },
        ids: ['66f54f826d56c57bb6ccf641'],
      },
    }),
    useDeleteShiftMutation: () => [
      deleteShift,
      {isLoading: false, isError: false},
    ],
  };
});
describe('Shift admin with data screen', () => {
  it('Should work as expected to get snapshot', () => {
    const all = renderWithProviders(<Shift />);
    expect(all.toJSON()).toMatchSnapshot();
  });

  it('Should to trigger Create Button', () => {
    const all = renderWithProviders(<Shift />);
    const el = all.getByTestId('ShiftCreateButtonTestId');
    fireEvent(el, 'onPress');
    expect(all.toJSON()).toBeTruthy();
  });

  it('Should to trigger Edit Button', () => {
    const all = renderWithProviders(<Shift />);
    const el = all.getByTestId('ShiftEditFormTestId');
    fireEvent(el, 'onPress');
    expect(all.toJSON()).toBeTruthy();
  });

  it('Should to trigger Delete Item Button', () => {
    const all = renderWithProviders(<Shift />);
    const el = all.getByTestId('ShiftDeleteItemTestId');
    fireEvent(el, 'onPress');
    expect(all.toJSON()).toBeTruthy();
  });

});
