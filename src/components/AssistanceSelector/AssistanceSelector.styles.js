import { GRAY, LIGHT_GRAY, PRIMARY, SUPER_LIGHT_GRAY, WHITE } from 'constants/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    backgroundColor: SUPER_LIGHT_GRAY,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: LIGHT_GRAY,
  },
  option: {
    flexGrow: 1,
    flexBasis: 0,
    alignItems: 'center',
    padding: 16,
    borderRadius: 25,
  },
  optionText: {
    color: GRAY,
  },
  optionSelected: {
    backgroundColor: WHITE,
  },
  optionTextSelected: {
    color: PRIMARY,
  },
});

export default styles;
