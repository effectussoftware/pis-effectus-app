import React, { useEffect } from 'react';
import { object } from 'prop-types';
import { View } from 'react-native';

import { COMMUNICATION_SCREEN, PROFILE_SCREEN } from 'constants/screens';
import strings from 'locale';
import SignOut from 'components/SignOut';
import { Button } from 'components';
import styles from './ProfileScreen.styles';

const ProfileScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({ title: strings.PROFILE_SCREEN.title });
  }, [navigation]);

  return (
    <View style={styles.container} testID={PROFILE_SCREEN}>
      <SignOut />
      <Button title="comm" onPress={() => navigation.navigate(COMMUNICATION_SCREEN)} />
    </View>
  );
};

ProfileScreen.propTypes = {
  navigation: object.isRequired,
};

export default ProfileScreen;
