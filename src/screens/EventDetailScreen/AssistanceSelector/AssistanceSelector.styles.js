import { GRAY, LIGHT_GRAY, PRIMARY, SUPER_LIGHT_GRAY, DARK_GRAY, WHITE } from 'constants/colors';
import { DEFAULT_HORIZONTAL_SEPARATION, FONT_SCALE } from 'constants/dimensions';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    paddingTop: 12,
    backgroundColor: WHITE,
    paddingHorizontal: DEFAULT_HORIZONTAL_SEPARATION,
  },
  innerContainer: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    backgroundColor: SUPER_LIGHT_GRAY,
    height: 50 * FONT_SCALE,
    borderRadius: 25 * FONT_SCALE,
    borderWidth: 1,
    borderColor: LIGHT_GRAY,
  },
  option: {
    flexGrow: 1,
    flexBasis: 0,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 25 * FONT_SCALE,
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
  disclaimer: {
    color: DARK_GRAY,
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default styles;
