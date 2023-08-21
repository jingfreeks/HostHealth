import React from 'react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
// import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
// // import {DARK_THEME} from '@/utils/constants';
// // import {ThemeProvider} from 'styled-components/native';

export const MockProvider = (props: MockProviderType): React$Node => {
  const {store, children} = props;
  const mockStore = configureStore([thunk]);
  const mocked = mockStore(store);
  return <Provider store={mocked}>{children}</Provider>;
};

export const testingProps = (reference: string): unknown => ({
  testID: reference,
  accessibilityLabel: reference,
});

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       retry: false,
//     },
//   },
// });
// export const wrapper = ({children}) => (
//   <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
// );
