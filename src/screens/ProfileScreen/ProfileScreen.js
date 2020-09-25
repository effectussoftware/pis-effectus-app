import React, { useCallback } from 'react';
import { object } from 'prop-types';
import { View, Button } from 'react-native';
import { useDispatch } from 'react-redux';

import { logout } from 'actions/userActions';
import { PROFILE_SCREEN } from 'constants/screens';
import strings from 'locale';
import styles from './ProfileScreen.styles';

const ProfileScreen = ({ navigation }) => {
  navigation.setOptions({ title: strings.PROFILE_SCREEN.title });

  const dispatch = useDispatch();
  const logoutRequest = useCallback(() => dispatch(logout()), [dispatch]);

  return (
    <View style={styles.container} testID={PROFILE_SCREEN}>
      <Button
        testID="logout-button"
        onPress={logoutRequest}
        title={strings.PROFILE_SCREEN.logout}
      />
    </View>
  );
};

ProfileScreen.propTypes = {
  navigation: object.isRequired,
};

export default ProfileScreen;
