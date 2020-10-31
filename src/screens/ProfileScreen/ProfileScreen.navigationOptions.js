import React from 'react';

import { SECONDARY, WHITE } from 'constants/colors';
import { headerStyle, headerTitleStyle, HEADER_OPTIONS } from 'constants/navigationOptions';
import strings from 'locale';

import { SignOut } from 'components';

const navigationOptions = {
  ...HEADER_OPTIONS,
  title: strings.PROFILE_SCREEN.title,
  headerStyle: {
    ...headerStyle,
    backgroundColor: SECONDARY,
  },
  headerTitleStyle: {
    ...headerTitleStyle,
    color: WHITE,
  },
  headerRight: () => <SignOut />,
};

export default navigationOptions;
