import React from 'react';
import { arrayOf, instanceOf, oneOf, oneOfType, string } from 'prop-types';
import { Text as RNText } from 'react-native';

import styles from './Text.styles';

// AVAILABLE TEXT TYPES
const H1 = 'H1';
const H2 = 'H2';
const H3 = 'H3';
const H4 = 'H3';
const P1 = 'P1';
const P1_S = 'P1_S';
const P2 = 'P2';
const P2_S = 'P2_S';
const P3 = 'P3';
const P3_B = 'P3_B';

export const typeShape = oneOf([H1, H2, H3, H4, P1, P1_S, P2, P2_S, P3, P3_B]);

const Text = ({ children = '', type = P1, style, ...restProps }) => (
  <RNText style={[styles.base, styles[type], style]} {...restProps}>
    {children}
  </RNText>
);

Text.propTypes = {
  children: oneOfType([string, instanceOf(Text), instanceOf(RNText)]),
  type: typeShape,
  style: oneOfType([arrayOf(RNText.propTypes.style), RNText.propTypes.style]),
};

export default Text;
