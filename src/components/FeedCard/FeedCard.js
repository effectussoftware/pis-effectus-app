import React, { useState } from 'react';
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
  const NUMBER_OF_LINES = 2;
  const [descriptionLines, setDescriptionLines] = useState(0);
  const [viewMoreActive, setViewMoreActive] = useState(false);

  const descriptionProps = {
    numberOfLines: viewMoreActive ? descriptionLines : NUMBER_OF_LINES,
    ellipsizeMode: 'tail',
    onTextLayout: ({ nativeEvent: { lines } }) => setDescriptionLines(lines.length),
  };

  return (
    <Card descriptionProps={descriptionProps} icon={icons[type]} {...restProps}>
      {descriptionLines > NUMBER_OF_LINES && (
        <Button
          title={viewMoreActive ? strings.MAIN_SCREEN.viewLess : strings.MAIN_SCREEN.viewMore}
          onPress={() => {
            setViewMoreActive(!viewMoreActive);
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
