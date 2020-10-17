import React from 'react';
import { View } from 'react-native';
import { number, string, node } from 'prop-types';

import Text from 'components/Text';

import styles from './BulletItem.styles';

const BulletItem = ({ id, text, children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerComtainer}>
        <View style={[styles.bullet, id % 2 ? styles.odd : styles.even]} />
        <Text style={(styles.text, styles.name)} type="H3">
          {text}
        </Text>
      </View>
      {children}
    </View>
  );
};

BulletItem.propTypes = {
  id: number.isRequired,
  text: string.isRequired,
  children: node,
};

export default BulletItem;
