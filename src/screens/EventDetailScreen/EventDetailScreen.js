import React, { useEffect } from 'react';
import { object } from 'prop-types';
import { View, ScrollView } from 'react-native';

import useGetEvent from 'hooks/useGetEvent';
import { Text, Loader } from 'components';
import InviteeItem from 'components/InviteeItem/InviteeItem';
import EventInformation from 'components/EventInformation/EventInformation';
import strings from 'locale';

import styles from './EventDetailScreen.styles';

const EventDetailScreen = ({
  navigation,
  route: {
    params: { id },
  },
}) => {
  useEffect(() => {
    navigation.setOptions({ title: null });
  }, [navigation]);

  const { event, loading } = useGetEvent(id);
  // const { name, address, startTime, endTime, updatedEventAt, cancelled, users } = event || {};

  if (loading) return <Loader />;

  return (
    <ScrollView style={styles.container}>
      <EventInformation {...event.event} />

      <View style={styles.contentContainer}>
        <Text type="H3">{strings.EVENT_DETAIL_SCREEN.participantsListTitle}</Text>
        {event.users.map((element, index) => (
          <InviteeItem key={index} isOdd={index % 2 === 0} {...element} />
        ))}
      </View>
    </ScrollView>
  );
};

EventDetailScreen.propTypes = {
  navigation: object.isRequired,
  route: object.isRequired,
};

export default EventDetailScreen;
