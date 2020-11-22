import { useCallback, useEffect } from 'react';
import { requestNotifications } from 'react-native-permissions';

import { IS_IOS } from 'constants';
import {
  handleIosInitialNotification,
  startListeningIosNotifications,
} from 'utils/configureNotifications';

/**
 * useNotifications
 *
 * Handles permission checking for push notifications.
 * Starts listening for notifications in iOS that is handled differently than android.
 * Last but not least it handles iOS initial notification.
 */
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
