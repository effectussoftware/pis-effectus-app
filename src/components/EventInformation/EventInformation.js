import React from 'react';
import { View } from 'react-native';
import { string } from 'prop-types';
import moment from 'moment';

import { EVENT_DATE_FORMATS, TIME_FORMAT } from 'constants/dateFormats';
import Text from 'components/Text';
import styles from './EventInformation.styles';

const EventInformation = ({ title, adress, startDate, endDate, description }) => {
  const newStartDate = moment(startDate);
  const newEndDate = moment(endDate);

  const dateNewStartDate = newStartDate.calendar(EVENT_DATE_FORMATS);
  const dateNewEndDate = newEndDate.calendar(EVENT_DATE_FORMATS);

  const timeNewStartDate = newStartDate.format(TIME_FORMAT);
  const timeNewEndDate = newEndDate.format(TIME_FORMAT);

  return (
    <View style={styles.container}>
      <Text type="H2">{title}</Text>
      <Text style={styles.P1}>
        {`${dateNewStartDate} ${timeNewStartDate} -${
          dateNewEndDate !== dateNewStartDate ? ` ${dateNewEndDate}` : ''
        } ${timeNewEndDate}`}
      </Text>
      <Text style={styles.P1}>{adress}</Text>
      <Text type="P1" style={styles.description}>
        {description}
      </Text>
    </View>
  );
};

EventInformation.propTypes = {
  title: string.isRequired,
  adress: string.isRequired,
  startDate: string,
  endDate: string,
  description: string.isRequired,
};

export default EventInformation;
