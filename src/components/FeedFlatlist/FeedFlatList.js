import React, { useCallback, useEffect } from 'react';
import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useLoading } from '@rootstrap/redux-tools';

import FeedCard from 'components/FeedCard/index';

import { getFeed } from 'actions/feedActions';
import styles from './FeedFlatList.styles';

const FeedFlatList = () => {
  const dispatch = useDispatch();

  const handleRefresh = useCallback(() => {
    dispatch(getFeed({}));
  }, [dispatch]);

  useEffect(() => {
    handleRefresh();
  }, [handleRefresh]);

  const loading = useLoading(getFeed);

  const feed = useSelector(({ feed }) => feed.data);

  const handleLoadMore = useCallback(() => {
    dispatch(getFeed({ start: 1 || feed[feed.length - 1].updatedAt }));
  }, [dispatch, feed]);

  return (
    <FlatList
      style={styles.flatList}
      data={feed}
      renderItem={({ item }) => <FeedCard {...item} />}
      keyExtractor={item => item.id}
      onEndReached={handleLoadMore}
      onEndReachedThreshold={0.5}
      initialNumToRender={10}
      onRefresh={handleRefresh}
      refreshing={loading}
    />
  );
};

export default FeedFlatList;
