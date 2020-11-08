import React, { useCallback } from 'react';
import { func } from 'prop-types';
import { FlatList, View } from 'react-native';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { LOADING, SUCCESS, useStatus } from '@rootstrap/redux-tools';

import strings from 'locale';
import { getFeed } from 'actions/feedActions';
import useAlertError from 'hooks/useAlertError';

import { Text } from 'components';
import FeedCard from './FeedCard';

import styles from './FeedList.styles';

const FeedList = ({ handleRefresh }) => {
  const dispatch = useDispatch();

  const { status, error } = useStatus(getFeed);

  useAlertError(error, getFeed);

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
      keyExtractor={item => `${item.type}-${item.id}`}
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

FeedList.propTypes = {
  handleRefresh: func.isRequired,
};

export default FeedList;
