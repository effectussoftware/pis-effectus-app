import { createThunk } from '@rootstrap/redux-tools';

import oneOnOneService from 'services/oneOnOneService';

/**
 * getOneOnOnes
 *
 * @return thunk, statusActions to be called and querried on the reducers
 * The oneOnOnes can be saved on the reducer on getOneOnOnes.success with the key payload
 */
export const getOneOnOnes = createThunk(
  'GET_ONE_ON_ONES',
  async () => (await oneOnOneService.list()).data.reviews,
);

/**
 * getOneOnOne
 *
 * @param {number} id: id of the oneOnOne to be brough from the backend
 *
 * @return thunk, statusActions to be called and querried on the reducers
 * The oneOnOne can be saved on the reducer on getOneOnOne.success with the key payload
 */
export const getOneOnOne = createThunk(
  'GET_ONE_ON_ONE',
  async id => (await oneOnOneService.get(id)).data.review,
);
