import { StyleSheet } from 'react-native';

import { DEFAULT_HORIZONTAL_SEPARATION } from 'constants/dimensions';
import { emptyStateContainer } from 'constants/styles';

const styles = StyleSheet.create({
  flatList: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    paddingHorizontal: DEFAULT_HORIZONTAL_SEPARATION,
  },
  emptyStateContainer,
});

export default styles;
