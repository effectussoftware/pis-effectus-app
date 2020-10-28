import { useCallback, useEffect } from 'react';
import { requestNotifications } from 'react-native-permissions';

import { IS_IOS } from 'constants';
import {
  handleIosInitialNotification,
  startListeningIosNotifications,
} from 'utils/configureNotifications';

const useNotifications = () => {
  const checkPermission = useCallback(async () => {
    requestNotifications(['alert', 'badge', 'sound']);
  }, []);

  useEffect(() => {
    checkPermission();
    if (IS_IOS) startListeningIosNotifications();
    handleIosInitialNotification();
  }, [checkPermission]);
};

export default useNotifications;
