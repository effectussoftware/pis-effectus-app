import React, { useCallback } from 'react';
import { View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import { useSession } from 'hooks';
import { PROFILE_SCREEN } from 'constants/screens';

import { getOneOnOnes } from 'actions/oneOnOneActions';
import { Text } from 'components';
import OneOnOneList from './OneOnOneList';

import styles from './ProfileScreen.styles';

const ProfileScreen = () => {
  const {
    user: { name },
  } = useSession();

  const dispatch = useDispatch();

  const handleRefresh = useCallback(() => {
    dispatch(getOneOnOnes());
  }, [dispatch]);

  useFocusEffect(handleRefresh, [handleRefresh]);

  return (
    <View style={styles.container} testID={PROFILE_SCREEN}>
      <View style={styles.userInfoContainer}>
        <Text type="H1" style={styles.userInfoText}>
          {name}
        </Text>
      </View>
      <OneOnOneList handleRefresh={handleRefresh} />
    </View>
  );
};

export default ProfileScreen;
