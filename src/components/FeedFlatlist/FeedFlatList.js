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
    description: 'Esta es la primer card de exchange del feed',
  },
  {
    id: '2',
    type: 'oneOnOne',
    title: 'Titulo oneOnOne 1',
    description: 'Esta es la primer card de oneOnOne del feed',
  },
  {
    id: '3',
    type: 'poll',
    title: 'Titulo poll',
    description: 'Esta es la primer card de poll del feed',
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
      renderItem={({ item }) => (
        <FeedCard type={item.type} title={item.title} description={item.description} />
      )}
      keyExtractor={item => item.id}
    />
  );
};

export default FeedFlatList;