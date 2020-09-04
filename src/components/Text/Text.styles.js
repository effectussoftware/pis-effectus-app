import { StyleSheet } from 'react-native';

import { PRIMARY_FONT_REGULAR, PRIMARY_FONT_BOLD, PRIMARY_FONT_SEMI } from 'constants/fonts';

const styles = StyleSheet.create({
  // ToDo: replace color with constant once pr is merged
  base: { color: 'black' },
  H1: {
    fontFamily: PRIMARY_FONT_BOLD,
    fontSize: 30,
    lineHeight: 41,
  },
  H2: {
    fontFamily: PRIMARY_FONT_SEMI,
    fontSize: 24,
    lineHeight: 33,
  },
  H3: {
    fontFamily: PRIMARY_FONT_BOLD,
    fontSize: 16,
    lineHeight: 22,
  },
  H4: {
    fontFamily: PRIMARY_FONT_BOLD,
    fontSize: 14,
    lineHeight: 19,
  },
  P1: {
    fontFamily: PRIMARY_FONT_REGULAR,
    fontSize: 16,
    lineHeight: 22,
  },
  P1_S: {
    fontFamily: PRIMARY_FONT_SEMI,
    fontSize: 16,
    lineHeight: 22,
  },
  P2: {
    fontFamily: PRIMARY_FONT_REGULAR,
    fontSize: 14,
    lineHeight: 19,
  },
  P2_S: {
    fontFamily: PRIMARY_FONT_SEMI,
    fontSize: 14,
    lineHeight: 19,
  },
  P3: {
    fontFamily: PRIMARY_FONT_REGULAR,
    fontSize: 10,
    lineHeight: 14,
  },
});

export default styles;
