import { StyleSheet } from 'react-native';
import { PRIMARY } from 'constants/colors';

const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: PRIMARY,
  },
  imageContainer: {
    backgroundColor: 'red',

    height: 54,
    borderRadius: 54 / 2,
    // alignSelf: 'stretch',
  },
  feedContainer: {
    // Make pressable area bigger, take into account for spacing
    backgroundColor: 'green',
    height: 54,
    display: 'flex',

    flexDirection: 'row',
  },
  iconContainer: {
    backgroundColor: 'pink',
    height: 54,
    width: 54,
  },
  contentContainer: {
    backgroundColor: 'gray',
    display: 'flex',
    flex: 1,
  },
  topContent: {
    display: 'flex',
    flexDirection: 'row',
    color: PRIMARY,
    height: 25,
  },
  title: {
    backgroundColor: PRIMARY,
    width: '70%',
  },
  date: {
    backgroundColor: 'yellow',
    width: '30%',
  },
  description: {
    color: PRIMARY,
  },
});

export default styles;
