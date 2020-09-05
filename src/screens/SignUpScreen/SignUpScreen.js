import React, { memo, useCallback } from 'react';
import { View, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { object } from 'prop-types';

import strings from 'locale';
import { signUp } from 'actions/userActions';
import { SIGN_UP_SCREEN } from 'constants/screens';
import Text from 'components/Text';
import SignUpForm from 'screens/SignUpScreen/SignUpForm';
import styles from './SignUpScreen.styles';

const SignUpScreen = memo(({ navigation }) => {
  const dispatch = useDispatch();
  const signUpRequest = useCallback(user => dispatch(signUp(user)), [dispatch]);

  return (
    <View style={styles.container} testID={SIGN_UP_SCREEN}>
      <Text style={styles.welcome}>{strings.SIGN_UP.title}</Text>
      <SignUpForm onSubmit={signUpRequest} />
      <Button title={strings.SIGN_IN.title} onPress={() => navigation.goBack()} />
    </View>
  );
});

SignUpScreen.propTypes = {
  navigation: object.isRequired,
};

SignUpScreen.navigationOptions = {
  title: strings.SIGN_UP.title,
};

export default SignUpScreen;
