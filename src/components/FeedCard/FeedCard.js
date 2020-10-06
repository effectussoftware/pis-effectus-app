import React, { useState, useCallback } from 'react';
import { oneOf } from 'prop-types';

import OneOnOneIcon from 'assets/images/feedIcons/oneOnOne/default.png';
import PollIcon from 'assets/images/feedIcons/poll/default.png';
import ExchangeIcon from 'assets/images/feedIcons/exchange/default.png';
import Card from 'components/Card';
import Button from 'components/Button';
import strings from 'locale';

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
  const [descriptionLines, setDescriptionLines] = useState(0);
  const [viewMoreActive, setViewMoreActive] = useState(false);

  const changeActive = useCallback(() => {
    setViewMoreActive(!viewMoreActive);
  }, [viewMoreActive]);

  const setLines = useCallback(({ nativeEvent: { lines } }) => {
    setDescriptionLines(lines.length);
  }, []);

  const descriptionProps = {
    numberOfLines: viewMoreActive ? descriptionLines : LINES_CUTOFF,
    ellipsizeMode: 'tail',
    onTextLayout: setLines,
  };

  return (
    <Card descriptionProps={descriptionProps} icon={icons[type]} {...restProps}>
      {descriptionLines > LINES_CUTOFF && (
        <Button
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
