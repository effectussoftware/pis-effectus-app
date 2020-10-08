export const TIME_FORMAT = 'HH:mm';
export const DAY_OF_WEEK_FORMAT = 'dddd';
export const DATE_FORMAT_BEAUTIFIED = 'MM/DD/YY';

/* TODO: figure out date formats for events since the time always matters
 and they can be in the future */

export const CALENDAR_FORMATS = {
  sameDay: TIME_FORMAT,
  lastDay: '[Ayer]',
  lastWeek: DAY_OF_WEEK_FORMAT,
  sameElse: DATE_FORMAT_BEAUTIFIED,
};
