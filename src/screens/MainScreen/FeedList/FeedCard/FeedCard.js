import React, { useState } from 'react';
import { oneOf, string, number } from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import { ONE_ON_ONE_SCREEN, EVENT_DETAIL_SCREEN } from 'constants/screens';

import OneOnOneIcon from 'assets/images/feedIcons/oneOnOne/default.png';
import PollIcon from 'assets/images/feedIcons/poll/default.png';
import ExchangeIcon from 'assets/images/feedIcons/exchange/default.png';
import NewsIcon from 'assets/images/feedIcons/news/default.png';
import EventIcon from 'assets/images/feedIcons/event/default.png';
import { POLL, EXCHANGE, ONE_ON_ONE, COMMUNICATION, EVENT } from 'constants/models';
import strings from 'locale';

import Card from 'components/Card';
import Text from 'components/Text';

import styles from './FeedCard.styles';

export const typeShape = oneOf([POLL, EXCHANGE, ONE_ON_ONE, COMMUNICATION, EVENT]);

const icons = {
  [POLL]: PollIcon,
  [EXCHANGE]: ExchangeIcon,
  [ONE_ON_ONE]: OneOnOneIcon,
  [COMMUNICATION]: NewsIcon,
  [EVENT]: EventIcon,
};

const FeedCard = ({ id, type, updatedAt, image, ...restProps }) => {
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

  const descriptionProps = {
    numberOfLines: viewMoreActive || !descriptionLines ? undefined : LINES_CUTOFF,
    onTextLayout: setLines,
  };

  return (
    <Card
      descriptionProps={descriptionProps}
      icon={icons[type]}
      time={updatedAt}
      image={image}
      onPress={() => handleOnClick(type, id)}
      {...restProps}>
      {descriptionLines > LINES_CUTOFF && (
        <Text style={styles.viewMoreLessButton}>
          {viewMoreActive ? strings.MAIN_SCREEN.viewLess : strings.MAIN_SCREEN.viewMore}
        </Text>
      )}
    </Card>
  );
};

FeedCard.propTypes = {
  id: number,
  type: typeShape.isRequired,
  updatedAt: string.isRequired,
};

export default FeedCard;
