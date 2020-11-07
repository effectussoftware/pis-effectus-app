import React from 'react';
import { View, Linking } from 'react-native';
import { string } from 'prop-types';
import moment from 'moment';
import ParsedText from 'react-native-parsed-text';

import { EVENT_DATE_FORMATS, TIME_FORMAT } from 'constants/dateFormats';
import Text from 'components/Text';
import styles from './EventInformation.styles';

const EventInformation = ({ name, address, startTime, endTime, description }) => {
  const newStartDate = moment(startTime);
  const newEndDate = moment(endTime);

  const dateNewStartDate = newStartDate.calendar(EVENT_DATE_FORMATS);
  const dateNewEndDate = newEndDate.calendar(EVENT_DATE_FORMATS);

  const timeNewStartDate = newStartDate.format(TIME_FORMAT);
  const timeNewEndDate = newEndDate.format(TIME_FORMAT);

  const showDate = `${dateNewStartDate} ${timeNewStartDate} -${
    dateNewEndDate !== dateNewStartDate ? ` ${dateNewEndDate}` : ''
  } ${timeNewEndDate}`;

  return (
    <View style={styles.container}>
      <Text type="H2">{name}</Text>
      <Text style={styles.P1}>{showDate}</Text>
      <Text style={styles.P1}>{address}</Text>
      <ParsedText
        style={styles.description}
        parse={[{ type: 'url', style: styles.url, onPress: Linking.openURL }]}
        childrenProps={{ allowFontScaling: false }}>
        {description}
      </ParsedText>
    </View>
  );
};

EventInformation.propTypes = {
  name: string.isRequired,
  address: string.isRequired,
  startTime: string,
  endTime: string,
  description: string.isRequired,
};

export default EventInformation;
