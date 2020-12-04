import { StyleSheet } from 'react-native';
import { DEFAULT_HORIZONTAL_SEPARATION } from 'constants/dimensions';

import { container } from 'constants/styles';

const styles = StyleSheet.create({
  container,
  contentContainer: {
    marginBottom: 10,
    alignSelf: 'stretch',
    paddingTop: 10,
    paddingBottom: 25,
    paddingHorizontal: DEFAULT_HORIZONTAL_SEPARATION,
  },
  emptyActionables: {
    marginTop: 8,
  },
});

export default styles;
