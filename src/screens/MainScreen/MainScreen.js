import React, { useCallback } from 'react';
import { View, Button } from 'react-native';
import { useDispatch } from 'react-redux';

import { logout } from 'actions/userActions';
import { MAIN_SCREEN } from 'constants/screens';
import Text from 'components/Text';
import strings from 'locale';
import useSession from 'hooks/useSession';
import styles from './MainScreen.styles';

const MainScreen = () => {
  const dispatch = useDispatch();
  const logoutRequest = useCallback(() => dispatch(logout()), [dispatch]);

  const {
    user: { email },
  } = useSession();

  return (
    <View style={styles.container} testID={MAIN_SCREEN}>
      <Text type="H2">{`Hey ${email || ''}, you're logged in!`}</Text>
      <Button testID="logout-button" onPress={logoutRequest} title={strings.MAIN_SCREEN.logout} />
    </View>
  );
};

MainScreen.navigationOptions = {
  title: strings.MAIN_SCREEN.title,
};

export default MainScreen;
