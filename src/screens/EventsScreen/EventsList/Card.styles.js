import { StyleSheet } from 'react-native';

import { PRIMARY, SECONDARY, LIGHT_GRAY, DARK_GRAY } from 'constants/colors';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: LIGHT_GRAY,
  },
  name: {
    paddingVertical: 5,
  },
  eventInfo: {
    color: DARK_GRAY,
    paddingVertical: 5,
  },
  notConfirmed: {
    color: PRIMARY,
    paddingTop: 25,
    textAlign: 'right',
  },
  confirmed: {
    color: '#BDBDBD',
    paddingTop: 25,
    textAlign: 'right',
  },
  bullet: {
    width: 17,
    aspectRatio: 1,
    borderRadius: 17 / 2,
  },
  innerCard: {
    paddingHorizontal: 20,
  },
  odd: {
    backgroundColor: PRIMARY,
  },
  even: {
    backgroundColor: SECONDARY,
  },
});

export default styles;
