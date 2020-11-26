import React, { useCallback } from 'react';
import { View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import { getFeed, getPriorityFeed } from 'actions/feedActions';
import { MAIN_SCREEN } from 'constants/screens';
import { useNotifications } from 'hooks';

import FeedList from './FeedList';

import styles from './MainScreen.styles';

const MainScreen = () => {
  useNotifications();

  const dispatch = useDispatch();

  const handleRefresh = useCallback(() => {
    dispatch(getPriorityFeed());
    dispatch(getFeed({ shouldReplace: true }));
  }, [dispatch]);

  useFocusEffect(() => {
    handleRefresh();
  }, [handleRefresh]);

  return (
    <View style={styles.container} testID={MAIN_SCREEN}>
      <FeedList handleRefresh={handleRefresh} />
    </View>
  );
};

export default MainScreen;
