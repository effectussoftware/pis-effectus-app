import React from 'react';
import { View } from 'react-native';

import { useSession } from 'hooks';
import { PROFILE_SCREEN } from 'constants/screens';

import { Text } from 'components';
import OneOnOneList from './OneOnOneList';

import styles from './ProfileScreen.styles';

const ProfileScreen = () => {
  const {
    user: { name },
  } = useSession();

  return (
    <View style={styles.container} testID={PROFILE_SCREEN}>
      <View style={styles.userInfoContainer}>
        <Text type="H1" style={styles.userInfoText}>
          {name}
        </Text>
      </View>
      <OneOnOneList />
    </View>
  );
};

export default ProfileScreen;
