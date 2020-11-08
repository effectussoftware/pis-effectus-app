import React from 'react';
import { object } from 'prop-types';

import { View } from 'react-native';

import Text from 'components/Text';

import strings from 'locale';

import styles from './Card.styles';

const EventCard = item => {
  const { id, name, timestamp, address, description, confirmation, attend } = item;

  const ConfirmButton = () => {
    if (confirmation) {
      if (attend) {
        return (
          <Text type="H3" style={styles.confirmed}>
            {strings.EVENTS_SCREEN.attend}
          </Text>
        );
      }
      return (
        <Text type="H3" style={styles.confirmed}>
          {strings.EVENTS_SCREEN.notAttend}
        </Text>
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={[styles.bullet, id % 2 ? styles.odd : styles.even]} />
      <View style={styles.innerCard}>
        <Text type="H3" style={styles.name}>
          {name}
        </Text>
        <Text type="P2" style={styles.eventInfo}>
          {timestamp}
        </Text>
        <Text type="P2" style={styles.eventInfo}>
          {address}
        </Text>
        <Text type="P2_S">{description}</Text>
        {confirmation ? (
          <ConfirmButton />
        ) : (
          <Text type="H3" style={styles.notConfirmed}>
            {strings.EVENTS_SCREEN.notConfirmed}
          </Text>
        )}
      </View>
    </View>
  );
};

EventCard.propTypes = {
  item: object,
};

export default EventCard;
