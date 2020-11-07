import { BLACK, DARK_GRAY, BLUE } from 'constants/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    alignSelf: 'stretch',
    paddingTop: 10,
    paddingBottom: 25,
    paddingLeft: 20,
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
    color: BLUE,
    textDecorationLine: 'underline',
  },
});

export default styles;
