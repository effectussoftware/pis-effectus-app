import React from 'react';
import { View } from 'react-native';
import ParsedText from 'react-native-parsed-text';

import { formatStartAndEndTime, openExternalLink } from 'utils/helpers';
import { eventShape } from 'constants/shapes';

import { Text } from 'components';
import styles from './EventInformation.styles';

const EventInformation = ({ event: { name, address, startTime, endTime, description } }) => {
  const formattedDate = formatStartAndEndTime(startTime, endTime);
  return (
    <View style={styles.container}>
      <Text type="H2">{name}</Text>
      <Text style={styles.P1}>{formattedDate}</Text>
      <Text style={styles.P1}>{address}</Text>
      {!!description && (
        <ParsedText
          style={styles.description}
          parse={[{ type: 'url', style: styles.url, onPress: openExternalLink }]}
          childrenProps={{ allowFontScaling: false }}>
          {description}
        </ParsedText>
      )}
    </View>
  );
};

EventInformation.propTypes = {
  event: eventShape,
};

export default EventInformation;
