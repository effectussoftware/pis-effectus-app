import { DIM_BACKGROUND, LIGHT_GRAY } from 'constants/colors';

const styles = bottom => ({
  wrapper: {
    backgroundColor: DIM_BACKGROUND,
  },
  draggableIcon: {
    backgroundColor: LIGHT_GRAY,
  },
  container: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 16 + bottom,
  },
});

export default styles;
