import React from 'react';
import { string, func, bool } from 'prop-types';
import { Text as RNText, TouchableOpacity, View, ViewPropTypes, Image } from 'react-native';

import Text from 'components/Text';
import styles from './Button.styles';

const Button = ({ title, onPress, secondary, disabled = false, imageSrc, ...restProps }) => {
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={onPress} disabled={disabled} {...restProps}>
        <View style={styles.container}>
          {imageSrc && <Image source={imageSrc} style={styles.image} />}
          {title && (
            <Text type="P6" style={styles.text}>
              {title}
            </Text>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

Button.propTypes = {
  title: string,
  onPress: func.isRequired,
  secondary: bool,
  style: ViewPropTypes.style,
  disabled: bool,
};

export default Button;
