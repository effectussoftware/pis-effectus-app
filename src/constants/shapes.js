import { arrayOf, bool, number, shape, string } from 'prop-types';

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
export const inviteeShape = shape({
  name: string.isRequired,
  attend: bool.isRequired,
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
