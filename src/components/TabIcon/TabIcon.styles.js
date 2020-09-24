import { PRIMARY } from 'constants/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 36,
    aspectRatio: 1,
    borderRadius: 19,
  },
  focused: {
    backgroundColor: PRIMARY,
  },
  icon: {
    height: 17,
  },
});

export default styles;
