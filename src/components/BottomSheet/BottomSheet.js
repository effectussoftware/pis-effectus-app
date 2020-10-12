import React from 'react';
import { object, node } from 'prop-types';
import RBSheet from 'react-native-raw-bottom-sheet';

import { LIGHT_GRAY } from 'constants/colors';

const BottomSheet = ({ children, reference }) => {
  return (
    <RBSheet
      ref={reference}
      closeOnDragDown
      closeOnPressMask={false}
      height={375}
      customStyles={{
        wrapper: {
          backgroundColor: 'rgba(51, 51, 51, 0.5);',
        },
        draggableIcon: {
          backgroundColor: LIGHT_GRAY,
        },
        container: {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
      }}>
      {children}
    </RBSheet>
  );
};

BottomSheet.propTypes = {
  reference: object.isRequired,
  children: node,
};

export default BottomSheet;
