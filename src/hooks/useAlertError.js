import { useEffect } from 'react';
import { Alert } from 'react-native';
import { useDispatch } from 'react-redux';

const useAlertError = (error, request, callback) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      Alert.alert(error);
      request && dispatch(request.reset());
      callback && callback();
    }
  }, [dispatch, error, request, callback]);
};

export default useAlertError;
