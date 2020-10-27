import { arrayOf, bool, number, shape, string } from 'prop-types';

const actionItemShape = shape({ descripion: string.isRequired, completed: bool.isRequired });

export const oneOnOneShape = shape({
  id: number.isRequired,
  title: string.isRequired,
  comments: string.isRequired,
  createdAt: string.isRequired,
  reviewerId: number.isRequired,
  userActionItems: arrayOf(actionItemShape),
});
