import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import PcitiesSlice, {initialState} from '../login';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);
jest.mock('@supabase/supabase-js')
describe('tests for login slice', () => {
  test('initialize slice with initialValue', () => {
    const loginSliceInit = PcitiesSlice(initialState, {
      loading: false,
      data: [],
    });
    expect(loginSliceInit).toBe(initialState);
  });
});
