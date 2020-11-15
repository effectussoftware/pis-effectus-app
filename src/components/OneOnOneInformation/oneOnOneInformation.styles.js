import { BLACK, DARK_GRAY } from 'constants/colors';
import { DEFAULT_HORIZONTAL_SEPARATION } from 'constants/dimensions';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    alignSelf: 'stretch',
    paddingTop: 10,
    paddingBottom: 25,
    paddingHorizontal: DEFAULT_HORIZONTAL_SEPARATION,
  },
  comments: {
    paddingTop: 15,
  },
  description: {
    color: BLACK,
    paddingTop: 15,
  },
  P1: {
    color: DARK_GRAY,
    paddingTop: 15,
  },
});

export default styles;
