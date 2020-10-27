import React, { useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { getOneOnOnes } from 'actions/oneOnOneActions';
import strings from 'locale';

import { Text } from 'components';
import OneOnOneItem from './OneOnOneItem';

import styles from './OneOnOneList.styles';

const OneOnOneList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneOnOnes());
  }, [dispatch]);

  const list = useSelector(({ oneOnOne }) => oneOnOne.data);

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
