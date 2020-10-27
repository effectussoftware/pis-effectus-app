import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import humps from 'humps';

import { IS_ANDROID, IS_IOS } from 'constants';
import { updateFirebaseToken } from 'actions/userActions';
import { navigate } from 'services/navigationService';
import { COMMUNICATION_SCREEN } from 'constants/screens';

const types = {
  COMMUNICATION: 'Communication',
};

export const handleNotifications = data => {
  const notification = humps.camelizeKeys(data || {});

  const { type, id } = notification;

  if (type === types.COMMUNICATION) navigate(COMMUNICATION_SCREEN, { id });
};

export const handleIosPushNotification = info => {
  const {
    data,
    notification: { body, title },
  } = info || {};
  PushNotificationIOS.presentLocalNotification({
    alertBody: body,
    alertTitle: title,
    userInfo: data,
  });
};

export const handleIosInitialNotification = async () => {
  const notification = await messaging().getInitialNotification();
  notification?.data && handleNotifications(notification.data);
};

export const handleAndroidPushNotification = notification => {
  if (IS_ANDROID) {
    const { foreground, userInteraction } = notification;
    if (foreground && userInteraction) {
      handleNotifications(notification.data);
    }
  }
};

export const startListeningIosNotifications = async () => {
  messaging().onMessage(data => handleIosPushNotification(data));

  messaging().onNotificationOpenedApp(({ data }) => handleNotifications(data));
  PushNotificationIOS.addEventListener('localNotification', notification => {
    handleNotifications(notification?.getData());
  });
};

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
      store.dispatch(updateFirebaseToken(fcmToken));
    },
    onRegistrationError: err => {
      console.log(err);
    },

    // ON NOTIFICATION
    onNotification: handleAndroidPushNotification,
    popInitialNotification: true,
    requestPermissions: false,
  });
};

export default configureNotifications;
