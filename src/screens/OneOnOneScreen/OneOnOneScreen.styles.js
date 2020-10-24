import { BLACK, DARK_GRAY } from 'constants/colors';
import { StyleSheet } from 'react-native';
import { DEFAULT_HORIZONTAL_SEPARATION } from 'constants/dimensions';

import { container } from 'constants/styles';

const styles = StyleSheet.create({
  container: {
    ...container,
  },
  contentContainer: {
    width: '100%',
    marginBottom: 10,
    alignSelf: 'stretch',
    paddingTop: 10,
    paddingBottom: 25,
    paddingHorizontal: DEFAULT_HORIZONTAL_SEPARATION,
  },
  flatList: {
    flex: 1,
  },
  contentContainerFlat: {
    flexGrow: 1,
    paddingHorizontal: DEFAULT_HORIZONTAL_SEPARATION,
  },
  title: {
    flexShrink: 1,
    flexWrap: 'wrap',
  },
  description: {
    color: BLACK,
    paddingTop: 10,
  },
  P1: {
    color: DARK_GRAY,
    paddingTop: 10,
  },
  url: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  H3: {
    color: BLACK,
  },
});

export default styles;
