/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React,{StrictMode} from 'react';
import {RootNavigator} from '@/navigation';
import type { PreloadedState } from '@reduxjs/toolkit'
import {Provider} from 'react-redux';
import {store} from './config/store';
function App(): JSX.Element {
  return (
    <StrictMode>
    <Provider store={store}>
      <RootNavigator />
    </Provider>
    </StrictMode>
  );
}

export default App;
