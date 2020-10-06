import React from 'react';
import { string, func, bool } from 'prop-types';
import { Text as RNText, TouchableOpacity, View, ViewPropTypes } from 'react-native';

import Text from 'components/Text';
import styles from './Button.styles';

const Button = ({
  title,
  onPress,
  secondary,
  style = {},
  textStyle = {},
  disabled = false,
  ...restProps
}) => {
  return (
    <View
      style={[
        secondary ? styles.containerSecondary : styles.containerPrimary,
        style,
        disabled && !secondary && styles.containerDisabledPrimary,
      ]}>
      <TouchableOpacity
        style={styles.pressable}
        onPress={onPress}
        disabled={disabled}
        {...restProps}>
        <Text
          type="H3"
          style={[
            secondary ? styles.textSecondary : styles.textPrimary,
            textStyle,
            disabled && secondary && styles.textDisabledSecondary,
          ]}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

Button.propTypes = {
  title: string.isRequired,
  onPress: func.isRequired,
  secondary: bool,
  style: ViewPropTypes.style,
  disabled: bool,
  textStyle: RNText.propTypes.style,
};

export default Button;
