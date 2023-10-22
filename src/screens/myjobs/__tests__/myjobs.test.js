import React from 'react';
import {render} from '@testing-library/react-native';
import {MockProvider} from '@/utils/testframework';
import Myjobs from '../myjobs';

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
describe('My Jobs Screen', () => {
  it('Should work as expected to get snapshot', () => {
    const all = render(
      <MockProvider
        store={{
          pcities: {loading: false, data: []},
          suggetedjob: {loading: false, data: []},
        }}>
        <Myjobs />
      </MockProvider>,
    );
    expect(all.toJSON()).toMatchSnapshot();
  });
});
