import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, Modal, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useLoading } from '@rootstrap/redux-tools';
import MonthPicker from 'react-native-month-year-picker';

import { getEventsCalendar } from 'actions/eventActions';
import { EVENT_CALENDAR_YEAR_AND_MONTH } from 'constants/dateFormats';

import styles from './EventsScreen.styles';

import Card from './EventsList/Card';
import CalendarHeader from './CalendarHeader';

const EventsScreen = () => {
  const dispatch = useDispatch();

  const defaultYearAndMonth = moment().format(EVENT_CALENDAR_YEAR_AND_MONTH);

  const [currentYearAndMonth, setCurrentYearAndMonth] = useState(defaultYearAndMonth);
  const [showMonthPicker, setShowMonthPicker] = useState(false);

  const handleGetEventsCalendar = useCallback(
    yearAndMonth => {
      dispatch(getEventsCalendar(yearAndMonth));
      setCurrentYearAndMonth(yearAndMonth);
    },
    [dispatch],
  );

  useEffect(() => handleGetEventsCalendar(currentYearAndMonth), [
    currentYearAndMonth,
    handleGetEventsCalendar,
  ]);

  const loading = useLoading(getEventsCalendar);

  const events = useSelector(({ event }) => event.months[currentYearAndMonth]);

  return (
    <View style={styles.container}>
      <CalendarHeader
        yearAndMonth={currentYearAndMonth}
        onGetMonth={handleGetEventsCalendar}
        onShowMonthPicker={setShowMonthPicker}
      />
      <FlatList
        data={events}
        renderItem={({ item }) => <Card item={item} />}
        keyExtractor={item => item.date}
        refreshing={loading}
      />
      {showMonthPicker && (
        <Modal transparent>
          <MonthPicker
            onChange={(_, date) => {
              console.log('monthPicker: ', date);
              setCurrentYearAndMonth(moment(date).format(EVENT_CALENDAR_YEAR_AND_MONTH));
              setShowMonthPicker(false);
            }}
            value={new Date()}
            minimumDate={new Date(2020, 1)}
            maximumDate={new Date(2025, 5)}
            locale="es"
          />
        </Modal>
      )}
    </View>
  );
};

export default EventsScreen;
