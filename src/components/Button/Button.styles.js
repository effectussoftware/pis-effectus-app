import { StyleSheet } from 'react-native';
import { PRIMARY, WHITE } from 'constants/colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerPrimary: {
    backgroundColor: PRIMARY,
    height: 54,
    borderRadius: 54 / 2,
    alignSelf: 'stretch',
  },
  containerSecondary: {
    // Make pressable area bigger, take into account for spacing
    padding: 5,
    alignSelf: 'auto',
  },
  textPrimary: {
    color: WHITE,
  },
  textSecondary: {
    color: PRIMARY,
  },
});

export default styles;
