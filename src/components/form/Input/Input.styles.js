import { ALERT, LIGHT_GRAY, SUPER_LIGHT_GRAY } from 'constants/colors';
import { StyleSheet } from 'react-native';

import textStyles from 'components/Text/Text.styles';

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  inputContainer: {
    backgroundColor: SUPER_LIGHT_GRAY,
    borderColor: LIGHT_GRAY,
    borderWidth: 1,
    borderRadius: 8,
  },
  input: {
    paddingHorizontal: 16,
    paddingTop: 19,
    paddingBottom: 9,
    ...textStyles.P1,
  },
  hasError: {
    borderColor: ALERT,
  },
});

export default styles;
