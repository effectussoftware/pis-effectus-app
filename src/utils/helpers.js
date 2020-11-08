import moment from 'moment';
import queryString from 'query-string';

import { EVENT_DATE_FORMATS, TIME_FORMAT } from 'constants/dateFormats';

export const applyQueryParams = (url, params) => {
  const queryParams = queryString.stringify(params);
  return `${url}?${queryParams}`;
};

export const useFormatStartAndEndTime = (startTimeAndDate, endTimeAndDate) => {
  const startData = moment(startTimeAndDate);
  const endData = moment(endTimeAndDate);

  const startDate = startData.calendar(EVENT_DATE_FORMATS);
  const endDate = endData.calendar(EVENT_DATE_FORMATS);

  const startTime = startData.format(TIME_FORMAT);
  const endTime = endData.format(TIME_FORMAT);

  const formattedDate = `${startDate} ${startTime} -${
    startDate !== endDate ? ` ${endDate}` : ''
  } ${endTime}`;

  return formattedDate;
};
