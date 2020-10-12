import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'components';

import { func, string } from 'prop-types';
import styles from './ModalCard.styles';

const ModalCard = ({ handleOnClose, title, description, primaryText, secondaryText }) => {
  return (
    <View style={styles.container}>
      <Text numberOfLines={2} type="H2" style={styles.title}>
        {title}
      </Text>
      <Text type="P1_S" numberOfLines={3} style={styles.description}>
        {description}
      </Text>
      <Button title={primaryText} onPress={handleOnClose} style={styles.button} />
      <Button title={secondaryText} onPress={handleOnClose} secondary style={styles.button} />
    </View>
  );
};

ModalCard.propTypes = {
  handleOnClose: func,
  title: string.isRequired,
  description: string,
  primaryText: string.isRequired,
  secondaryText: string,
};

export default ModalCard;
