import React from 'react';
import { View } from 'react-native';

import { useSetNavigationOptions } from 'hooks';
import { PROFILE_SCREEN } from 'constants/screens';
import { SECONDARY, WHITE } from 'constants/colors';
import { headerStyle } from 'constants/navigationOptions';

import strings from 'locale';
import textStyles from 'components/Text/Text.styles';
import { SignOut, Text } from 'components';
import OneOnOneList from './OneOnOneList';

import styles from './ProfileScreen.styles';
import {} from 'react-native-gesture-handler';

const ProfileScreen = () => {
  useSetNavigationOptions({
    title: strings.PROFILE_SCREEN.title,
    headerStyle: {
      ...headerStyle,
      backgroundColor: SECONDARY,
    },
    headerTitleStyle: {
      ...textStyles.H1,
      color: WHITE,
    },
    // eslint-disable-next-line react/no-multi-comp
    headerRight: () => <SignOut />,
  });

  return (
    <View style={styles.container} testID={PROFILE_SCREEN}>
      <View style={styles.userInfoContainer}>
        <Text type="H1" style={styles.userInfoText}>
          PIS Fing
        </Text>
      </View>
      <OneOnOneList />
    </View>
  );
};

export default ProfileScreen;
