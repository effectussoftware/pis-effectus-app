import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { registerDevice } from 'actions/userActions';
/**
 * useRegisterDevice
 *
 * Registers de device if the user is logged in and it re registers the device if the token or sessions changes.
 */
const useRegisterDevice = () => {
  const dispatch = useDispatch();
  const { user, info, firebaseToken } = useSelector(({ session }) => session, shallowEqual);
  useEffect(() => {
    user && info && dispatch(registerDevice());
  }, [user, info, dispatch, firebaseToken]);
};

export default useRegisterDevice;
