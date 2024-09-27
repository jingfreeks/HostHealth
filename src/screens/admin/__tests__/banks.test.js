import React from 'react'
import { fireEvent } from '@testing-library/react-native';
import {renderWithProviders} from '@/utils/testframeworknew';
import {Banks,BankForm} from '../banks';


jest.mock('react-hook-form', () => ({
  ...jest.requireActual('react-hook-form'),
  useFormContext: () => ({
    handleSubmit: () => jest.fn(),
    control: {
      register: jest.fn(),
      unregister: jest.fn(),
      getFieldState: jest.fn(),
      _names: {
        array: new Set('test'),
        mount: new Set('test'),
        unMount: new Set('test'),
        watch: new Set('test'),
        focus: 'test',
        watchAll: false,
      },
      _subjects: {
        watch: jest.fn(),
        array: jest.fn(),
        state: jest.fn(),
      },
      _getWatch: jest.fn(),
      _formValues: ['test','test'],
      _defaultValues: ['name','address'],
    },
    getValues: () => {
      return [];
    },
    setValue: () => jest.fn(),
    formState: () => jest.fn(),
    watch: () => jest.fn(),
  }),
  Controller: () => [],
  useSubscribe: () => ({
    r: {current: {subject: {subscribe: () => jest.fn()}}},
  }),
}));
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

describe('Banks Form admin screen', () => {
  it('Should work as expected to get snapshot', () => {
    const all = renderWithProviders(<BankForm />);
    expect(all.toJSON()).toMatchSnapshot();
  });
});
