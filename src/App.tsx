/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {StrictMode} from 'react';
import {RootNavigator} from '@/navigation';
import type {PreloadedState} from '@reduxjs/toolkit';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {store, persiststore} from './config/store';
function App(): JSX.Element {
  return (
    <StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persiststore}>
          <RootNavigator />
        </PersistGate>
      </Provider>
    </StrictMode>
  );
}

export default App;
