import React from 'react';

import { SECONDARY, WHITE } from 'constants/colors';
import { headerStyle } from 'constants/navigationOptions';

import strings from 'locale';
import textStyles from 'components/Text/Text.styles';
import { SignOut } from 'components';

const navigationOptions = {
  title: strings.PROFILE_SCREEN.title,
  headerStyle: {
    ...headerStyle,
    backgroundColor: SECONDARY,
  },
  headerTitleStyle: {
    ...textStyles.H1,
    color: WHITE,
  },
  headerRight: () => <SignOut />,
};

export default navigationOptions;
