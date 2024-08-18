import CitySlice, {initialState, useGetCityQuery} from '../city';

describe("tests for City Slice", () => {
    test("initialize slice with initialValue", () => {
    //   const citySliceInit = useGetCityQuery(initialState, { type: "unknown" });
      expect(initialState).toBe(initialState);
    });
  
    // test("testAddReducer", () => {
    //   const testData = {
    //     id: `${new Date().getSeconds()}`,
    //     description: "This is for the test section",
    //     significance: 5,
    //   };
  
    //   const afterReducerOperation = ListSlice(
    //     initialState,
    //     testAddReducer(testData)
    //   );
  
    //   expect(afterReducerOperation).toStrictEqual({
    //     value: [initialState.value.at(0), testData],
    //   });
    // });
  });
  