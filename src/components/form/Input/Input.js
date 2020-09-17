import React, { useEffect } from 'react';
import { arrayOf, bool, func, oneOfType, string } from 'prop-types';
import { View, TextInput } from 'react-native';

import styles from './Input.styles';
import Label from './Label';
import ErrorMessage from './ErrorMessage';

const Input = ({ label, value, error, active, touched, onChangeText, ...props }) => {
  // Register field for validations
  useEffect(() => {
    onChangeText(value, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Only show error if user has interacted or submitted
  const showingError = touched && !!error;

  return (
    <View style={styles.container}>
      <View style={[styles.inputContainer, showingError && styles.hasError]}>
        {label && (
          <Label isActive={active} isEmpty={!value} showingError={showingError}>
            {label}
          </Label>
        )}
        <TextInput style={styles.input} value={value} onChangeText={onChangeText} {...props} />
      </View>
      <ErrorMessage error={error} showingError={showingError} />
    </View>
  );
};

Input.propTypes = {
  label: string,
  value: string,
  error: oneOfType([arrayOf(string), string]),
  active: bool,
  touched: bool,
  onChangeText: func.isRequired,
};

export default Input;
