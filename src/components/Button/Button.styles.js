import { StyleSheet } from 'react-native';
import { WHITE } from 'constants/colors';

const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    borderRadius: 30,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 60,
  },
  image: {
    marginRight: 21,
  },
  text: {
    color: WHITE,
  },
});

export default styles;
