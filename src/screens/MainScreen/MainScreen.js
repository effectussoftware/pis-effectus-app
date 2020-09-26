import React from 'react';
import { View } from 'react-native';

import { MAIN_SCREEN } from 'constants/screens';
import Text from 'components/Text';
import strings from 'locale';
import useSession from 'hooks/useSession';
import SignOut from 'components/SignOut';
import styles from './MainScreen.styles';

const MainScreen = () => {
  const {
    user: { email },
  } = useSession();

  return (
    <View style={styles.container} testID={MAIN_SCREEN}>
      <SignOut testID="logout-button" />
      <Text type="H2">{`Hey ${email || ''}, you're logged in!`}</Text>
    </View>
  );
};

MainScreen.navigationOptions = {
  title: strings.MAIN_SCREEN.title,
};

export default MainScreen;
