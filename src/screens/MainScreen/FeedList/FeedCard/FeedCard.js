import React, { useState } from 'react';
import { oneOf, string } from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import { ONE_ON_ONE_SCREEN } from 'constants/screens';

import OneOnOneIcon from 'assets/images/feedIcons/oneOnOne/default.png';
import PollIcon from 'assets/images/feedIcons/poll/default.png';
import ExchangeIcon from 'assets/images/feedIcons/exchange/default.png';
import NewsIcon from 'assets/images/feedIcons/news/default.png';
import Card from 'components/Card';
import Button from 'components/Button';
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
  const navigation = useNavigation();
  const LINES_CUTOFF = 2;
  const [descriptionLines, setDescriptionLines] = useState();
  const [viewMoreActive, setViewMoreActive] = useState(false);

  const changeActive = () => {
    setViewMoreActive(!viewMoreActive);
  };

  const setLines = ({ nativeEvent: { lines } }) => {
    !descriptionLines && setDescriptionLines(lines.length);
  };

  const navigateToOneonOneDetail = id => {
    navigation.navigate(ONE_ON_ONE_SCREEN, { idOneOnOne: id.toString() });
  };

  const descriptionProps = {
    numberOfLines: viewMoreActive || !descriptionLines ? undefined : LINES_CUTOFF,
    onTextLayout: setLines,
  };

  if (type === 'communication') {
    return (
      <Card
        descriptionProps={descriptionProps}
        icon={icons[type]}
        time={updatedAt}
        image={image}
        onPress={() => {}}
        {...restProps}>
        {descriptionLines > LINES_CUTOFF && (
          <Button
            style={styles.viewMoreLessButton}
            title={viewMoreActive ? strings.MAIN_SCREEN.viewLess : strings.MAIN_SCREEN.viewMore}
            onPress={changeActive}
            secondary
          />
        )}
      </Card>
    );
  }
  if (type === 'review') {
    return (
      <Card
        descriptionProps={descriptionProps}
        icon={icons[type]}
        time={updatedAt}
        image={image}
        onPress={() => navigateToOneonOneDetail(id)}
        {...restProps}>
        {descriptionLines > LINES_CUTOFF && (
          <Button
            style={styles.viewMoreLessButton}
            title={viewMoreActive ? strings.MAIN_SCREEN.viewLess : strings.MAIN_SCREEN.viewMore}
            onPress={changeActive}
            secondary
          />
        )}
      </Card>
    );
  }
};

FeedCard.propTypes = {
  id: Number,
  type: typeShape.isRequired,
  updatedAt: string.isRequired,
};

export default FeedCard;
