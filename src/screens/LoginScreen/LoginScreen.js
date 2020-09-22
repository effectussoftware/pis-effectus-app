import React, { memo, useCallback, useEffect } from 'react';
import { object } from 'prop-types';
import { View, Image, Alert } from 'react-native';
import { useDispatch } from 'react-redux';

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';

import { login } from 'actions/userActions';
import strings from 'locale';
import { LOGIN_SCREEN } from 'constants/screens';

import appLogo from '../../assets/images/appLogo/default.png';

import styles from './LoginScreen.styles';

const LoginScreen = ({ navigation }) => {
  navigation.setOptions({ title: strings.SIGN_IN.title });

  const dispatch = useDispatch();
  const loginRequest = useCallback(user => dispatch(login(user)), [dispatch]);

  useEffect(() => {
    GoogleSignin.configure();
  }, []);

  const _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      loginRequest(userInfo);
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
      <Image source={appLogo} />
      <GoogleSigninButton
        size={GoogleSigninButton.Size.Standard}
        color={GoogleSigninButton.Color.Auto}
        onPress={_signIn}
      />
    </View>
  );
};

LoginScreen.propTypes = {
  navigation: object.isRequired,
};

export default memo(LoginScreen);
