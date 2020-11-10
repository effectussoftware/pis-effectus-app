import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useStatus, SUCCESS } from '@rootstrap/redux-tools';
import { useNavigation } from '@react-navigation/native';

import { getEvent, markEventAsSeen, updateEventAssistance } from 'actions/eventActions';
import useAlertError from 'hooks/useAlertError';

export const useGetEvent = id => {
  const { goBack } = useNavigation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEvent(id));
  }, [dispatch, id]);

  const { status, error } = useStatus(getEvent);
  useAlertError(error, getEvent, goBack);

  const { status: updateEventAssistanceStatus, error: updateEventAssistanceError } = useStatus(
    updateEventAssistance,
  );
  useAlertError(updateEventAssistanceError, updateEventAssistance);

  const event = useSelector(({ event }) => event.item || {});

  useEffect(() => {
    if (status === SUCCESS) {
      dispatch(markEventAsSeen(id));
    }
  }, [dispatch, id, status]);

  useEffect(() => {
    if (updateEventAssistanceStatus === SUCCESS) {
      dispatch(getEvent(id));
    }
  }, [dispatch, id, updateEventAssistanceStatus]);

  return { event, loading: status !== SUCCESS };
};
