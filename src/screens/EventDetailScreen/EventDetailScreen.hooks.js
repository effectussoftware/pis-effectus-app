import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useStatus, SUCCESS } from '@rootstrap/redux-tools';
import { useNavigation } from '@react-navigation/native';

import { getEvent } from 'actions/eventActions';
import useAlertError from '../../hooks/useAlertError';

export const useGetEvent = id => {
  const { goBack } = useNavigation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEvent(id));
  }, [dispatch, id]);

  const { status, error } = useStatus(getEvent);
  useAlertError(error, getEvent, goBack);
  const event = useSelector(({ event }) => event.item || {});

  return { event, loading: status !== SUCCESS };
};
