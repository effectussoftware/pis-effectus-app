import React, { memo, useCallback, useEffect } from 'react';
import { View, Image, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import Config from 'react-native-config';
import { useStatus, LOADING } from '@rootstrap/redux-tools';

import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';

import strings from 'locale';
import { login } from 'actions/userActions';
import { LOGIN_SCREEN } from 'constants/screens';
import testIds from 'constants/testIds';
import useAlertError from 'hooks/useAlertError';

import { Button } from 'components';

import appLogo from 'assets/images/appLogo/default.png';

import styles from './LoginScreen.styles';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const loginRequest = useCallback(user => dispatch(login(user)), [dispatch]);

  const { status, error } = useStatus(login);

  const loading = status === LOADING;

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: Config.GOOGLE_AUTH_CLIENT_ID_SERVER,
      iosClientId: Config.GOOGLE_AUTH_CLIENT_ID_IOS,
      hostedDomain: 'effectussoftware.com',
    });
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();

      const { idToken } = await GoogleSignin.signIn();

      loginRequest(idToken);
    } catch (error) {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      switch (error.code) {
        case statusCodes.SIGN_IN_CANCELLED:
          // sign in was cancelled
          Alert.alert('cancelled');
          break;
        case statusCodes.IN_PROGRESS:
          // operation (eg. sign in) already in progress
          Alert.alert('in progress');
          break;
        case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
          // android only
          Alert.alert('play services not available or outdated');
          break;
        default:
          Alert.alert('Something went wrong', error.toString());
      }
      // await GoogleSignin.revokeAccess();
      // await GoogleSignin.signOut();
    }
  };

  useAlertError(error, login);

  return (
    <View style={styles.container} testID={LOGIN_SCREEN}>
      <Image style={styles.logo} source={appLogo} />
      <Button
        title={loading ? strings.COMMON.loading : strings.LOGIN_SCREEN.submit}
        onPress={signIn}
        testID={testIds.LOGIN_SCREEN.submitButton}
        disabled={loading}
      />
    </View>
  );
};

export default memo(LoginScreen);
