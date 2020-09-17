import { ALERT, GRAY, PRIMARY } from 'constants/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {},
  text: {
    position: 'absolute',
    left: 16,
  },
  label: {
    color: PRIMARY,
    textTransform: 'uppercase',
  },
  placeholder: {
    color: GRAY,
  },
  hasError: {
    color: ALERT,
  },
});

export default styles;
