import React, { useEffect } from 'react';
import { object } from 'prop-types';
import { View, FlatList } from 'react-native';
import Text from 'components/Text';
import OneOnOneInformation from 'components/OneOnOneInformation/oneOnOneInformation';
import moment from 'moment';
import ActionItem from 'components/ActionItem/ActionItem';
import styles from './OneOnOneScreen.styles';

const testOneOnOne = {
  title: '1 on 1 - 2 Años',
  date: moment().format(),
  comments:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla quam eu faci lisis mollis. ',
  effectusActions: [
    {
      id: '1',
      title: 'Item 1',
      confirmed: false,
    },
    {
      id: '2',
      title: 'Item 2',
      confirmed: true,
    },
  ],
  myActions: [
    {
      id: '1',
      title: 'Item 1',
      confirmed: true,
    },
    {
      id: '2',
      title: 'Item 2',
      confirmed: false,
    },
  ],
};

const OneOnOneScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({ title: ' ' });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View>
        <OneOnOneInformation {...testOneOnOne} />
      </View>

      <View style={styles.contentContainer}>
        <Text type="H3">¿A que acciones se compromete Effectus?</Text>
        <FlatList
          data={testOneOnOne.effectusActions}
          renderItem={({ item }) => <ActionItem {...item} />}
          keyExtractor={item => item.id.toString()}
        />
      </View>

      <View style={styles.contentContainer}>
        <Text type="H3">¿A que acciones te comprometes?</Text>
        <FlatList
          data={testOneOnOne.myActions}
          renderItem={({ item }) => <ActionItem {...item} />}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </View>
  );
};

OneOnOneScreen.propTypes = {
  navigation: object.isRequired,
};

export default OneOnOneScreen;
