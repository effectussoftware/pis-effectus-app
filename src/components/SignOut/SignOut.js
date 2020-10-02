import React, { useCallback } from 'react';
import { View, Button } from 'react-native';
import { useDispatch } from 'react-redux';

import testIds from 'constants/testIds';
import { logout } from 'actions/userActions';
import strings from 'locale';

import styles from './SignOut.styles';

const SignOut = () => {
  const dispatch = useDispatch();
  const logoutRequest = useCallback(() => dispatch(logout()), [dispatch]);

  return (
    <View style={styles.container}>
      <Button
        testID={testIds.PROFILE_SCREEN.logoutButton}
        onPress={logoutRequest}
        title={strings.SIGN_OUT.logout}
      />
    </View>
  );
};

export default SignOut;
