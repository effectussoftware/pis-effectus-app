import React, { useCallback, useMemo } from 'react';
import { func } from 'prop-types';
import { SectionList, View } from 'react-native';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { LOADING, SUCCESS, useStatus } from '@rootstrap/redux-tools';

import strings from 'locale';
import { getFeed, getPriorityFeed } from 'actions/feedActions';
import useAlertError from 'hooks/useAlertError';

import { Text } from 'components';
import FeedCard from './FeedCard';

import styles from './FeedList.styles';

const FeedList = ({ handleRefresh }) => {
  const dispatch = useDispatch();

  const { status: feedStatus, error: feedError } = useStatus(getFeed);
  const { status: priorityFeedStatus, error: priorityFeedError } = useStatus(getFeed);

  useAlertError(feedError, getPriorityFeed);
  useAlertError(priorityFeedError, getFeed);

  const loading = feedStatus === LOADING || priorityFeedStatus === LOADING;

  const { data, priorityData, endReached } = useSelector(({ feed }) => feed, shallowEqual);

  const handleLoadMore = useCallback(() => {
    !endReached && data.length && dispatch(getFeed({ start: data[data.length - 1].updatedAt }));
  }, [endReached, dispatch, data]);

  const feed = [
    { title: 'Novedades importantes', data: priorityData },
    { title: 'Novedades', data },
  ];

  return (
    <SectionList
      style={styles.flatList}
      sections={feed}
      contentContainerStyle={styles.contentContainer}
      renderItem={({ item }) => <FeedCard item={item} />}
      renderSectionHeader={({ section: { title } }) => <Text style={styles.header}>{title}</Text>}
      keyExtractor={item => `${item.type}-${item.id}`}
      onEndReached={handleLoadMore}
      onEndReachedThreshold={0.5}
      initialNumToRender={10}
      onRefresh={handleRefresh}
      refreshing={loading}
      ListEmptyComponent={
        feedStatus === SUCCESS &&
        priorityFeedStatus === SUCCESS &&
        // eslint-disable-next-line react/no-multi-comp
        (() => (
          <View style={styles.emptyStateContainer}>
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
