import React, { useEffect } from 'react';
import { object } from 'prop-types';
import { View, ScrollView } from 'react-native';
import useGetOneOnOne from 'hooks/useGetOneOnOne';

import { Text, Loader } from 'components';
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
  useEffect(() => {
    navigation.setOptions({ title: null });
  }, [navigation]);

  const { oneOnOne, loading } = useGetOneOnOne(idOneOnOne);
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
      </View>

      <View style={styles.contentContainer}>
        <Text type="H3">{strings.ONE_ON_ONE.userActionTitle}</Text>
        {userActionItems.map((element, index) => {
          return <ActionItem key={index} isOdd={index % 2 === 0} {...element} />;
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
