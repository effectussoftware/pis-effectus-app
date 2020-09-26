import React, { useCallback } from 'react';
import { View, Button } from 'react-native';
import { useDispatch } from 'react-redux';

import { logout } from 'actions/userActions';
import strings from 'locale';
import styles from './SignOut.styles';

const SignOut = () => {
  const dispatch = useDispatch();
  const logoutRequest = useCallback(() => dispatch(logout()), [dispatch]);

  return (
    <View style={styles.container}>
      <Button testID="logout-button" onPress={logoutRequest} title={strings.SIGN_OUT.logout} />
    </View>
  );
};

export default SignOut;
