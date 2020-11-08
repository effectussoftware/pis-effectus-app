import React from 'react';
import { func, string } from 'prop-types';
import { Image, TouchableOpacity, View } from 'react-native';
import moment from 'moment';

import { EVENT_CALENDAR_YEAR_AND_MONTH, MONTH_FORMAT, YEAR_FORMAT } from 'constants/dateFormats';
import ArrowIcon from 'assets/images/ArrowIcon/default.png';

import { Text } from 'components';

import styles from './CalendarHeader.styles';
import {} from 'react-native-gesture-handler';

const CalendarHeader = ({ yearAndMonth, onGetMonth, onShowMonthPicker }) => {
  const date = moment(yearAndMonth, EVENT_CALENDAR_YEAR_AND_MONTH);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          onGetMonth(date.subtract({ month: 1 }).format(EVENT_CALENDAR_YEAR_AND_MONTH))
        }>
        <Image source={ArrowIcon} style={styles.arrow} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onShowMonthPicker(true)}>
        <View style={styles.center}>
          <Text type="H3">{date.format(YEAR_FORMAT)}</Text>
          <Text type="H2" style={styles.text}>
            {date.format(MONTH_FORMAT)}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => onGetMonth(date.add({ month: 1 }).format(EVENT_CALENDAR_YEAR_AND_MONTH))}>
        <Image source={ArrowIcon} style={[styles.arrow, styles.flip]} />
      </TouchableOpacity>
    </View>
  );
};

CalendarHeader.propTypes = {
  yearAndMonth: string,
  onGetMonth: func.isRequired,
  onShowMonthPicker: func.isRequired,
};

export default CalendarHeader;
