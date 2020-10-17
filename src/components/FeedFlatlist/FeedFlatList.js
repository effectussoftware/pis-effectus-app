import React from 'react';
import { FlatList } from 'react-native';
import FeedCard from 'components/FeedCard/index';
import moment from 'moment';

import styles from './FeedFlatList.styles';

// Needs to be changed for data fetched from API when its done
// TODO: parse dates correctly once we have real data
const DATA = [
  {
    id: '1',
    type: 'exchange',
    title: 'Titulo exchange',
    description:
      'Esta es la primer card de exchange del feed y bla bla bla y bla bla blay bla bla blay bla bla blay bla bla blay bla bla blay bla bla blay bla bla blay bla bla blay bla bla blay bla bla bla',
    time: moment(),
  },
  {
    id: '2',
    type: 'oneOnOne',
    title: 'Titulo oneOnOne 1',
    description: 'Esta es la primer card de oneOnOne del feed',
    time: moment().subtract({ days: 1 }),
  },
  {
    id: '3',
    type: 'event',
    title: 'Titulo evento',
    adress: 'Calle falsa 1 2 3',
    description: 'Esta es la primer card de evento del feed',
    startTime: moment()
      .add({ hours: 2 })
      .format(),
    endTime: moment()
      .add({ hours: 3 })
      .format(),
    time: moment().subtract({ days: 3 }),
  },
  {
    id: '4',
    type: 'poll',
    title: 'Titulo poll 2',
    description: 'Esta es la primer card de poll del feed',
    time: moment().subtract({ days: 10 }),
  },
  {
    id: '5',
    type: 'poll',
    title: 'Titulo poll 3',
    description: 'Esta es la primer card de poll del feed',
    time: moment().subtract({ years: 1 }),
  },
];

const FeedFlatList = () => {
  return (
    <FlatList
      style={styles.flatList}
      data={DATA}
      renderItem={({ item }) => <FeedCard {...item} />}
      keyExtractor={item => item.id}
    />
  );
};

export default FeedFlatList;
