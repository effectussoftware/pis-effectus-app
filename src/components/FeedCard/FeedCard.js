import React, { useState } from 'react';
import { oneOf } from 'prop-types';

import OneOnOneIcon from 'assets/images/feedIcons/oneOnOne/default.png';
import PollIcon from 'assets/images/feedIcons/poll/default.png';
import ExchangeIcon from 'assets/images/feedIcons/exchange/default.png';
import Card from 'components/Card';
import Button from 'components/Button';
import strings from 'locale';
import styles from './FeedCard.styles';

// AVAILABLE FEED TYPES
const POLL = 'poll';
const EXCHANGE = 'exchange';
const ONE_ON_ONE = 'oneOnOne';
const NEWS = 'news';

export const typeShape = oneOf([POLL, EXCHANGE, ONE_ON_ONE, NEWS]);

const icons = {
  [POLL]: PollIcon,
  [EXCHANGE]: ExchangeIcon,
  [ONE_ON_ONE]: OneOnOneIcon,
  [NEWS]: OneOnOneIcon,
};

const FeedCard = ({ type, ...restProps }) => {
  const LINES_CUTOFF = 2;
  const [descriptionLines, setDescriptionLines] = useState();
  const [viewMoreActive, setViewMoreActive] = useState(false);

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
    </Card>
  );
};

FeedCard.propTypes = {
  type: typeShape,
};

export default FeedCard;
