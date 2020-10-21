import React, { useCallback, useEffect } from 'react';
import { Alert, FlatList, View } from 'react-native';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { LOADING, SUCCESS, useStatus } from '@rootstrap/redux-tools';

import strings from 'locale';
import { getFeed } from 'actions/feedActions';

import { Text } from 'components';
import FeedCard from './FeedCard/index';

import styles from './FeedList.styles';

const FeedList = () => {
  const dispatch = useDispatch();

  const handleRefresh = useCallback(() => {
    dispatch(getFeed({ shouldReplace: true }));
  }, [dispatch]);

  useEffect(() => {
    handleRefresh();
  }, [handleRefresh]);

  const { status, error } = useStatus(getFeed);

  useEffect(() => {
    error && Alert.alert(error);
  }, [error]);

  const loading = status === LOADING;

  const { data: feed, endReached } = useSelector(({ feed }) => feed, shallowEqual);

  const handleLoadMore = useCallback(() => {
    !endReached && dispatch(getFeed({ start: feed[feed.length - 1].updatedAt }));
  }, [endReached, dispatch, feed]);

  return (
    <FlatList
      style={styles.flatList}
      data={feed}
      contentContainerStyle={styles.contentContainer}
      renderItem={({ item }) => <FeedCard {...item} />}
      keyExtractor={item => item.id.toString()}
      onEndReached={handleLoadMore}
      onEndReachedThreshold={0.5}
      initialNumToRender={10}
      onRefresh={handleRefresh}
      refreshing={loading}
      ListEmptyComponent={
        status === SUCCESS &&
        // eslint-disable-next-line react/no-multi-comp
        (() => (
          <View style={styles.emptyState}>
            <Text type="H3">{strings.MAIN_SCREEN.emptyState}</Text>
          </View>
        ))
      }
    />
  );
};

export default FeedList;
