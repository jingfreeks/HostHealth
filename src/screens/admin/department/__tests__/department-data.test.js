import React from 'react';
import {fireEvent} from '@testing-library/react-native';
import {renderWithProviders} from '@/utils/testframeworknew';
import {Department} from '../index';

const deleteDepartment = () => ({data: {}});
jest.mock('@/slice', () => {
  return {
    useGetDeptQuery: () => ({
      isLoading: false,
      isSuccess: true,
      isError: false,
      dept: {
        __v: 0,
        _id: '66f54f826d56c57bb6ccf641',
        name: 'Test Department',
      },
      data: {
        entities: {
          '66f54f826d56c57bb6ccf641': {
            __v: 0,
            _id: '66f54f826d56c57bb6ccf641',
            name: 'Test Department',
          },
        },
        ids: ['66f54f826d56c57bb6ccf641'],
      },
    }),
    useDeleteDeptMutation: () => [
      deleteDepartment,
      {isLoading: false, isError: false},
    ],
  };
});
describe('Department admin with data screen', () => {
  it('Should work as expected to get snapshot', () => {
    const all = renderWithProviders(<Department />);
    expect(all.toJSON()).toMatchSnapshot();
  });

  it('Should to trigger Create Button', () => {
    const all = renderWithProviders(<Department />);
    const el = all.getByTestId('DepartmentCreateButtonTestId');
    fireEvent(el, 'onPress');
    expect(all.toJSON()).toBeTruthy();
  });

  it('Should to trigger Edit Button', () => {
    const all = renderWithProviders(<Department />);
    const el = all.getByTestId('DepartmentEditFormTestId');
    fireEvent(el, 'onPress');
    expect(all.toJSON()).toBeTruthy();
  });

  it('Should to trigger Delete Item Button', () => {
    const all = renderWithProviders(<Department />);
    const el = all.getByTestId('DepartmentDeleteItemTestId');
    fireEvent(el, 'onPress');
    expect(all.toJSON()).toBeTruthy();
  });
});
