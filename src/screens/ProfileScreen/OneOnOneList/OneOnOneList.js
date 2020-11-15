import React from 'react';
import { FlatList, View } from 'react-native';
import { func } from 'prop-types';
import { useSelector } from 'react-redux';
import { LOADING, useStatus } from '@rootstrap/redux-tools';

import { getOneOnOnes } from 'actions/oneOnOneActions';
import strings from 'locale';

import { Text } from 'components';
import OneOnOneItem from './OneOnOneItem';

import styles from './OneOnOneList.styles';

const OneOnOneList = ({ handleRefresh }) => {
  const { status } = useStatus(getOneOnOnes);

  const loading = status === LOADING;

  const list = useSelector(({ oneOnOne }) => oneOnOne.list);

  return (
    <FlatList
      style={styles.flatList}
      data={list}
      renderItem={({ item }) => <OneOnOneItem item={item} />}
      keyExtractor={({ id }) => id.toString()}
      contentContainerStyle={styles.contentContainer}
      onRefresh={handleRefresh}
      refreshing={loading}
      ListHeaderComponent={() => (
        <Text type="H2" style={styles.oneOnOneTitle}>
          {strings.ONE_ON_ONE.title}
        </Text>
      )}
      ListEmptyComponent={() => (
        <View style={styles.emptyStateContainer}>
          <Text type="H3">{strings.ONE_ON_ONE.emptyState}</Text>
        </View>
      )}
    />
  );
};

OneOnOneList.propTypes = {
  handleRefresh: func.isRequired,
};

export default OneOnOneList;
