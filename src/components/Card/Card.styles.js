import { StyleSheet } from 'react-native';
import { SUPER_LIGHT_GRAY, GRAY, BLACK, LIGHT_GRAY } from 'constants/colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 10,
  },
  imageContainer: {
    backgroundColor: SUPER_LIGHT_GRAY,
    borderRadius: 15,
    height: 240,
    alignSelf: 'stretch',
    flexGrow: 0,
    marginTop: 10,
  },
  feedContainer: {
    display: 'flex',
    paddingTop: 10,
    flexDirection: 'row',
  },
  iconContainer: {
    backgroundColor: SUPER_LIGHT_GRAY,
    height: 65,
    width: 65,
    marginRight: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    display: 'flex',
    flex: 1,
  },
  topContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    width: '75%',
  },
  date: {
    width: '25%',
    color: GRAY,
    textAlign: 'right',
  },
  description: {
    color: BLACK,
    paddingTop: 10,
  },
  separatorLine: {
    borderBottomColor: LIGHT_GRAY,
    borderBottomWidth: 1,
    paddingTop: 20,
  },
});

export default styles;
