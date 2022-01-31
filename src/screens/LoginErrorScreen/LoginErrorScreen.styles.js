import { StyleSheet } from 'react-native';

import { DEFAULT_HORIZONTAL_SEPARATION } from 'constants/dimensions';
import { BLACK_BACKGROUND, VIOLET_BLUE } from 'constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: '30%',
    paddingHorizontal: DEFAULT_HORIZONTAL_SEPARATION,
    backgroundColor: BLACK_BACKGROUND,
  },
  logo: {
    marginBottom: 60,
    width: 247,
    height: 247,
  },
  ohMessageImg: {
    marginBottom: 30,
  },
  somethingWentWrong: {
    fontStyle: 'normal',
  },
  pleaseTryAgain: {
    fontStyle: 'normal',
    marginBottom: 50,
    textAlign: 'center',
  },
  button: {
    borderWidth: 2,
    borderColor: VIOLET_BLUE,
    borderRadius: 30,
  },
});

export default styles;
