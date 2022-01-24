import React from 'react';
import { View, Image } from 'react-native';

import appLogo from '../../assets/images/appLogo/default.png';

import styles from './SplashScreen.styles';

const SplashScren = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={appLogo} />
    </View>
  );
};

export default SplashScren;
