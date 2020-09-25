import React from 'react';
import { object } from 'prop-types';
import { View } from 'react-native';

import { PROFILE_SCREEN } from 'constants/screens';
import strings from 'locale';
import SignOut from 'components/SignOut';
import styles from './ProfileScreen.styles';

const ProfileScreen = ({ navigation }) => {
  navigation.setOptions({ title: strings.PROFILE_SCREEN.title });

  return (
    <View style={styles.container} testID={PROFILE_SCREEN}>
      <SignOut />
    </View>
  );
};

ProfileScreen.propTypes = {
  navigation: object.isRequired,
};

export default ProfileScreen;
