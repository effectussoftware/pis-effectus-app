import React from 'react';
import { object, node } from 'prop-types';
import RBSheet from 'react-native-raw-bottom-sheet';
import styles from './BottomSheet.styles';

const BottomSheet = ({ children, reference, ...restProps }) => {
  return (
    <RBSheet
      ref={reference}
      closeOnDragDown
      closeOnPressMask={false}
      height={375}
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
