import { arrayOf, bool, number, oneOf, shape, string } from 'prop-types';

import { POLL, EVENT, EXCHANGE, ONE_ON_ONE, COMMUNICATION } from 'constants/models';

// ONE ON ONE
const actionItemShape = shape({ description: string.isRequired, completed: bool.isRequired });

export const oneOnOneShape = shape({
  id: number.isRequired,
  title: string.isRequired,
  comments: string.isRequired,
  createdAt: string.isRequired,
  reviewerName: string.isRequired,
  reviewerActionItems: arrayOf(actionItemShape),
  userActionItems: arrayOf(actionItemShape),
});

// EVENT
export const typeShape = oneOf([COMMUNICATION, EVENT, EXCHANGE, ONE_ON_ONE, POLL]);

export const inviteeShape = shape({
  name: string.isRequired,
  attend: bool,
  confirmation: bool.isRequired,
});

export const eventShape = shape({
  id: number.isRequired,
  name: string.isRequired,
  description: string,
  startTime: string.isRequired,
  endTime: string.isRequired,
  address: string.isRequired,
  confirmation: bool.isRequired,
  attend: bool,
  cancelled: bool.isRequired,
});

// FEED
const feedCardBase = {
  id: number,
  type: typeShape.isRequired,
  image: string,
  text: string,
  updatedAt: string.isRequired,
};
export const feedCardShape = shape(feedCardBase);

export const eventFeedCardShape = shape({
  ...feedCardBase,
  startTime: string.isRequired,
  endTime: string.isRequired,
  canceled: bool.isRequired,
  confirmation: bool.isRequired,
  attend: bool,
});
