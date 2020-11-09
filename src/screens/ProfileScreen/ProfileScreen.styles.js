import { StyleSheet } from 'react-native';

import { container } from 'constants/styles';
import { SECONDARY, WHITE } from 'constants/colors';

const styles = StyleSheet.create({
  container: {
    ...container,
  },
  userInfoContainer: {
    alignSelf: 'stretch',
    alignItems: 'center',
    backgroundColor: SECONDARY,
    paddingVertical: 22,
  },
  userInfoText: {
    color: WHITE,
  },
});

export default styles;
