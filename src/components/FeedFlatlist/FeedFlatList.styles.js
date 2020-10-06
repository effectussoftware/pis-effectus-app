import { StyleSheet } from 'react-native';
import { DEFAULT_HORIZONTAL_SEPARATION } from 'constants/dimensions';

const styles = StyleSheet.create({
  flatList: {
    flex: 1,
    display: 'flex',
    paddingHorizontal: DEFAULT_HORIZONTAL_SEPARATION,
  },
});

export default styles;
