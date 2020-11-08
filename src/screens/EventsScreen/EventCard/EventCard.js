import React from 'react';
import { View } from 'react-native';

import { eventShape } from 'constants/shapes';
import { formatEventStatus, formatStartAndEndTime } from 'utils/helpers';

import Text from 'components/Text';

import styles from './EventCard.styles';

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

  const formattedDate = formatStartAndEndTime(startTime, endTime);
  const { statusText, needsAttention } = formatEventStatus(
    endTime,
    cancelled,
    confirmation,
    attend,
  );

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
        <Text type="H3" style={[styles.eventStatus, needsAttention && styles.notConfirmed]}>
          {statusText}
        </Text>
      </View>
    </View>
  );
};

EventCard.propTypes = {
  item: eventShape,
};

export default EventCard;