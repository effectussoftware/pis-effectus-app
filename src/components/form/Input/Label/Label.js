import React from 'react';
import { bool, string } from 'prop-types';
import { View } from 'react-native';

import Text from 'components/Text';
import styles from './Label.styles';

const Label = ({ children, isActive = false, isEmpty = false, showingError = false }) => {
  const labelAsPlaceholder = !isActive && isEmpty && !showingError;

  const containerStyle = [styles.container, { top: labelAsPlaceholder ? 16 : 5 }];
  const textStyle = [
    styles.text,
    labelAsPlaceholder ? styles.placeholder : styles.label,
    showingError && styles.hasError,
  ];

  return (
    <View style={containerStyle} pointerEvents="none">
      <Text type={labelAsPlaceholder ? 'P1_S' : 'P3_B'} style={textStyle}>
        {children}
      </Text>
    </View>
  );
};

Label.propTypes = {
  children: string.isRequired,
  isActive: bool,
  isEmpty: bool,
  showingError: bool,
};

export default Label;
