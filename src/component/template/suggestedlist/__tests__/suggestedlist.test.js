import React from 'react';
import {render} from '@testing-library/react-native';
import SuggestedList from '../suggestedlist';

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      navigate: () => {},
    }),
    useIsFocused: () => true,
    useDispatch: () => ({dispatch: jest.fn()}),
  };
});
describe('Login Content Template Component', () => {
  it('Should work as expected to get snapshot', () => {
    const all = render(
      <SuggestedList
        data={[
          {
            image:
              'https://img.freepik.com/free-photo/modern-tokyo-street-background_23-2149394948.jpg?w=996&t=st=1691132416~exp=1691133016~hmac=ee53d564abdbe32689b1a997ac989046fba50feb0f76dd84f912d8bea1a1121b',
            city: 'Boston',
            state: 'MA',
            jobtitle: 'Registered Nurse',
            company: 'Enlo Medical Center',
            dept: 'Labor and Delivery',
            weeks: '12',
            shift: 'Days',
            match: '97',
            salaryrange: '3,656.09-4,500',
            address: '55 Fruit Street, Boston, MA 02114',
            joborderno: '179827',
            id: 1,
          },
        ]}
      />,
    );

    expect(all.toJSON()).toMatchSnapshot();
  });
  it('Should work as expected for empty data to get snapshot', () => {
    const all = render(<SuggestedList data={[]} />);

    expect(all.toJSON()).toMatchSnapshot();
  });
});
