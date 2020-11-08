import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { FlatList, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useLoading } from '@rootstrap/redux-tools';
import { isEmpty } from 'lodash';

import { getEventsCalendar } from 'actions/eventActions';
import { EVENT_CALENDAR_YEAR_AND_MONTH } from 'constants/dateFormats';

import { Text } from 'components';

import styles from './EventsScreen.styles';

import Card from './EventsList/Card';
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

  // const parsedEvents = useMemo(
  //   () =>
  //     !isEmpty(events) ? Object.keys(events).map(key => ({ date: key, data: events[key] })) : [],
  //   [events],
  // );

  const DATA = [
    {
      id: 1,
      name: 'After Halloween',
      timestamp: '31 de Oct, 20:00 - 00:00',
      // start_time: '2021-09-09T00:00:00.000Z',
      // end_time: '2021-09-09T03:00:00.000Z',
      address: 'En la oficina',
      updated_event_at: null,
      cancelled: false,
      attend: false,
      confirmation: false,
      description: 'Los invitamos a festejar halloween en la oficina. Venir disfrazados!',
    },
    {
      id: 2,
      name: 'Internal Talk: React Hooks',
      timestamp: '12 de Oct, 21:00 - 00:00',
      // start_time: '2021-09-09T00:00:00.000Z',
      // end_time: '2021-09-09T03:00:00.000Z',
      address: 'En la oficina',
      updated_event_at: null,

      cancelled: false,
      attend: false,
      confirmation: true,
      description: 'Los invitamos a festejar halloween en la oficina. Venir disfrazados!',
    },
    {
      id: 3,
      name: 'Internal Talk: Docker',
      timestamp: '12 de Oct, 21:00 - 00:00',
      // start_time: '2021-09-09T00:00:00.000Z',
      // end_time: '2021-09-09T03:00:00.000Z',
      address: 'En la oficina',
      updated_event_at: null,

      cancelled: false,
      attend: true,
      confirmation: true,
      description: 'Los invitamos a festejar halloween en la oficina. Venir disfrazados!',
    },
    {
      id: 1,
      name: 'After',
      timestamp: '2 de Jul, 20:00 - 00:00',
      // start_time: '2021-09-09T00:00:00.000Z',
      // end_time: '2021-09-09T03:00:00.000Z',
      address: 'En la oficina',
      updated_event_at: null,

      cancelled: false,
      attend: false,
      confirmation: true,
      description: 'Los invitamos a festejar halloween en la oficina. Venir disfrazados!',
    },
  ];

  return (
    <View style={styles.container}>
      <CalendarHeader yearAndMonth={currentYearAndMonth} onGetMonth={handleGetEventsCalendar} />
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Card {...item} />}
        keyExtractor={item => item.date}
        refreshing={loading}
      />
    </View>
  );
};

export default EventsScreen;
