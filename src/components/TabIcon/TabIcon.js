import React from 'react';
import { bool, number, string } from 'prop-types';
import { Image, View } from 'react-native';

import styles from './TabIcon.styles';

const TabIcon = ({ color, source, focused }) => {
  return (
    <View style={[styles.container, focused && styles.focused]}>
      <Image source={source} style={[styles.icon, { tintColor: color }]} />
    </View>
  );
};

TabIcon.propTypes = {
  color: string.isRequired,
  source: number.isRequired,
  focused: bool.isRequired,
};

export default TabIcon;
