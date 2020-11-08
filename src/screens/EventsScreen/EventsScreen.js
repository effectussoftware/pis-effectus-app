import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, Modal, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useLoading } from '@rootstrap/redux-tools';
import MonthPicker, { ACTION_DATE_SET } from 'react-native-month-year-picker';

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

  const handleYearAndMonthSelectorAction = (actionType, date) => {
    if (actionType === ACTION_DATE_SET)
      setCurrentYearAndMonth(moment(date).format(EVENT_CALENDAR_YEAR_AND_MONTH));

    setShowMonthPicker(false);
  };

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
        keyExtractor={item => item.id.toString()}
        refreshing={loading}
        onRefresh={() => handleGetEventsCalendar(currentYearAndMonth)}
      />
      {showMonthPicker && (
        <Modal transparent>
          <MonthPicker
            onChange={handleYearAndMonthSelectorAction}
            value={moment(currentYearAndMonth).toDate()}
            minimumDate={moment('2020-01').toDate()}
            maximumDate={moment(defaultYearAndMonth)
              .add({ year: 1 })
              .toDate()}
            locale="es"
          />
        </Modal>
      )}
    </View>
  );
};

export default EventsScreen;
