import { StyleSheet } from 'react-native';

import { WHITE } from 'constants/colors';
import { emptyStateContainer } from 'constants/styles';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingLeft: 20,
    backgroundColor: WHITE,
    flex: 1,
  },
  contentContainer: { flexGrow: 1 },
  emptyStateContainer,
});

export default styles;
