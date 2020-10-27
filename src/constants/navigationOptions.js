import styles from 'components/Text/Text.styles';
import strings from 'locale';
import { BLACK, PRIMARY, WHITE } from './colors';

export const headerStyle = {
  backgroundColor: WHITE,
  elevation: 0, // remove shadow on Android
  shadowOpacity: 0, // remove shadow on iOS
  borderBottomWidth: 0,
};

export const headerTitleStyle = { ...styles.H1, color: BLACK };

export const HEADER_OPTIONS = {
  headerStyle,
  headerTitleStyle,
  headerBackTitle: strings.NAVIGATION.back,
  headerTintColor: PRIMARY,
};
