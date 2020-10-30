import React, { useEffect } from 'react';
import { object } from 'prop-types';
import { View, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useStatus, SUCCESS } from '@rootstrap/redux-tools';

import { getOneOnOne } from 'actions/oneOnOneActions';
import { Loader, Text } from 'components';
import OneOnOneInformation from 'components/OneOnOneInformation/oneOnOneInformation';

import ActionItem from 'components/ActionItem/ActionItem';
import useAlertError from 'hooks/useAlertError';
import styles from './OneOnOneScreen.styles';

const OneOnOneScreen = ({
  navigation,
  route: {
    params: { idOneOnOne },
  },
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    navigation.setOptions({ title: null });
  });

  useEffect(() => {
    dispatch(getOneOnOne(idOneOnOne));
  }, [dispatch, idOneOnOne]);

  const oneOnOne = useSelector(({ oneOnOne }) => oneOnOne.data);
  const { status, error } = useStatus(getOneOnOne);

  useAlertError(error, getOneOnOne, navigation.goBack);

  if (status !== SUCCESS) return <Loader />;

  const { title, comments, createdAt, reviewerActionItems, userActionItems } = oneOnOne;

  return (
    <View style={styles.container}>
      <View>
        <OneOnOneInformation title={title} date={createdAt} comments={comments} />
      </View>

      <View style={styles.contentContainer}>
        <Text type="H3">¿A que acciones se compromete Effectus?</Text>
        <FlatList
          data={reviewerActionItems}
          renderItem={({ item, index }) => <ActionItem id={index} {...item} />}
          keyExtractor={(item, index) => `key ${index}`}
        />
      </View>

      <View style={styles.contentContainer}>
        <Text type="H3">¿A que acciones te comprometes?</Text>
        <FlatList
          data={userActionItems}
          renderItem={({ item, index }) => <ActionItem id={index} {...item} />}
          keyExtractor={(item, index) => `key ${index}`}
        />
      </View>
    </View>
  );
};

OneOnOneScreen.propTypes = {
  navigation: object.isRequired,
  route: object.isRequired,
};

export default OneOnOneScreen;
