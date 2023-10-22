import SuggestedSlice, {initialState} from '../suggested';

describe('tests for Suggested job slice', () => {
  test('initialize slice with initialValue', () => {
    const listSliceInit = SuggestedSlice(initialState, {
      loading: false,
      data: [],
    });
    expect(listSliceInit).toBe(initialState);
  });
});
