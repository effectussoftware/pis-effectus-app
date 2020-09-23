import { StyleSheet } from 'react-native';

import { DEFAULT_HORIZONTAL_SEPARATION } from 'constants/dimensions';
import { WHITE } from 'constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: '30%',
    paddingHorizontal: DEFAULT_HORIZONTAL_SEPARATION,
    backgroundColor: WHITE,
  },
  logo: {
    marginBottom: 50,
  },
});

export default styles;
