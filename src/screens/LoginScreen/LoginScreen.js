import React, { useState, memo, useCallback, useEffect } from 'react';
import { View, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Config from 'react-native-config';
import { useStatus, LOADING } from '@rootstrap/redux-tools';
import NetInfo from '@react-native-community/netinfo';

import strings from 'locale';
import { login } from 'actions/userActions';
import {
  LOGIN_SCREEN,
  LOGIN_WELCOME_SUBTEXT,
  LOGIN_WELCOME_TEXT,
  YOUR_GOOGLE_ACCOUNT,
} from 'constants/screens';
import { Button, Text } from 'components';
import SplashScren from 'screens/SplashScreen';
import LoginErrorScreen from 'screens/LoginErrorScreen';
import appLogo from 'assets/images/appLogo/default.png';
import styles from './LoginScreen.styles';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const loginRequest = useCallback(user => dispatch(login(user)), [dispatch]);
  const [splashDelay, setSplashDelay] = useState(true);
  const [isConnected, setIsConnected] = useState(true);
  const [loginError, setLoginError] = useState(false);

  const { error, status } = useStatus(login);

  const loading = status === LOADING;
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: Config.GOOGLE_AUTH_CLIENT_ID_SERVER,
      forceCodeForRefreshToken: true,
      offlineAccess: true,
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSplashDelay(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const { idToken } = await GoogleSignin.signIn();

      loginRequest(idToken);
    } catch (error) {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
    }
  };

  useEffect(() => {
    setLoginError(error);
  }, [error]);

  const showLoginScreen = () => {
    return loginError ? (
      <LoginErrorScreen onPress={signIn} hasInternetConnection={isConnected} />
    ) : (
      <View style={styles.container} testID={LOGIN_SCREEN}>
        <Image style={styles.logo} source={appLogo} />
        <Text style={styles.welcomeText} type="P5">
          {LOGIN_WELCOME_TEXT}
        </Text>
        <Text style={styles.welcomeSubText} type="P4">
          {LOGIN_WELCOME_SUBTEXT}
        </Text>
        <Button
          onPress={signIn}
          style={styles.button}
          title={loading ? strings.COMMON.loading : YOUR_GOOGLE_ACCOUNT}
          imageSrc={require('assets/images/loginIcons/googleIcon.png')}
        />
      </View>
    );
  };

  return splashDelay ? <SplashScren /> : showLoginScreen();
};

export default memo(LoginScreen);
