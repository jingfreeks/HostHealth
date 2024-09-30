import React from 'react';
import {fireEvent} from '@testing-library/react-native';
import {renderWithProviders} from '@/utils/testframeworknew';
import {Company} from '../index';

const deleteCompany = () => ({data: {}});
jest.mock('@/slice', () => {
  return {
    useGetCompanyQuery: () => ({
      isLoading: false,
      isSuccess: true,
      isError: false,
      company: {
        __v: 0,
        _id: '655f656dbed03fb0a5baddf0',
        name: 'San Francisco',
        address: 'test address',
        state: '655f48446bdacc1843348d7a',
      },
      data: {
        entities: {
          '655f656dbed03fb0a5baddf0': {
            __v: 0,
            _id: '655f656dbed03fb0a5baddf0',
            name: 'San Francisco',
            address: 'test address',
            state: '655f48446bdacc1843348d7a',
          },
        },
        ids: ['655f656dbed03fb0a5baddf0'],
      },
      selectFromResult:jest.fn()
    }),
    useDeleteCompanyMutation: () => [
      deleteCompany,
      {isLoading: false, isError: false},
    ],
  };
});
describe('Company admin with data screen', () => {
  it('Should work as expected to get snapshot', () => {
    const all = renderWithProviders(<Company />);
    expect(all.toJSON()).toMatchSnapshot();
  });

  it('Should to trigger Create Button', () => {
    const all = renderWithProviders(<Company />);
    const el = all.getByTestId('CompanyCreateButtonTestId');
    fireEvent(el, 'onPress');
    expect(all.toJSON()).toBeTruthy();
  });

  it('Should to trigger Edit Button', () => {
    const all = renderWithProviders(<Company />);
    const el = all.getByTestId('CompanyEditFormTestId');
    fireEvent(el, 'onPress');
    expect(all.toJSON()).toBeTruthy();
  });

  it('Should to trigger Delete Item Button', () => {
    const all = renderWithProviders(<Company />);
    const el = all.getByTestId('CompanyDeleteFormTestId');
    fireEvent(el, 'onPress');
    expect(all.toJSON()).toBeTruthy();
  });
});
