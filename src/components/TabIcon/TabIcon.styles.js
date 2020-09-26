import { LIGHT_GRAY, PRIMARY } from 'constants/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: LIGHT_GRAY,
    alignItems: 'center',
    justifyContent: 'center',
    width: 36,
    aspectRatio: 1,
    borderRadius: 22,
  },
  focused: {
    backgroundColor: PRIMARY,
  },
  icon: {
    height: 20,
  },
});

export default styles;
