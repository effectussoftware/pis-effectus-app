import React from 'react';
import { View } from 'react-native';
import { string } from 'prop-types';
import moment from 'moment';

import Text from 'components/Text';
import { CALENDAR_FORMATS } from 'constants/dateFormats';
import styles from './oneOnOneInformation.styles';

const OneOnOneInformation = ({ title, date, comments }) => {
  const newStartDate = moment(date);
  const dateNewStartDate = newStartDate.calendar(CALENDAR_FORMATS);

  return (
    <View style={styles.container}>
      <Text type="H2">{title}</Text>
      <Text style={styles.P1}>{dateNewStartDate}</Text>
      <Text type="H3" style={styles.comments}>
        Comentarios:
      </Text>
      <Text style={styles.description}>{comments}</Text>
    </View>
  );
};

OneOnOneInformation.propTypes = {
  title: string.isRequired,
  date: string,
  comments: string.isRequired,
};

export default OneOnOneInformation;
