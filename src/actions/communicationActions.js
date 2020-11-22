import { createThunk } from '@rootstrap/redux-tools';

import communicationService from 'services/communicationService';

/**
 * getCommunication
 *
 * @param {number} id: id of the communication to be brough from the backend
 *
 * @return thunk, statusActions to be called and querried on the reducers
 * The communication can be saved on the reducer on getCommunication.success with the key payload
 */
export const getCommunication = createThunk(
  'GET_COMMUNICATION',
  async id => (await communicationService.get(id)).data.communication,
);
