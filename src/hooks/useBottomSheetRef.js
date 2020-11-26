import { useRef } from 'react';
/**
 * useBottomSheetRef
 *
 * hook to handle the useage of a bottom sheet that needs a ref.
 *
 * @return {array}
 */
const useBottomSheetRef = () => {
  const ref = useRef();

  const handleOpen = () => {
    ref.current.open();
  };

  const handleClose = () => {
    ref.current.close();
  };

  return [ref, handleOpen, handleClose];
};

export default useBottomSheetRef;
