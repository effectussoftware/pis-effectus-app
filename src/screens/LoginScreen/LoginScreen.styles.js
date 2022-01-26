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
    marginBottom: 80,
    width: 78.13,
    height: 78.12,
  },
  welcomeText: {
    fontStyle: 'normal',
  },
  welcomeSubText: {
    fontStyle: 'normal',
    marginBottom: 12,
  },
  button: {
    borderWidth: 2,
    borderColor: VIOLET_BLUE,
    borderRadius: 30,
  },
});

export default styles;
