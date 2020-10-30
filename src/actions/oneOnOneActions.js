import { createThunk } from '@rootstrap/redux-tools';

import oneOnOneService from 'services/oneOnOneService';

export const getOneOnOne = createThunk(
  'GET_ONEONONE',
  async id => (await oneOnOneService.get(id)).data.review,
);
