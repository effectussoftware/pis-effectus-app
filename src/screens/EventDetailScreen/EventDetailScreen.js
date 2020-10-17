import React, { useEffect } from 'react';
import { object } from 'prop-types';
import { View } from 'react-native';
import moment from 'moment';

import EventInformation from 'components/EventInformation/EventInformation';
import strings from 'locale';

const testEvento = {
  title: 'Internal Talk : React Hooks',
  adress: 'En la oficina y por zoom',
  startDate: moment().format(),
  endDate: moment()
    .add({ days: 1 })
    .format(),
  description:
    'Los invitamos a participar de la charla que va a dar el compañero Peter acerca de React Hooks.\n\nPara los que se quieran sumar de forma remota.\nLink: https://zoom.com/link',
};

const EventDetailScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({ title: strings.EVENT_DETAIL_SCREEN.title });
  }, [navigation]);

  return (
    <View>
      <EventInformation {...testEvento} />
    </View>
  );
};

EventDetailScreen.propTypes = {
  navigation: object.isRequired,
};

export default EventDetailScreen;
