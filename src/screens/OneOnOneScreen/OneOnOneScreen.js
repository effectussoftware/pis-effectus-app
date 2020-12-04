import React, { useEffect } from 'react';
import { object } from 'prop-types';
import { View, ScrollView } from 'react-native';

import strings from 'locale';

import { Text, Loader } from 'components';
import { isEmpty } from 'lodash';
import ActionItem from './ActionItem';
import OneOnOneInformation from './OneOnOneInformation';

import useGetOneOnOne from './OneOnOneScreen.hooks';
import styles from './OneOnOneScreen.styles';

const OneOnOneScreen = ({
  navigation,
  route: {
    params: { id },
  },
}) => {
  useEffect(() => {
    navigation.setOptions({ title: null });
  }, [navigation]);

  const { oneOnOne, loading } = useGetOneOnOne(id);
  const { title, comments, createdAt, reviewerActionItems, userActionItems } = oneOnOne || {};
  if (loading) return <Loader />;

  return (
    <ScrollView style={styles.container}>
      <View>
        <OneOnOneInformation title={title} date={createdAt} comments={comments} />
      </View>

      <View style={styles.contentContainer}>
        <Text type="H3">{strings.ONE_ON_ONE.reviewerActionTitle}</Text>
        {reviewerActionItems.map((element, index) => (
          <ActionItem key={index} isOdd={index % 2 === 0} {...element} />
        ))}
        {isEmpty(reviewerActionItems) && (
          <Text type="P1" style={styles.emptyActionables}>
            {strings.ONE_ON_ONE.noActionables}
          </Text>
        )}
      </View>

      <View style={styles.contentContainer}>
        <Text type="H3">{strings.ONE_ON_ONE.userActionTitle}</Text>
        {userActionItems.map((element, index) => {
          return <ActionItem key={index} isOdd={index % 2 === 0} {...element} />;
        })}
        {isEmpty(userActionItems) && (
          <Text type="P1" style={styles.emptyActionables}>
            {strings.ONE_ON_ONE.noActionables}
          </Text>
        )}
      </View>
    </ScrollView>
  );
};

OneOnOneScreen.propTypes = {
  navigation: object.isRequired,
  route: object.isRequired,
};

export default OneOnOneScreen;
