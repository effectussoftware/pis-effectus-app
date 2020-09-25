import React, { memo, useCallback } from 'react';
import { object } from 'prop-types';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';

import { login } from 'actions/userActions';
import strings from 'locale';
import { LOGIN_SCREEN } from 'constants/screens';
import LoginForm from 'screens/LoginScreen/LoginForm';

import styles from './LoginScreen.styles';

const LoginScreen = ({ navigation }) => {
  navigation.setOptions({ title: strings.SIGN_IN.title });

  const dispatch = useDispatch();
  const loginRequest = useCallback(user => dispatch(login(user)), [dispatch]);

  return (
    <View style={styles.container} testID={LOGIN_SCREEN}>
      <LoginForm onSubmit={loginRequest} />
    </View>
  );
};

LoginScreen.propTypes = {
  navigation: object.isRequired,
};

export default memo(LoginScreen);
