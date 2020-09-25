import React from 'react';
import { object } from 'prop-types';
import { View } from 'react-native';

import { MAIN_SCREEN } from 'constants/screens';
import Text from 'components/Text';
import strings from 'locale';
import useSession from 'hooks/useSession';
import styles from './MainScreen.styles';

const MainScreen = ({ navigation }) => {
  navigation.setOptions({ title: strings.MAIN_SCREEN.title });

  const {
    user: { email },
  } = useSession();

  return (
    <View style={styles.container} testID={MAIN_SCREEN}>
      <Text type="H2">{`Hey ${email || ''}, you're logged in!`}</Text>
    </View>
  );
};

MainScreen.propTypes = {
  navigation: object.isRequired,
};

export default MainScreen;
