import React from 'react';
import {render} from '@testing-library/react-native';
import Formtextcontroller from '../formtextcontroller';

jest.mock('react-hook-form', () => {
  return {
    ...jest.requireActual('react-hook-form'),
    Controller: () => jest.fn(),
    useFormContext: () => ({
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      control: () => jest.fn(),
    }),
  };
});
describe('Form Text Controller Component', () => {
  it('Should work as expected to get snapshot', () => {
    const all = render(<Formtextcontroller />);
    expect(all.toJSON()).toMatchSnapshot();
  });
});
