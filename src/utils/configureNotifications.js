import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import humps from 'humps';

import { IS_ANDROID, IS_IOS } from 'constants';
import { updateFirebaseToken } from 'actions/userActions';
import { navigate } from 'services/navigationService';
import { COMMUNICATION, EVENT, INVITATION, ONE_ON_ONE } from 'constants/models';
import { COMMUNICATION_SCREEN, EVENT_DETAIL_SCREEN, ONE_ON_ONE_SCREEN } from 'constants/screens';

export const handleNotifications = data => {
  const notification = humps.camelizeKeys(data || {});

  const { type, id, event } = notification;

  if (type === COMMUNICATION) navigate(COMMUNICATION_SCREEN, { id });
  if (type === EVENT || type === INVITATION) navigate(EVENT_DETAIL_SCREEN, { id: event || id });
  if (type === ONE_ON_ONE) navigate(ONE_ON_ONE_SCREEN, { id });
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
    if (userInteraction) {
      handleNotifications(foreground ? notification.data : notification);
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
      return err;
    },

    // ON NOTIFICATION
    onNotification: handleAndroidPushNotification,
    popInitialNotification: true,
    requestPermissions: false,
  });
};

export default configureNotifications;
