import { StyleSheet } from 'react-native';
import { ALERT } from 'constants/colors';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 12,
  },
  error: {
    color: ALERT,
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 8,
  },
});

export default styles;
