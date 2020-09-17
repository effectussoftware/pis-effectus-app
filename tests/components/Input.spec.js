import React from 'react';
import { render } from '@testing-library/react-native';

import Input from 'components/form/Input';

describe('<Input />', () => {
  const props = {
    label: 'Test',
    onChangeText: jest.fn(),
  };

  it('Should display a label', () => {
    const { getByText } = render(<Input {...props} />);
    const label = getByText('Test');
    expect(label).toBeTruthy();
  });

  describe('Error message', () => {
    it('Should NOT display an error if has error but is not yet touched', () => {
      const { queryByText } = render(<Input {...props} error="error" />);
      expect(queryByText('error')).toBeNull();
    });

    it('Should display an error if has error and is touched', () => {
      const { queryByText } = render(<Input {...props} error="error" touched />);
      expect(queryByText('error')).toBeTruthy();
    });
  });
});
