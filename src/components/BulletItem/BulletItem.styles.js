import { PRIMARY, SECONDARY, SUPER_LIGHT_GRAY } from 'constants/colors';
import { DEFAULT_HORIZONTAL_SEPARATION } from 'constants/dimensions';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderBottomColor: SUPER_LIGHT_GRAY,
    alignItems: 'center',
  },
  innerContainer: {
    flexDirection: 'row',
  },
  bullet: {
    width: 17,
    aspectRatio: 1,
    borderRadius: 22,
  },
  odd: {
    backgroundColor: PRIMARY,
  },
  even: {
    backgroundColor: SECONDARY,
  },
  name: { paddingHorizontal: DEFAULT_HORIZONTAL_SEPARATION },
});

export default styles;
