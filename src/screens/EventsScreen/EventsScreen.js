import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { FlatList, Modal, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useStatus, LOADING, SUCCESS } from '@rootstrap/redux-tools';
import MonthPicker, { ACTION_DATE_SET } from 'react-native-month-year-picker';

import { getEventsCalendar } from 'actions/eventActions';
import { EVENT_CALENDAR_YEAR_AND_MONTH } from 'constants/dateFormats';
import { useAlertError } from 'hooks';
import strings from 'locale';

import { Text } from 'components';

import EventCard from './EventCard';
import CalendarHeader from './CalendarHeader';
import styles from './EventsScreen.styles';

const MINIMUM_YEAR_AND_MONTH = '2020-01';

const EventsScreen = () => {
  const dispatch = useDispatch();

  const defaultYearAndMonth = useMemo(() => moment().format(EVENT_CALENDAR_YEAR_AND_MONTH), []);

  const [currentYearAndMonth, setCurrentYearAndMonth] = useState(defaultYearAndMonth);
  const [showMonthPicker, setShowMonthPicker] = useState(false);
  const [initialScroll, setInitialScroll] = useState();

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

  const { status, error } = useStatus(getEventsCalendar);

  const loading = status === LOADING;

  useAlertError(error, getEventsCalendar);

  const events = useSelector(({ event }) => event.months[currentYearAndMonth]);

  useEffect(() => {
    if (events && defaultYearAndMonth === currentYearAndMonth) {
      const closestIndex = events.findIndex(
        ({ startTime }) => !moment(startTime).isBefore(moment()),
      );
      setInitialScroll(closestIndex);
    }
  }, [events, defaultYearAndMonth, currentYearAndMonth]);

  const handleYearAndMonthSelectorAction = (actionType, date) => {
    if (actionType === ACTION_DATE_SET)
      setCurrentYearAndMonth(moment(date).format(EVENT_CALENDAR_YEAR_AND_MONTH));

    setShowMonthPicker(false);
  };

  const getItemLayout = (data, index) => ({ length: 150, offset: 150 * index, index });

  return (
    <View style={styles.container}>
      <CalendarHeader
        yearAndMonth={currentYearAndMonth}
        onGetMonth={handleGetEventsCalendar}
        onShowMonthPicker={setShowMonthPicker}
      />
      <FlatList
        data={events}
        contentContainerStyle={styles.contentContainer}
        renderItem={({ item }) => <EventCard item={item} />}
        keyExtractor={item => item.id.toString()}
        refreshing={loading}
        onRefresh={() => handleGetEventsCalendar(currentYearAndMonth)}
        initialScrollIndex={initialScroll}
        getItemLayout={getItemLayout}
        onScrollToIndexFailed={() => {}}
        ListEmptyComponent={
          status === SUCCESS &&
          // eslint-disable-next-line react/no-multi-comp
          (() => (
            <View style={styles.emptyStateContainer}>
              <Text type="H3">{strings.EVENTS_SCREEN.emptyState}</Text>
            </View>
          ))
        }
      />
      {showMonthPicker && (
        <Modal transparent>
          <MonthPicker
            onChange={handleYearAndMonthSelectorAction}
            value={moment(currentYearAndMonth).toDate()}
            minimumDate={moment(MINIMUM_YEAR_AND_MONTH).toDate()}
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
