import React, { useEffect } from 'react';
import { object } from 'prop-types';
import { View, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useStatus, SUCCESS } from '@rootstrap/redux-tools';

import { getOneOnOne } from 'actions/oneOnOneActions';
import useAlertError from 'hooks/useAlertError';

import { Loader, Text } from 'components';
import OneOnOneInformation from 'components/OneOnOneInformation/oneOnOneInformation';
import ActionItem from 'components/ActionItem/ActionItem';
import strings from 'locale';

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
  }, [navigation]);

  useEffect(() => {
    dispatch(getOneOnOne(idOneOnOne));
  }, [dispatch, idOneOnOne]);

  const oneOnOne = useSelector(({ oneOnOne }) => oneOnOne.item);
  const { status, error } = useStatus(getOneOnOne);

  useAlertError(error, getOneOnOne, navigation.goBack);

  if (status !== SUCCESS) return <Loader />;

  const { title, comments, createdAt, reviewerActionItems, userActionItems } = oneOnOne;

  return (
    <ScrollView style={styles.container}>
      <View>
        <OneOnOneInformation title={title} date={createdAt} comments={comments} />
      </View>

      <View style={styles.contentContainer}>
        <Text type="H3">{strings.ONE_ON_ONE.reviewerActionTitle}</Text>
        {reviewerActionItems.map((element, index) => (
          <ActionItem key={index} id={index} {...element} />
        ))}
      </View>

      <View style={styles.contentContainer}>
        <Text type="H3">{strings.ONE_ON_ONE.userActionTitle}</Text>
        {userActionItems.map((element, index) => {
          return <ActionItem key={index} id={index} {...element} />;
        })}
      </View>
    </ScrollView>
  );
};

OneOnOneScreen.propTypes = {
  navigation: object.isRequired,
  route: object.isRequired,
};

export default OneOnOneScreen;
