import styles from 'components/Text/Text.styles';
import { WHITE } from './colors';

export const headerStyle = {
  backgroundColor: WHITE,
  elevation: 0, // remove shadow on Android
  shadowOpacity: 0, // remove shadow on iOS
  borderBottomWidth: 0,
};

export const headerTitleStyle = styles.H1;

export const HEADER_OPTIONS = {
  headerStyle,
  headerTitleStyle,
};
