import React, { useState } from 'react';
import { oneOf } from 'prop-types';
import { useNavigation } from '@react-navigation/native';

import { EVENT_DETAIL_SCREEN } from 'constants/screens';
import OneOnOneIcon from 'assets/images/feedIcons/oneOnOne/default.png';
import PollIcon from 'assets/images/feedIcons/poll/default.png';
import ExchangeIcon from 'assets/images/feedIcons/exchange/default.png';
import EventIcon from 'assets/images/feedIcons/event/default.png';
import Card from 'components/Card';
import Button from 'components/Button';
import strings from 'locale';
import styles from './FeedCard.styles';

// AVAILABLE FEED TYPES
const POLL = 'poll';
const EXCHANGE = 'exchange';
const ONE_ON_ONE = 'oneOnOne';
const EVENT = 'event';

export const typeShape = oneOf([POLL, EXCHANGE, ONE_ON_ONE, EVENT]);

const icons = {
  [POLL]: PollIcon,
  [EXCHANGE]: ExchangeIcon,
  [ONE_ON_ONE]: OneOnOneIcon,
  [EVENT]: EventIcon,
};

const FeedCard = ({ type, ...restProps }) => {
  const LINES_CUTOFF = 2;
  const [descriptionLines, setDescriptionLines] = useState();
  const [viewMoreActive, setViewMoreActive] = useState(false);

  const navigation = useNavigation();

  const changeActive = () => {
    setViewMoreActive(!viewMoreActive);
  };

  const setLines = ({ nativeEvent: { lines } }) => {
    !descriptionLines && setDescriptionLines(lines.length);
  };

  const descriptionProps = {
    numberOfLines: viewMoreActive || !descriptionLines ? undefined : LINES_CUTOFF,
    onTextLayout: setLines,
  };

  return (
    <Card descriptionProps={descriptionProps} icon={icons[type]} {...restProps}>
      {descriptionLines > LINES_CUTOFF && (
        <Button
          style={styles.viewMoreLessButton}
          title={viewMoreActive ? strings.MAIN_SCREEN.viewLess : strings.MAIN_SCREEN.viewMore}
          onPress={changeActive}
          secondary
        />
      )}
      {type === 'event' && (
        <Button
          style={styles.viewMoreLessButton}
          title="Ver Detalle"
          onPress={() => {
            navigation.navigate(EVENT_DETAIL_SCREEN);
          }}
          secondary
        />
      )}
    </Card>
  );
};

FeedCard.propTypes = {
  type: typeShape,
};

export default FeedCard;
