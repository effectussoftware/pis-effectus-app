import React, { useEffect } from 'react';
import { object } from 'prop-types';
import { View } from 'react-native';
import FeedFlatList from 'components/FeedFlatlist';
import BottomSheet from 'components/BottomSheet';

import Button from 'components/Button';
import ModalCard from 'components/ModalCard';
import { MAIN_SCREEN } from 'constants/screens';

import useBottomSheetRef from 'hooks/useBottomSheetRef';

import strings from 'locale';
import styles from './MainScreen.styles';

const MainScreen = ({ navigation }) => {
  const [bottomSheetRef, handleOnBottomSheetOpen, handleOnBottomSheetClose] = useBottomSheetRef();

  useEffect(() => {
    navigation.setOptions({ title: strings.MAIN_SCREEN.title });
  }, [navigation]);

  return (
    <View style={styles.container} testID={MAIN_SCREEN}>
      <FeedFlatList />

      <Button title={strings.MAIN_SCREEN.openSheetButton} onPress={handleOnBottomSheetOpen} />
      <BottomSheet reference={bottomSheetRef}>
        <ModalCard
          handleOnClose={handleOnBottomSheetClose}
          title={strings.MAIN_SCREEN.addGCalTitle}
          description={strings.MAIN_SCREEN.addGCalDescription}
          primaryText={strings.MAIN_SCREEN.addButton}
          secondaryText={strings.MAIN_SCREEN.notNowButton}
        />
      </BottomSheet>
    </View>
  );
};

MainScreen.propTypes = {
  navigation: object.isRequired,
};

export default MainScreen;
