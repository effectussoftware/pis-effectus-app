import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useStatus, SUCCESS } from '@rootstrap/redux-tools';
import { useNavigation } from '@react-navigation/native';

import { getEvent, markEventAsSeen, updateEventAssistance } from 'actions/eventActions';
import useAlertError from 'hooks/useAlertError';

export const useGetEvent = id => {
  // DATA FETCH
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEvent(id));
  }, [dispatch, id]);

  const { goBack } = useNavigation();
  const { status, error } = useStatus(getEvent);
  useAlertError(error, getEvent, goBack);

  const { status: updateEventAssistanceStatus, error: updateEventAssistanceError } = useStatus(
    updateEventAssistance,
  );
  useAlertError(updateEventAssistanceError, updateEventAssistance);

  // DATA READ
  const event = useSelector(({ event }) => event.item || {});

  // HANDLE EVENTS
  useEffect(() => {
    if (status === SUCCESS) {
      dispatch(markEventAsSeen(id));
    }
  }, [dispatch, id, status]);

  useEffect(() => {
    if (updateEventAssistanceStatus === SUCCESS) {
      dispatch(getEvent(id));
      dispatch(updateEventAssistance.reset());
    }
  }, [dispatch, id, updateEventAssistanceStatus]);

  // RETURN
  return { event, loading: status !== SUCCESS };
};
