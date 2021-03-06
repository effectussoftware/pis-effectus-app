import { Linking } from 'react-native';
import moment from 'moment';

import { EVENT_DATE_FORMATS, TIME_FORMAT } from 'constants/dateFormats';
import strings from 'locale';

export const openExternalLink = async url => {
  try {
    const urlWithProtocol = url.includes('://') ? url : `http://${url}`;
    await Linking.canOpenURL(urlWithProtocol);
    return Linking.openURL(urlWithProtocol);
  } catch (error) {
    console.error(error);
  }
};

export const formatStartAndEndTime = (startTimeAndDate, endTimeAndDate) => {
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

export const formatEventStatus = (endDate, cancelled, confirmation, attend) => {
  let statusText = strings.EVENTS_SCREEN.eventStatus.notConfirmed;
  let needsAttention = !confirmation;

  if (cancelled) {
    statusText = strings.EVENTS_SCREEN.eventStatus.cancelled;
    needsAttention = false;
  } else if (moment(endDate).isBefore(moment())) {
    statusText = strings.EVENTS_SCREEN.eventStatus.ended;
    needsAttention = false;
  } else if (confirmation) {
    statusText = attend
      ? strings.EVENTS_SCREEN.eventStatus.attend
      : strings.EVENTS_SCREEN.eventStatus.notAttend;
  }
  return { statusText, needsAttention };
};
