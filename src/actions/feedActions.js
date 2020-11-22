import { createThunk } from '@rootstrap/redux-tools';

import feedService from 'services/feedService';

/**
 * getFeed
 *
 * @param {object} options: {
 *  shouldReplace: bool, true when doing pull to refresh
 *  start?: timestamp, used the updatedAt of the current last element,
 *          if empty it just takes the current date and time.
 * }
 *
 * @return thunk, statusActions to be called and querried on the reducers
 * The feed page can be saved on the reducer on getFeed.success which receives in
 * the key payload the following object: { data, shouldReplace }
 */
export const getFeed = createThunk('GET_FEED', async ({ shouldReplace = false, ...options }) => {
  const { feed } = (await feedService.get(options)).data;
  return { data: feed, shouldReplace };
});

/**
 * getPriorityFeed
 *
 * @return thunk, statusActions to be called and querried on the reducers
 * The priorityFeed can be saved on the reducer on getPriorityFeed.success which receives in
 * the key payload the priority feed
 */
export const getPriorityFeed = createThunk('GET_PRIORITY_FEED', async () => {
  const { feed } = (await feedService.getWithPriority()).data;
  return feed;
});
