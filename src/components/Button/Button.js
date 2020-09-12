import React from 'react';
import { string, func, bool } from 'prop-types';
import { Text as RNText, TouchableOpacity, View, ViewPropTypes } from 'react-native';

import Text from 'components/Text';
import styles from './Button.styles';

const Button = ({ title, onPress, secondary, style = {}, textStyle = {}, ...restProps }) => (
  <View
    style={[
      styles.container,
      secondary ? styles.containerSecondary : styles.containerPrimary,
      style,
    ]}
    {...restProps}>
    <TouchableOpacity onPress={onPress}>
      <Text type="H3" style={[secondary ? styles.textSecondary : styles.textPrimary, textStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  </View>
);

Button.propTypes = {
  title: string.isRequired,
  onPress: func.isRequired,
  secondary: bool,
  style: ViewPropTypes.style,
  textStyle: RNText.propTypes.style,
};

export default Button;
