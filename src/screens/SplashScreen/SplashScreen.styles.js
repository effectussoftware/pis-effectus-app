import { StyleSheet } from 'react-native';

import { DEFAULT_HORIZONTAL_SEPARATION } from 'constants/dimensions';
import { BLACK_BACKGROUND } from 'constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: DEFAULT_HORIZONTAL_SEPARATION,
    backgroundColor: BLACK_BACKGROUND,
  },
  logo: {
    width: 146.11,
    height: 146.1,
  },
});

export default styles;
