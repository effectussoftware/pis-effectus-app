import React from 'react';
import { View } from 'react-native';

import { MAIN_SCREEN } from 'constants/screens';
import useNotifications from 'hooks/useNotifications';

import FeedList from './FeedList';

import styles from './MainScreen.styles';

const MainScreen = () => {
  useNotifications();
  return (
    <View style={styles.container} testID={MAIN_SCREEN}>
      <FeedList />
    </View>
  );
};

export default MainScreen;
