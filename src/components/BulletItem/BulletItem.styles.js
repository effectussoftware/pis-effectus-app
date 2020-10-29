import { PRIMARY, SECONDARY, SUPER_LIGHT_GRAY } from 'constants/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderBottomColor: SUPER_LIGHT_GRAY,
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 13,
  },
  innerContainer: {
    flexDirection: 'row',
  },
  bullet: {
    width: 16,
    aspectRatio: 1,
    borderRadius: 8,
  },
  odd: {
    backgroundColor: PRIMARY,
  },
  even: {
    backgroundColor: SECONDARY,
  },
  text: { paddingHorizontal: 16 },
});

export default styles;
