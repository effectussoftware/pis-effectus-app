import React, { useState } from 'react';
import { oneOfType } from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import { ONE_ON_ONE_SCREEN, EVENT_DETAIL_SCREEN } from 'constants/screens';

import EventIcon from 'assets/images/feedIcons/event/default.png';
import NewsIcon from 'assets/images/feedIcons/news/default.png';
import OneOnOneIcon from 'assets/images/feedIcons/oneOnOne/default.png';
import PollIcon from 'assets/images/feedIcons/poll/default.png';
import { POLL, EVENT, ONE_ON_ONE, COMMUNICATION } from 'constants/models';
import { eventFeedCardShape, feedCardShape } from 'constants/shapes';
import { formatStartAndEndTime, formatEventStatus } from 'utils/helpers';
import strings from 'locale';

import { Card, Text } from 'components';

import styles from './FeedCard.styles';

const icons = {
  [COMMUNICATION]: NewsIcon,
  [EVENT]: EventIcon,
  [ONE_ON_ONE]: OneOnOneIcon,
  [POLL]: PollIcon,
};

const FeedCard = ({
  item: {
    id,
    type,
    updatedAt,
    image,
    text,
    startTime,
    endTime,
    address,
    cancelled,
    confirmation,
    attend,
    ...restItem
  },
}) => {
  const { navigate } = useNavigation();
  const LINES_CUTOFF = 2;
  const [descriptionLines, setDescriptionLines] = useState();
  const [viewMoreActive, setViewMoreActive] = useState(false);

  const changeActive = () => {
    setViewMoreActive(!viewMoreActive);
  };

  const setLines = ({ nativeEvent: { lines } }) => {
    !descriptionLines && setDescriptionLines(lines.length);
  };

  const navigateToOneOnOneDetail = id => {
    navigate(ONE_ON_ONE_SCREEN, { id });
  };

  const navigateToEventDetail = id => {
    navigate(EVENT_DETAIL_SCREEN, { id });
  };

  const handleOnClick = (type, id) => {
    if (type == COMMUNICATION) changeActive();
    else if (type == ONE_ON_ONE) navigateToOneOnOneDetail(id);
    else if (type == EVENT) navigateToEventDetail(id);
  };

  const formattedDate = formatStartAndEndTime(startTime, endTime);
  const { statusText, needsAttention } = formatEventStatus(
    endTime,
    cancelled,
    confirmation,
    attend,
  );

  return (
    <Card
      icon={icons[type]}
      time={updatedAt}
      image={image}
      onPress={() => handleOnClick(type, id)}
      {...restItem}>
      {type === EVENT && (
        <>
          <Text type="P2" style={styles.subInfo}>
            {formattedDate}
          </Text>
          {!!address && (
            <Text type="P2" style={styles.subInfo}>
              {address}
            </Text>
          )}
        </>
      )}
      {!!text && (
        <Text
          numberOfLines={viewMoreActive || !descriptionLines ? undefined : LINES_CUTOFF}
          onTextLayout={setLines}
          style={styles.description}>
          {text}
        </Text>
      )}
      {type === COMMUNICATION && descriptionLines > LINES_CUTOFF && (
        <Text style={styles.viewMoreLessButton}>
          {viewMoreActive ? strings.MAIN_SCREEN.viewLess : strings.MAIN_SCREEN.viewMore}
        </Text>
      )}
      {type === EVENT && statusText && (
        <Text
          type="H3"
          style={[styles.eventStatus, needsAttention && styles.eventStatusNeedsAttention]}>
          {statusText}
        </Text>
      )}
    </Card>
  );
};

FeedCard.propTypes = {
  item: oneOfType([feedCardShape, eventFeedCardShape]).isRequired,
};

export default FeedCard;
