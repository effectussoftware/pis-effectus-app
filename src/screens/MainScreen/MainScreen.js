import React, { useEffect } from 'react';
import { object } from 'prop-types';
import { View } from 'react-native';
import FeedFlatList from 'components/FeedFlatlist';

import { MAIN_SCREEN } from 'constants/screens';

import strings from 'locale';
import styles from './MainScreen.styles';

const MainScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({ title: strings.MAIN_SCREEN.title });
  }, [navigation]);

  return (
    <View style={styles.container} testID={MAIN_SCREEN}>
      <FeedFlatList />
    </View>
  );
};

MainScreen.propTypes = {
  navigation: object.isRequired,
};

export default MainScreen;
