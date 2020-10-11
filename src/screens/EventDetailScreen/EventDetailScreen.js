import React, { useEffect } from 'react';
import { object } from 'prop-types';
import { View } from 'react-native';

import EventInformation from 'components/EventInformation/EventInformation';
import strings from 'locale';
import styles from './EventDetailScreen.styles';

const EventDetailScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({ title: strings.EVENT_DETAIL_SCREEN.title });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <EventInformation />
    </View>
  );
};

EventDetailScreen.propTypes = {
  navigation: object.isRequired,
};

export default EventDetailScreen;
