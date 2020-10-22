import React, { useEffect } from 'react';
import { object } from 'prop-types';
import { View } from 'react-native';

import strings from 'locale';
import { MAIN_SCREEN } from 'constants/screens';

import FeedList from './FeedList';

import styles from './MainScreen.styles';

const MainScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({ title: strings.MAIN_SCREEN.title });
  }, [navigation]);

  return (
    <View style={styles.container} testID={MAIN_SCREEN}>
      <FeedList />
    </View>
  );
};

MainScreen.propTypes = {
  navigation: object.isRequired,
};

export default MainScreen;
