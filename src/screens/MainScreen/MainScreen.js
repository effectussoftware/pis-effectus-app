import React, { useEffect, useRef } from 'react';
import { object } from 'prop-types';
import { View } from 'react-native';
import FeedFlatList from 'components/FeedFlatlist';
import BottomSheet from 'components/BottomSheet';

import Button from 'components/Button';
import ModalCard from 'components/ModalCard';
import { MAIN_SCREEN } from 'constants/screens';

import strings from 'locale';
import styles from './MainScreen.styles';

const MainScreen = ({ navigation }) => {
  const refRBSheet = useRef();

  useEffect(() => {
    navigation.setOptions({ title: strings.MAIN_SCREEN.title });
  }, [navigation]);

  const handleOnOpen = () => {
    refRBSheet.current.open();
  };

  const handleOnClose = () => {
    refRBSheet.current.close();
  };

  return (
    <View style={styles.container} testID={MAIN_SCREEN}>
      <FeedFlatList />
      <Button title="Open bottom sheet" onPress={handleOnOpen} />
      <BottomSheet reference={refRBSheet}>
        <ModalCard
          handleOnClose={handleOnClose}
          title="Agregar a Google Calendar"
          description="Si el evento fue modificado y ya lo habías agregado, recuerda borrar de tu Google Calendar
        el evento viejo."
          primaryText="Agregar"
          secondaryText="Por ahora no"
        />
      </BottomSheet>
    </View>
  );
};

MainScreen.propTypes = {
  navigation: object.isRequired,
};

export default MainScreen;
