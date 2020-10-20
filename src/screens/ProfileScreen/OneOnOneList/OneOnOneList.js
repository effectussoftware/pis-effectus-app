import React from 'react';
import { FlatList, View } from 'react-native';

import strings from 'locale';

import { Text } from 'components';
import OneOnOneItem from './OneOnOneItem';

import styles from './OneOnOneList.styles';

const OneOnOneList = () => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  return (
    <FlatList
      style={styles.flatList}
      data={list}
      renderItem={({ item }) => <OneOnOneItem {...item} />}
      keyExtractor={item => item.toString()}
      contentContainerStyle={[styles.contentContainer]}
      ListHeaderComponent={() => (
        <Text type="H2" style={styles.oneOnOneTitle}>
          {strings.ONE_ON_ONE.title}
        </Text>
      )}
      ListEmptyComponent={() => (
        <View style={styles.emptyState}>
          <Text type="H3">{strings.ONE_ON_ONE.emptyState}</Text>
        </View>
      )}
    />
  );
};

export default OneOnOneList;
