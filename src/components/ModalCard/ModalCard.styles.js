import { StyleSheet } from 'react-native';
import { DARK_GRAY } from 'constants/colors';

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingHorizontal: 24,
    flex: 1,
    justifyContent: 'space-between',
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
    height: 54,
  },
});

export default styles;
