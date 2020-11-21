import React from 'react';
import { View } from 'react-native';
import { string } from 'prop-types';
import moment from 'moment';

import strings from 'locale';
import { CALENDAR_FORMATS } from 'constants/dateFormats';

import { Text } from 'components';

import styles from './OneOnOneInformation.styles';

const OneOnOneInformation = ({ title, date, comments }) => {
  const newStartDate = moment(date);
  const dateNewStartDate = newStartDate.calendar(CALENDAR_FORMATS);

  return (
    <View style={styles.container}>
      <Text type="H2">{title}</Text>
      <Text style={styles.P1}>{dateNewStartDate}</Text>
      <Text type="H3" style={styles.comments}>
        {strings.ONE_ON_ONE.comments}
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
