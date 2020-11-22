import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useStatus, SUCCESS } from '@rootstrap/redux-tools';
import { useNavigation } from '@react-navigation/native';

import { getOneOnOne } from 'actions/oneOnOneActions';
import { useAlertError } from 'hooks';

const useGetOneOnOne = id => {
  const { goBack } = useNavigation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOneOnOne(id));
  }, [dispatch, id]);

  const { status, error } = useStatus(getOneOnOne);
  useAlertError(error, getOneOnOne, goBack);
  const oneOnOne = useSelector(({ oneOnOne }) => oneOnOne.item || {});

  return { oneOnOne, loading: status !== SUCCESS };
};

export default useGetOneOnOne;
