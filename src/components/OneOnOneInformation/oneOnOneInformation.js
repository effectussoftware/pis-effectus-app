import React from 'react';
import { View } from 'react-native';
import { string } from 'prop-types';
import moment from 'moment';
import Text from 'components/Text';
import { EVENT_DATE_FORMATS, TIME_FORMAT } from '../../constants/dateFormats';
import styles from './oneOnOneInformation.styles';

const EventInformation = ({ title, date, comments }) => {
  const newStartDate = moment(date);
  const dateNewStartDate = newStartDate.calendar(EVENT_DATE_FORMATS);
  const timeNewStartDate = newStartDate.format(TIME_FORMAT);

  return (
    <View style={styles.container}>
      <Text type="H2">{title}</Text>
      <Text style={styles.P1}>{`${dateNewStartDate} ${timeNewStartDate}`}</Text>
      <Text type="H3">Comentarios:</Text>
      <Text style={styles.description}>{comments}</Text>
    </View>
  );
};

EventInformation.propTypes = {
  title: string.isRequired,
  date: string,
  comments: string.isRequired,
};

export default EventInformation;
