import { StyleSheet } from 'react-native';

import { DEFAULT_HORIZONTAL_SEPARATION } from 'constants/dimensions';
import { WHITE } from 'constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    paddingHorizontal: DEFAULT_HORIZONTAL_SEPARATION,
    backgroundColor: WHITE,
  },
});

export default styles;
