import React from 'react';
import { Provider } from 'react-redux';
import { ActivityIndicator } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import moment from 'moment';
import 'moment/locale/es';

import httpClient from 'httpClient';
import applyDefaultInterceptors from 'httpClient/applyDefaultInterceptors';
import Navigation from 'navigators';
import configureStore from 'store/configureStore';
import configureNotifications from 'utils/configureNotifications';

console.disableYellowBox = true;

const { store, persistor } = configureStore({});

applyDefaultInterceptors(store, httpClient);

configureNotifications(store);

const App = () => {
  moment.locale('es');
  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
        <SafeAreaProvider>
          <Navigation />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
