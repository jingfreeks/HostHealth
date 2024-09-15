import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      navigate: jest.fn(),
      addListener:jest.fn(),
    }),
    NavigationContainer: jest.fn(),
    useIsFocused: () => true,
    useDispatch: () => ({dispatch: jest.fn()}),
  };
});
jest.mock('@react-navigation/drawer',()=>{
  return {
    createDrawerNavigator:jest.fn()
  }
})
jest.mock('@react-navigation/native-stack', () => {
  return {
    createNativeStackNavigator: () => ({
      Navigator: jest.fn(),
    }),
  };
});

jest.mock('@react-navigation/bottom-tabs', () => {
  return {
    createBottomTabNavigator: jest.fn(),
  };
});

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);
jest.mock('@supabase/supabase-js');
jest.useFakeTimers();

jest.mock('@react-navigation/bottom-tabs',()=>{
  return {
    ...jest.requireActual('@react-navigation/native'),
    createBottomTabNavigator: () => ({
      Navigator: jest.fn(),
    }),
  }
})