import { createThunk } from '@rootstrap/redux-tools';

import communicationService from 'services/communicationService';

export const getCommunication = createThunk(
  'GET_COMMUNICATION',
  async id => (await communicationService.get(id)).data.communication,
);
