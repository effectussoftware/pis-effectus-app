import React from 'react';
import { object } from 'prop-types';
import { View } from 'react-native';

import { useFormatStartAndEndTime } from 'utils/helpers';
import strings from 'locale';

import Text from 'components/Text';

import styles from './Card.styles';

const EventCard = ({ item }) => {
  const {
    id,
    name,
    startTime,
    endTime,
    address,
    description,
    confirmation,
    attend,
    cancelled,
  } = item;

  const formattedDate = useFormatStartAndEndTime(startTime, endTime);

  let eventStatus = strings.EVENTS_SCREEN.eventStatus.notConfirmed;

  if (cancelled) {
    eventStatus = strings.EVENTS_SCREEN.eventStatus.cancelled;
  } else if (confirmation) {
    eventStatus = attend
      ? strings.EVENTS_SCREEN.eventStatus.attend
      : strings.EVENTS_SCREEN.eventStatus.notAttend;
  }

  return (
    <View style={styles.container}>
      <View style={[styles.bullet, id % 2 ? styles.odd : styles.even]} />
      <View style={styles.innerCard}>
        <Text type="H3" style={styles.name}>
          {name}
        </Text>
        <Text type="P2" style={styles.eventInfo}>
          {formattedDate}
        </Text>
        {!!address && (
          <Text type="P2" style={styles.eventInfo}>
            {address}
          </Text>
        )}
        {!!description && <Text type="P2_S">{description}</Text>}
        <Text type="H3" style={[styles.eventStatus, !confirmation && styles.notConfirmed]}>
          {eventStatus}
        </Text>
      </View>
    </View>
  );
};

EventCard.propTypes = {
  item: object,
};

export default EventCard;
