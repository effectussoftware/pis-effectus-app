import { createThunk } from '@rootstrap/redux-tools';

import feedService from 'services/feedService';

export const getFeed = createThunk('GET_FEED', async ({ shouldReplace = false, ...options }) => {
  const { feed } = (await feedService.get(options)).data;
  return { data: feed, shouldReplace };
});
