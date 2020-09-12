import React from 'react';
import { View } from 'react-native';
import { arrayOf, bool, oneOfType, string } from 'prop-types';

import Text from 'components/Text';

import styles from './ErrorMessage.styles';

const ErrorMessage = ({ error, showingError }) => (
  <View style={styles.container}>
    {showingError && (
      <Text type="P2" style={styles.message} accessibilityLabel="form-error">
        {typeof error === 'string' ? error : error[0]}
      </Text>
    )}
  </View>
);

ErrorMessage.propTypes = {
  error: oneOfType([arrayOf(string), string]),
  showingError: bool,
};
export default ErrorMessage;
