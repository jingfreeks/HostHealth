/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {RootNavigator} from '@navigation';
import {Provider} from 'react-redux';
import {store} from './config/store';
function App(): JSX.Element {
  return (
    <Provider store={store}>
      {/* <GestureHandlerRootView style={{flex: 1}}> */}
      <RootNavigator />
      {/* </GestureHandlerRootView> */}
    </Provider>
  );
}

export default App;
