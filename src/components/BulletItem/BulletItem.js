import React from 'react';
import { View } from 'react-native';
import { string, node, bool } from 'prop-types';

import Text from 'components/Text';

import styles from './BulletItem.styles';

const BulletItem = ({ isOdd, text, children }) => (
  <View style={styles.container}>
    <View style={styles.innerContainer}>
      <View style={[styles.bullet, isOdd ? styles.odd : styles.even]} />
      <Text style={styles.text} type="H3">
        {text}
      </Text>
    </View>
    {children}
  </View>
);

BulletItem.propTypes = {
  isOdd: bool.isRequired,
  text: string.isRequired,
  children: node,
};

export default BulletItem;
