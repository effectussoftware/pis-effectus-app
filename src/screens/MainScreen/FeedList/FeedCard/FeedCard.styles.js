import { DARK_GRAY, GRAY, PRIMARY } from 'constants/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  viewMoreLessButton: {
    marginLeft: 'auto',
  },
  subInfo: {
    color: DARK_GRAY,
    marginTop: 7,
  },
  eventStatus: {
    marginLeft: 'auto',
    color: GRAY,
  },
  eventStatusNeedsAttention: {
    color: PRIMARY,
  },
  description: {
    paddingTop: 7,
  },
});

export default styles;
