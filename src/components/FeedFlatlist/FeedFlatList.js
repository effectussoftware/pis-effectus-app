import React from 'react';
import { FlatList } from 'react-native';
import FeedCard from 'components/FeedCard/index';

import styles from './FeedFlatList.styles';

// Needs to be changed for data fetched from API when its done
const DATA = [
  {
    id: '1',
    type: 'exchange',
    title: 'Titulo exchange',
    description:
      'Esta es la primer card de exchange del feed y bla bla bla y bla bla blay bla bla blay bla bla blay bla bla blay bla bla blay bla bla blay bla bla blay bla bla blay bla bla blay bla bla bla',
  },
  {
    id: '2',
    type: 'oneOnOne',
    title: 'Titulo oneOnOne 1',
    description: 'Esta es la primer card de oneOnOne del feed',
  },
  {
    id: '3',
    type: 'event',
    title: 'After-Office',
    description: 'Evento para ir a tomar algo ',
  },
  {
    id: '4',
    type: 'poll',
    title: 'Titulo poll 2',
    description: 'Esta es la primer card de poll del feed',
  },
  {
    id: '5',
    type: 'poll',
    title: 'Titulo poll 3',
    description: 'Esta es la primer card de poll del feed',
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
