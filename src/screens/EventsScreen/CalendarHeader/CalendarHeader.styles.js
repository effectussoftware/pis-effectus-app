import { PRIMARY, SECONDARY, WHITE } from 'constants/colors';
import { DEFAULT_HORIZONTAL_SEPARATION } from 'constants/dimensions';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: DEFAULT_HORIZONTAL_SEPARATION,
    backgroundColor: WHITE,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  center: {
    alignItems: 'center',
  },
  text: {
    textTransform: 'capitalize',
    color: PRIMARY,
  },
  arrow: {
    tintColor: SECONDARY,
  },
  flip: {
    transform: [{ rotate: '180deg' }],
  },
});

export default styles;
