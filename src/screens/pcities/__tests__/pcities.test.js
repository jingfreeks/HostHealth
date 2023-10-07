import React from 'react';
import {render} from '@testing-library/react-native';
import {MockProvider} from '@/utils/testframework';
import Pcities from '../pcities';

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
describe('Popular Cities Screen', () => {
  it('Should work as expected to get snapshot', () => {
    const all = render(
      <MockProvider
        store={{
          pcities: {loading: false, data: []},
          suggetedjob: {loading: false, data: []},
        }}>
        <Pcities />
      </MockProvider>,
    );
    expect(all.toJSON()).toMatchSnapshot();
  });
});
