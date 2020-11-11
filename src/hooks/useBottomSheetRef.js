import { useRef } from 'react';

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
