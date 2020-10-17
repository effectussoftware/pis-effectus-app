import { StyleSheet } from 'react-native';
import { DIM_BACKGROUND, LIGHT_GRAY } from 'constants/colors';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: DIM_BACKGROUND,
  },
  draggableIcon: {
    backgroundColor: LIGHT_GRAY,
  },
  container: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default styles;
