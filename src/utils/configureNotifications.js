import { Platform } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import { navigate } from 'services/navigationService';

import { APP_STACK } from 'constants/screens';
import { IS_IOS } from 'constants';
import { updateFirebaseToken } from 'actions/userActions';

const configureNotifications = store => {
  PushNotification.configure({
    onRegister: async ({ token }) => {
      // For android it's a fcm token already, for iO
      let fcmToken;
      if (IS_IOS) {
        if (!messaging().isDeviceRegisteredForRemoteMessages) {
          await messaging().registerDeviceForRemoteMessages();
        }
        fcmToken = await messaging().getToken();
      } else {
        fcmToken = token;
      }
      console.log('[LocalNotificationService] onRegister: ', fcmToken);
      store.dispatch(updateFirebaseToken(fcmToken));
    },
    onRegistrationError: err => {
      console.log(err);
    },
    onNotification: notification => {
      const { userInfo = {}, data = {}, message, userInteraction } = notification;
      // const { notification_type: notificationType, resource_id: id } = Platform.select({
      const { resource_id: id } = Platform.select({
        ios: data,
        android: userInfo.notification_type ? userInfo : notification,
      });
      console.log('notification: ', notification);

      const notificationOpened = userInteraction || data.userInteraction;

      if (notificationOpened) {
        // TODO: Add cases for each push so it navigates to the correct screen.
        navigate(APP_STACK, { id });
      } else if (IS_IOS && message?.title) {
        const { title, body, data } = message;

        // Relay notification display for iOS when app is in foreground
        PushNotificationIOS.presentLocalNotification({
          alertTitle: title,
          alertBody: body,
          userInfo: data,
          data,
        });
      }
      notification.finish(PushNotificationIOS.FetchResult.NoData);
    },

    onRemoteFetch: data => {
      console.log('onRemoteFetch: ');
      console.log(data);
    },
    onAction: data => {
      console.log('onAction: ');
      console.log(data);
    },
    popInitialNotification: true,
    requestPermissions: false,
  });
};

export default configureNotifications;
