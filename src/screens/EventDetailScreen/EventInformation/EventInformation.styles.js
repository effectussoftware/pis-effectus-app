import { BLACK, DARK_GRAY, PRIMARY } from 'constants/colors';
import { StyleSheet } from 'react-native';
import { DEFAULT_HORIZONTAL_SEPARATION } from 'constants/dimensions';

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    alignSelf: 'stretch',
    paddingTop: 10,
    paddingBottom: 18,
    paddingHorizontal: DEFAULT_HORIZONTAL_SEPARATION,
  },
  title: {
    flexShrink: 1,
    flexWrap: 'wrap',
  },
  description: {
    color: BLACK,
    marginTop: 17,
  },
  P1: {
    color: DARK_GRAY,
    paddingTop: 12,
  },
  url: {
    color: PRIMARY,
    textDecorationLine: 'underline',
  },
});

export default styles;
