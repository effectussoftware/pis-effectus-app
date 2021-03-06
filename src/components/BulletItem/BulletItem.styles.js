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
    paddingVertical: 10,
  },
  innerContainer: {
    flexDirection: 'row',
    flexShrink: 1,
  },
  bullet: {
    width: 16,
    aspectRatio: 1,
    borderRadius: 8,
  },
  odd: {
    backgroundColor: PRIMARY,
  },
  even: {
    backgroundColor: SECONDARY,
  },
  text: { paddingHorizontal: DEFAULT_HORIZONTAL_SEPARATION },
});

export default styles;
