import { arrayOf, bool, number, shape, string } from 'prop-types';

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
