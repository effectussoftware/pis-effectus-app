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
  const { user, info, firebaseToken, registeredDevice } = useSelector(
    ({ session }) => session,
    shallowEqual,
  );
  useEffect(() => {
    user && info && firebaseToken && !registeredDevice && dispatch(registerDevice());
  }, [user, info, dispatch, firebaseToken, registeredDevice]);
};

export default useRegisterDevice;
