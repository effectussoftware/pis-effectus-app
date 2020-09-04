import React, { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { View, Button } from 'react-native';
import { object } from 'prop-types';

import { login } from 'actions/userActions';
import strings from 'locale';
import { SIGN_UP_SCREEN, LOGIN_SCREEN } from 'constants/screens';
import Text, { H1 } from 'components/Text';
import LoginForm from 'screens/LoginScreen/LoginForm';

import styles from './LoginScreen.styles';

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const loginRequest = useCallback(user => dispatch(login(user)), [dispatch]);
  const handleLogin = useCallback(() => navigation.push(SIGN_UP_SCREEN), [navigation]);

  return (
    <View style={styles.container} testID={LOGIN_SCREEN}>
      <Text type={H1} style={styles.welcome}>
        {strings.SIGN_IN.title}
      </Text>
      <LoginForm onSubmit={loginRequest} />
      <Button testID="sign-up-button" title={strings.SIGN_UP.title} onPress={handleLogin} />
    </View>
  );
};

LoginScreen.propTypes = {
  navigation: object.isRequired,
};

LoginScreen.navigationOption = {
  title: strings.SIGN_IN.title,
};

export default memo(LoginScreen);
