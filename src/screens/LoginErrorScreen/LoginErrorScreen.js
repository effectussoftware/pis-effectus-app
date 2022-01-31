import React from 'react';
import { View, Image } from 'react-native';

import { Button, Text } from 'components';
import {
  SOMETHING_WENT_WRONG,
  PLEASE_TRY_AGAIN,
  CHECK_YOUR_INTERNET_CONNECTION,
  TRY_AGAIN,
} from 'constants/screens';
import errorAvatar from 'assets/images/loginIcons/errorAvatar.png';
import ohhMessage from 'assets/images/loginIcons/Ohh...SH_T.png';
import connectionErrorAvatar from 'assets/images/loginIcons/connectionErrorAvatar.png';
import styles from './LoginErrorScreen.styles';

const LoginErrorScreen = ({ onPress, hasInternetConnection }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={hasInternetConnection ? errorAvatar : connectionErrorAvatar}
      />
      <Image style={styles.ohMessageImg} source={ohhMessage} />
      <Text style={styles.somethingWentWrong} type="P4">
        {SOMETHING_WENT_WRONG}
      </Text>
      <Text style={styles.pleaseTryAgain} type="P4">
        {hasInternetConnection ? PLEASE_TRY_AGAIN : CHECK_YOUR_INTERNET_CONNECTION}
      </Text>
      <Button style={styles.button} onPress={onPress} title={TRY_AGAIN} />
    </View>
  );
};

export default LoginErrorScreen;
