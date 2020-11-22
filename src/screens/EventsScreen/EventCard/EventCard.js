import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ParsedText from 'react-native-parsed-text';

import { EVENT_DETAIL_SCREEN } from 'constants/screens';
import { eventShape } from 'constants/shapes';
import { formatEventStatus, formatStartAndEndTime, openExternalLink } from 'utils/helpers';

import { Text } from 'components';

import styles from './EventCard.styles';

const EventCard = ({ item }) => {
  const navigation = useNavigation();

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

  const LINES_CUTOFF = 2;
  const [descriptionLines, setDescriptionLines] = useState();
  const [addressLines, setAddressLines] = useState();
  const formattedDate = formatStartAndEndTime(startTime, endTime);

  const { statusText, needsAttention } = formatEventStatus(
    endTime,
    cancelled,
    confirmation,
    attend,
  );

  const setLines = ({ nativeEvent: { lines } }) => {
    !descriptionLines && setDescriptionLines(lines.length);
  };

  const handleSetAddressLines = ({ nativeEvent: { lines } }) => {
    !addressLines && setAddressLines(lines.length);
  };

  const handleOnPress = () => navigation.navigate(EVENT_DETAIL_SCREEN, { id });

  return (
    <TouchableOpacity onPress={handleOnPress}>
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
            <Text
              type="P2"
              style={styles.eventInfo}
              numberOfLines={!addressLines ? undefined : LINES_CUTOFF}
              onTextLayout={handleSetAddressLines}>
              {address}
            </Text>
          )}
          {!!description && (
            <ParsedText
              type="P2_S"
              numberOfLines={!descriptionLines ? undefined : LINES_CUTOFF}
              parse={[{ type: 'url', style: styles.url, onPress: openExternalLink }]}
              onTextLayout={setLines}>
              {description}
            </ParsedText>
          )}
          <Text type="H3" style={[styles.eventStatus, needsAttention && styles.notConfirmed]}>
            {statusText}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

EventCard.propTypes = {
  item: eventShape,
};

export default EventCard;
