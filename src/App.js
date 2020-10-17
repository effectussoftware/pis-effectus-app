import React, { useCallback, useEffect } from 'react';
import { Provider } from 'react-redux';
import { ActivityIndicator } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { requestNotifications } from 'react-native-permissions';

import httpClient from 'httpClient';
import applyDefaultInterceptors from 'httpClient/applyDefaultInterceptors';
import moment from 'moment';
import 'moment/locale/es';

import Navigation from 'navigators';
import configureStore from 'store/configureStore';
import useNotification from 'hooks/useNotification';

const { store, persistor } = configureStore({});

applyDefaultInterceptors(store, httpClient);

const App = () => {
  moment.locale('es');

  const checkPermission = useCallback(async () => {
    requestNotifications(['alert', 'badge', 'sound']);
  }, []);

  useEffect(() => {
    checkPermission();
  }, [checkPermission]);

  useNotification();

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
