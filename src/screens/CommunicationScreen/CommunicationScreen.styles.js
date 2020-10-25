import { StyleSheet } from 'react-native';

import { container } from 'constants/styles';
import { WHITE } from 'constants/colors';
import { DEFAULT_HORIZONTAL_SEPARATION } from 'constants/dimensions';

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: WHITE,
  },
  container: {
    ...container,
    padding: DEFAULT_HORIZONTAL_SEPARATION,
  },
  title: {
    marginVertical: 16,
  },
  image: {
    alignSelf: 'stretch',
    aspectRatio: 2,
  },
});

export default styles;
