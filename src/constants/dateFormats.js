export const TIME_FORMAT = 'HH:mm';
export const DAY_OF_WEEK_FORMAT = 'dddd';
export const DAY_OF_LAST_WEEK_FORMAT = `[El pasado] ${DAY_OF_WEEK_FORMAT}`;
export const DATE_FORMAT_BEAUTIFIED = 'DD/MM/YY';
export const MONTH_FORMAT = 'MMMM';
export const YEAR_FORMAT = 'YYYY';
export const EVENT_CALENDAR = 'YYYY-MM-DD';
export const EVENT_CALENDAR_YEAR_AND_MONTH = 'YYYY-MM';

export const CALENDAR_FORMATS = {
  sameDay: TIME_FORMAT,
  lastDay: '[Ayer]',
  lastWeek: DAY_OF_WEEK_FORMAT,
  sameElse: DATE_FORMAT_BEAUTIFIED,
};

export const EVENT_DATE_FORMATS = {
  sameDay: '[Hoy]',
  lastDay: '[Ayer]',
  nextDay: '[Mañana]',
  nextWeek: DAY_OF_WEEK_FORMAT,
  lastWeek: DAY_OF_LAST_WEEK_FORMAT,
  sameElse: DATE_FORMAT_BEAUTIFIED,
};
