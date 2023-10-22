import PcitiesSlice, {initialState} from '../pcities';

describe('tests for popular cities slice', () => {
  test('initialize slice with initialValue', () => {
    const listSliceInit = PcitiesSlice(initialState, {
      loading: false,
      data: [],
    });
    expect(listSliceInit).toBe(initialState);
  });
});
