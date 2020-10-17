import { SUPER_LIGHT_GRAY } from 'constants/colors';
import { DEFAULT_HORIZONTAL_SEPARATION } from 'constants/dimensions';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: SUPER_LIGHT_GRAY,
    paddingHorizontal: DEFAULT_HORIZONTAL_SEPARATION,
  },
});

export default styles;
