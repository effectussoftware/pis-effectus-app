import { StyleSheet } from 'react-native';
import { DARK_GRAY } from 'constants/colors';

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingBottom: 20,
    paddingHorizontal: 24,
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
  primaryButton: {
    marginVertical: 5,
  },
  secondaryButton: {
    marginVertical: 5,
    height: 54,
  },
});

export default styles;
