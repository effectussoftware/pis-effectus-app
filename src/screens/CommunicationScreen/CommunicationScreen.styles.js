import { StyleSheet } from 'react-native';

import { container } from 'constants/styles';
import { DARK_GRAY, WHITE } from 'constants/colors';
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
  updatedAt: {
    marginBottom: 16,
    color: DARK_GRAY,
  },
  image: {
    alignSelf: 'stretch',
    aspectRatio: 2,
  },
});

export default styles;
