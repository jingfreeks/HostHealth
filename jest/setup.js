// include this line for mocking react-native-gesture-handler
import 'react-native-gesture-handler/jestSetup';
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

global.window = {};
global.window = global;
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

jest.mock('@react-navigation/bottom-tabs',()=>{
  return {
    ...jest.requireActual('@react-navigation/native'),
    createBottomTabNavigator: () => ({
      Navigator: jest.fn(),
    }),
  }
})



// include this section and the NativeAnimatedHelper section for mocking react-native-reanimated
jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {};

  return Reanimated;
});

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');