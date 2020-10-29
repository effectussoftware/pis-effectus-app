import React from 'react';
import { View } from 'react-native';

import { MAIN_SCREEN } from 'constants/screens';

import FeedList from './FeedList';

import styles from './MainScreen.styles';

const MainScreen = () => {
  return (
    <View style={styles.container} testID={MAIN_SCREEN}>
      <FeedList />
    </View>
  );
};

export default MainScreen;
