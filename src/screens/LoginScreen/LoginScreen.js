import React, { memo, useCallback } from 'react';
import { object } from 'prop-types';
import { View, Button } from 'react-native';
import { useDispatch } from 'react-redux';

import { login } from 'actions/userActions';
import strings from 'locale';
import { SIGN_UP_SCREEN, LOGIN_SCREEN } from 'constants/screens';
import LoginForm from 'screens/LoginScreen/LoginForm';

import styles from './LoginScreen.styles';

const LoginScreen = ({ navigation }) => {
  navigation.setOptions({ title: strings.SIGN_IN.title });

  const dispatch = useDispatch();
  const loginRequest = useCallback(user => dispatch(login(user)), [dispatch]);
  const handleLogin = useCallback(() => navigation.push(SIGN_UP_SCREEN), [navigation]);

  return (
    <View style={styles.container} testID={LOGIN_SCREEN}>
      <LoginForm onSubmit={loginRequest} />
      <Button testID="sign-up-button" title={strings.SIGN_UP.title} onPress={handleLogin} />
    </View>
  );
};

LoginScreen.propTypes = {
  navigation: object.isRequired,
};

export default memo(LoginScreen);
