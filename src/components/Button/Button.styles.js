import { StyleSheet } from 'react-native';
import { GRAY, PRIMARY, WHITE } from 'constants/colors';

const styles = StyleSheet.create({
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
  pressable: {
    alignSelf: 'stretch',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerDisabledPrimary: {
    backgroundColor: GRAY,
  },
  textDisabledSecondary: {
    color: GRAY,
  },
});

export default styles;
