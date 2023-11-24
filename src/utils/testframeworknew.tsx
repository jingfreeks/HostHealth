/* eslint-disable @typescript-eslint/no-explicit-any */
import React,{PropsWithChildren} from 'react';
import {render} from '@testing-library/react-native';
import type {RenderOptions} from '@testing-library/react-native';
import type {PreloadedState} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import {setupstore} from '@/config/store';
import type {AppStore, RootState} from '@/config/store';

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = setupstore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {},
) {
  // eslint-disable-next-line @typescript-eslint/ban-types
  function Wrapper({children}: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }
  return {store, ...render(ui, {wrapper: Wrapper, ...renderOptions})};
}
