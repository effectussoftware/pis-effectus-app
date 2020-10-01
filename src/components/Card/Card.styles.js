import { StyleSheet } from 'react-native';
import { SUPER_LIGHT_GRAY, GRAY, BLACK } from 'constants/colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 10,
    alignSelf: 'stretch',
    paddingTop: 10,
    paddingBottom: 25,
    borderBottomWidth: 2,
    borderBottomColor: SUPER_LIGHT_GRAY,
  },
  imageContainer: {
    backgroundColor: SUPER_LIGHT_GRAY,
    borderRadius: 15,
    height: 240,
    alignSelf: 'stretch',
    flexGrow: 0,
    marginBottom: 10,
  },
  bodyContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  iconContainer: {
    backgroundColor: SUPER_LIGHT_GRAY,
    aspectRatio: 1,
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
});

export default styles;
