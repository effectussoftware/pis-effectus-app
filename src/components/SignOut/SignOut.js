import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import testIds from 'constants/testIds';
import { logout } from 'actions/userActions';
import strings from 'locale';

import Button from 'components/Button';

import styles from './SignOut.styles';

const SignOut = () => {
  const dispatch = useDispatch();
  const logoutRequest = useCallback(() => dispatch(logout()), [dispatch]);

  return (
    <Button
      testID={testIds.PROFILE_SCREEN.logoutButton}
      onPress={logoutRequest}
      title={strings.SIGN_OUT.logout}
      textStyle={styles.text}
      secondary
    />
  );
};

export default SignOut;
