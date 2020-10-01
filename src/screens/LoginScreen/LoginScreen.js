import React, { memo, useCallback, useEffect } from 'react';
import { View, Image, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import Config from 'react-native-config';

import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';

import strings from 'locale';
import { login } from 'actions/userActions';
import { LOGIN_SCREEN } from 'constants/screens';

import { Button } from 'components';

import appLogo from 'assets/images/appLogo/default.png';

import styles from './LoginScreen.styles';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const loginRequest = useCallback(user => dispatch(login(user)), [dispatch]);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: Config.GOOGLE_AUTH_CLIENT_ID_SERVER,
      iosClientId: Config.GOOGLE_AUTH_CLIENT_ID_IOS,
    });
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();

      const { idToken } = await GoogleSignin.signIn();

      loginRequest(idToken);
    } catch (error) {
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
    }
  };

  return (
    <View style={styles.container} testID={LOGIN_SCREEN}>
      <Image style={styles.logo} source={appLogo} />
      <Button title={strings.LOGIN_SCREEN.submit} onPress={signIn} testID="login-submit-button" />
    </View>
  );
};

export default memo(LoginScreen);
