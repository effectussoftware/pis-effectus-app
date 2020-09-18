import { useEffect } from 'react';
import { Platform } from 'react-native';
import PushNotification from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import Config from 'react-native-config';

import NavigationService from 'services/navigationService';
import { MAIN_SCREEN } from 'constants/screens';

const useNotification = () => {
  useEffect(() => {
    PushNotification.configure({
      onNotification: notification => {
        const { userInfo = {}, data = {} } = notification;
        const { notification_type: notificationType, resource_id: id } = Platform.select({
          ios: data,
          android: userInfo.notification_type ? userInfo : notification,
        });
        console.log('notification type: ', notificationType);
        // TODO: Add cases for each push so it navigates to the correct screen.
        NavigationService.navigate({ id, MAIN_SCREEN });
        notification.finish(PushNotificationIOS.FetchResult.NoData);
      },
      popInitialNotification: true,
      requestPermissions: false,
      senderID: Config.SENDER_ID,
    });
  }, []);
};

export default useNotification;
