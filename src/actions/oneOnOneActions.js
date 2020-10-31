import { createThunk } from '@rootstrap/redux-tools';

import oneOnOneService from 'services/oneOnOneService';

export const getOneOnOne = createThunk(
  'GET_ONE_ON_ONE',
  async id => (await oneOnOneService.get(id)).data.review,
);

export const getOneOnOnes = createThunk(
  'GET_ONE_ON_ONES',
  async () => (await oneOnOneService.list()).data.reviews,
);
