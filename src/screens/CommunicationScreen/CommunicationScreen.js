import React, { useEffect } from 'react';
import { object } from 'prop-types';
import { Image, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useStatus, SUCCESS } from '@rootstrap/redux-tools';
import moment from 'moment';

import { getCommunication } from 'actions/communicationActions';
import { CALENDAR_FORMATS } from 'constants/dateFormats';
import useAlertError from 'hooks/useAlertError';

import { Loader, Text } from 'components';

import { useSetNavigationOptions } from 'hooks';
import styles from './CommunicationScreen.styles';

const CommunicationScreen = ({
  navigation,
  route: {
    params: { id },
  },
}) => {
  // SET NAVIGATION OPTIONS
  useSetNavigationOptions({ title: null });

  // DATA FETCH
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCommunication(id));
  }, [dispatch, id]);

  const { status, error } = useStatus(getCommunication);
  useAlertError(error, getCommunication, navigation.goBack);

  // DATA READ
  const communication = useSelector(({ communication }) => communication.data);

  // RENDER
  if (status !== SUCCESS) return <Loader />;

  const { title, text, image, updatedAt } = communication;

  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.container}>
      {!!image && <Image source={{ uri: image }} style={styles.image} resizeMode="contain" />}
      <Text type="H1" style={styles.title}>
        {title}
      </Text>
      <Text type="P1" style={styles.updatedAt}>
        {moment(updatedAt).calendar(CALENDAR_FORMATS)}
      </Text>
      <Text type="P1">{text}</Text>
    </ScrollView>
  );
};

CommunicationScreen.propTypes = {
  navigation: object.isRequired,
  route: object.isRequired,
};

export default CommunicationScreen;
