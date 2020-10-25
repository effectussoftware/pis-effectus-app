import React, { useEffect } from 'react';
import { object } from 'prop-types';
import { Image, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useStatus, SUCCESS } from '@rootstrap/redux-tools';

import { getCommunication } from 'actions/communicationActions';
import useAlertError from 'hooks/useAlertError';

import { Loader, Text } from 'components';

import styles from './CommunicationScreen.styles';

const CommunicationScreen = ({
  navigation,
  route: {
    params: { id },
  },
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    navigation.setOptions({ title: null });
  });

  useEffect(() => {
    dispatch(getCommunication(id));
  }, [dispatch, id]);

  const communication = useSelector(({ communication }) => communication.data);

  const { status, error } = useStatus(getCommunication);

  useAlertError(error, getCommunication, navigation.goBack);

  if (status !== SUCCESS) return <Loader />;

  const { title, description, image } = communication;

  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.container}>
      {!!image && <Image source={{ uri: image }} style={styles.image} resizeMode="contain" />}
      <Text type="H1" style={styles.title}>
        {title}
      </Text>
      <Text type="P1">{description}</Text>
    </ScrollView>
  );
};

CommunicationScreen.propTypes = {
  navigation: object.isRequired,
  route: object.isRequired,
};

export default CommunicationScreen;
