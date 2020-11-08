import React, { useState } from 'react';
import { oneOf, string, number } from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import { ONE_ON_ONE_SCREEN } from 'constants/screens';

import EventIcon from 'assets/images/feedIcons/event/default.png';
import ExchangeIcon from 'assets/images/feedIcons/exchange/default.png';
import NewsIcon from 'assets/images/feedIcons/news/default.png';
import OneOnOneIcon from 'assets/images/feedIcons/oneOnOne/default.png';
import PollIcon from 'assets/images/feedIcons/poll/default.png';
import { POLL, EVENT, EXCHANGE, ONE_ON_ONE, COMMUNICATION } from 'constants/models';
import strings from 'locale';

import Card from 'components/Card';
import Text from 'components/Text';

import styles from './FeedCard.styles';

export const typeShape = oneOf([COMMUNICATION, EVENT, EXCHANGE, ONE_ON_ONE, POLL]);

const icons = {
  [COMMUNICATION]: NewsIcon,
  [EVENT]: EventIcon,
  [EXCHANGE]: ExchangeIcon,
  [ONE_ON_ONE]: OneOnOneIcon,
  [POLL]: PollIcon,
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
