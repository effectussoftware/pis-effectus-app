import { BLACK, DARK_GRAY } from 'constants/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    alignSelf: 'stretch',
    paddingTop: 10,
    paddingBottom: 25,
    paddingLeft: 20,
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
