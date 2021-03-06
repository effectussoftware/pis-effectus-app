import React, { useMemo } from 'react';
import { object, node } from 'prop-types';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import RBSheet from 'react-native-raw-bottom-sheet';

import { FONT_SCALE } from 'constants/dimensions';

import stylesProps from './BottomSheet.styles';

const BottomSheet = ({ children, reference, ...restProps }) => {
  const { bottom } = useSafeAreaInsets();
  const styles = useMemo(() => stylesProps(bottom), [bottom]);
  return (
    <RBSheet
      ref={reference}
      closeOnDragDown
      closeOnPressMask={false}
      height={340 * FONT_SCALE}
      customStyles={styles}
      {...restProps}>
      {children}
    </RBSheet>
  );
};
BottomSheet.propTypes = {
  reference: object.isRequired,
  children: node,
};

export default BottomSheet;
