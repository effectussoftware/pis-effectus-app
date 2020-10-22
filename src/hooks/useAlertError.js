import { useEffect } from 'react';
import { Alert } from 'react-native';
import { useDispatch } from 'react-redux';

const useAlertError = (error, request) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      Alert.alert(error);
      request && dispatch(request.reset());
    }
  }, [dispatch, error, request]);
};

export default useAlertError;
