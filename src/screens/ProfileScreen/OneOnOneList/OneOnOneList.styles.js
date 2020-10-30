import { StyleSheet } from 'react-native';
import { DEFAULT_HORIZONTAL_SEPARATION } from 'constants/dimensions';

const styles = StyleSheet.create({
  flatList: {
    flex: 1,
    display: 'flex',
    paddingHorizontal: DEFAULT_HORIZONTAL_SEPARATION,
  },
  contentContainer: { flexGrow: 1 },
  oneOnOneTitle: {
    paddingTop: 17,
    paddingBottom: 9,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default styles;
