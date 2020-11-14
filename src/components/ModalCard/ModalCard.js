import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'components';

import { func, string } from 'prop-types';
import styles from './ModalCard.styles';

const ModalCard = ({
  handleOnClose,
  title,
  description,
  primaryText,
  secondaryText,
  onCTAPress,
}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text numberOfLines={2} type="H2" style={styles.title}>
          {title}
        </Text>
        <Text type="P1_S" style={styles.description}>
          {description}
        </Text>
      </View>
      <View>
        <Button title={primaryText} onPress={onCTAPress} style={styles.primaryButton} />
        <Button
          title={secondaryText}
          onPress={handleOnClose}
          secondary
          style={styles.secondaryButton}
        />
      </View>
    </View>
  );
};

ModalCard.propTypes = {
  handleOnClose: func,
  title: string,
  description: string,
  primaryText: string,
  secondaryText: string,
  onCTAPress: func,
};

export default ModalCard;
