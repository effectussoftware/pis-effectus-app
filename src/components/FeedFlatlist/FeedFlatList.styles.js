import { StyleSheet } from 'react-native';
import { DEFAULT_HORIZONTAL_SEPARATION } from 'constants/dimensions';

const styles = StyleSheet.create({
  flatList: {
    flex: 1,
    backgroundColor: 'gray',
    display: 'flex',
    paddingLeft: DEFAULT_HORIZONTAL_SEPARATION,
    paddingRight: DEFAULT_HORIZONTAL_SEPARATION,
  },
  item: {
    color: 'black',
    fontSize: 16,
  },
});

export default styles;
