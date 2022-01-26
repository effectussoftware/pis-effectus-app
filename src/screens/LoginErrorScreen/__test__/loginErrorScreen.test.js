import React from 'react';
import { render } from '@testing-library/react-native';

import LoginErrorScreen from 'screens/LoginErrorScreen';

test('should render Login Error screen ', () => {
  const onPress = jest.fn();
  render(<LoginErrorScreen onPress={onPress} />);
});
