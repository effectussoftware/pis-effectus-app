import { useCallback } from 'react';

export default (
  handleValueChange,
  handleFocus,
  handleBlur,
  values,
  errors,
  activeFields,
  touchedFields,
) =>
  useCallback(
    fieldKey => ({
      value: values[fieldKey] || '',
      error: errors ? errors[fieldKey] : '',
      active: activeFields[fieldKey] || false,
      touched: touchedFields[fieldKey] || false,
      onChangeText: (text, isInitialSetup) => handleValueChange(fieldKey, text, isInitialSetup),
      onFocus: () => handleFocus(fieldKey),
      onBlur: () => handleBlur(fieldKey),
    }),
    [handleFocus, handleBlur, handleValueChange, values, errors, activeFields, touchedFields],
  );
