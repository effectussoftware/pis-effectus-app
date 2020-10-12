import { StyleSheet } from 'react-native';
import { DARK_GRAY } from 'constants/colors';

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingBottom: 20,
    paddingLeft: 30,
    paddingRight: 30,
  },
  title: {
    textAlign: 'center',
    paddingBottom: 15,
  },
  description: {
    textAlign: 'center',
    paddingBottom: 15,
    color: DARK_GRAY,
  },
  button: {
    marginTop: 5,
    marginBottom: 5,
  },
});

export default styles;
