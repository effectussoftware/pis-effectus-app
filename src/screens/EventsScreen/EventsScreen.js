import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { FlatList, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useLoading } from '@rootstrap/redux-tools';
import { isEmpty } from 'lodash';

import { getEventsCalendar } from 'actions/eventActions';
import { EVENT_CALENDAR_YEAR_AND_MONTH } from 'constants/dateFormats';

import { Text } from 'components';

import CalendarHeader from './CalendarHeader';

const EventsScreen = () => {
  const dispatch = useDispatch();

  const defaultYearAndMonth = moment().format(EVENT_CALENDAR_YEAR_AND_MONTH);

  const [currentYearAndMonth, setCurrentYearAndMonth] = useState(defaultYearAndMonth);

  const handleGetEventsCalendar = useCallback(
    yearAndMonth => {
      dispatch(getEventsCalendar(`${yearAndMonth}-01`));
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

  const parsedEvents = useMemo(
    () =>
      !isEmpty(events) ? Object.keys(events).map(key => ({ date: key, data: events[key] })) : [],
    [events],
  );

  return (
    <View>
      <CalendarHeader yearAndMonth={currentYearAndMonth} onGetMonth={handleGetEventsCalendar} />
      <FlatList
        data={parsedEvents}
        renderItem={({ item: { date } }) => (
          <View>
            <Text>{date}</Text>
          </View>
        )}
        keyExtractor={item => item.date}
        refreshing={loading}
      />
    </View>
  );
};

export default EventsScreen;
