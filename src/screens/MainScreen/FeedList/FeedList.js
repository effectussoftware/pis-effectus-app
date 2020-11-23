import React, { useCallback } from 'react';
import { func } from 'prop-types';
import { SectionList, View } from 'react-native';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { LOADING, SUCCESS, useStatus } from '@rootstrap/redux-tools';
import { isEmpty } from 'lodash';

import strings from 'locale';
import { getFeed, getPriorityFeed } from 'actions/feedActions';
import useAlertError from 'hooks/useAlertError';

import { Text } from 'components';
import FeedCard from './FeedCard';
import FeedSectionHeader from './FeedSectionHeader';

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
    { title: strings.MAIN_SCREEN.priorityTitle, data: priorityData },
    { title: strings.MAIN_SCREEN.title, data },
  ];

  return (
    <SectionList
      style={styles.flatList}
      sections={feed}
      contentContainerStyle={styles.contentContainer}
      renderItem={({ item }) => <FeedCard item={item} />}
      renderSectionHeader={isEmpty(priorityData) ? undefined : FeedSectionHeader}
      keyExtractor={item => `${item.type}-${item.id}`}
      onEndReached={handleLoadMore}
      onEndReachedThreshold={0.5}
      initialNumToRender={10}
      onRefresh={handleRefresh}
      refreshing={loading}
      stickySectionHeadersEnabled={false}
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
