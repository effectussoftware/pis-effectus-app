import { StyleSheet } from 'react-native';

import { PRIMARY, SECONDARY, LIGHT_GRAY, DARK_GRAY, GRAY } from 'constants/colors';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 16,
    borderBottomWidth: 2,
    borderBottomColor: LIGHT_GRAY,
  },
  innerCard: {
    paddingHorizontal: 20,
    alignSelf: 'stretch',
    flex: 1,
  },

  name: {
    textTransform: 'capitalize',
  },
  eventInfo: {
    color: DARK_GRAY,
    paddingVertical: 5,
  },
  eventStatus: {
    alignSelf: 'stretch',
    paddingTop: 15,
    color: GRAY,
    textAlign: 'right',
  },
  notConfirmed: {
    color: PRIMARY,
  },

  bullet: {
    width: 17,
    aspectRatio: 1,
    borderRadius: 17 / 2,
  },

  odd: {
    backgroundColor: PRIMARY,
  },
  even: {
    backgroundColor: SECONDARY,
  },
});

export default styles;
