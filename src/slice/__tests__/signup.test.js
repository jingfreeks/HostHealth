import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import PcitiesSlice, {initialState} from '../signup';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);
describe('tests for signup slice', () => {
  test('initialize slice with initialValue', () => {
    const loginSliceInit = PcitiesSlice(initialState, {
      loading: false,
      data: [],
    });
    expect(loginSliceInit).toBe(initialState);
  });
});
