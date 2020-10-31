import React, { useState } from 'react';
import { oneOf, string, number } from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import { ONE_ON_ONE_SCREEN } from 'constants/screens';

import OneOnOneIcon from 'assets/images/feedIcons/oneOnOne/default.png';
import PollIcon from 'assets/images/feedIcons/poll/default.png';
import ExchangeIcon from 'assets/images/feedIcons/exchange/default.png';
import NewsIcon from 'assets/images/feedIcons/news/default.png';
import Card from 'components/Card';
import Text from 'components/Text';
import strings from 'locale';

import styles from './FeedCard.styles';

// AVAILABLE FEED TYPES
const POLL = 'poll';
const EXCHANGE = 'exchange';
const ONE_ON_ONE = 'review';
const COMMUNICATION = 'communication';

export const typeShape = oneOf([POLL, EXCHANGE, ONE_ON_ONE, COMMUNICATION]);

const icons = {
  [POLL]: PollIcon,
  [EXCHANGE]: ExchangeIcon,
  [ONE_ON_ONE]: OneOnOneIcon,
  [COMMUNICATION]: NewsIcon,
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
    navigate(ONE_ON_ONE_SCREEN, { idOneOnOne: id });
  };

  const handleOnClick = (type, id) => {
    if (type == COMMUNICATION) changeActive();
    else if (type == ONE_ON_ONE) navigateToOneOnOneDetail(id);
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
