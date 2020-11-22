import { useEffect } from 'react';
import { Alert } from 'react-native';
import { useDispatch } from 'react-redux';
/**
 * useAlertError
 *
 * Displays an Alert with the error if exists.
 * Resets the status of the request on Alert dissmissed.
 * Allows a custom callback.
 *
 * @param {string} error
 * @param {thunk} request
 * @param {function} callback
 */
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
