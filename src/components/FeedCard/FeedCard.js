import React from 'react';
import { oneOf } from 'prop-types';

import OneOnOneIcon from 'assets/images/feedIcons/oneOnOne/default.png';
import PollIcon from 'assets/images/feedIcons/poll/default.png';
import ExchangeIcon from 'assets/images/feedIcons/exchange/default.png';
import Card from 'components/Card';

// AVAILABLE FEED TYPES
const POLL = 'poll';
const EXCHANGE = 'exchange';
const ONE_ON_ONE = 'oneOnOne';

export const typeShape = oneOf([POLL, EXCHANGE, ONE_ON_ONE]);

const icons = {
  [POLL]: PollIcon,
  [EXCHANGE]: ExchangeIcon,
  [ONE_ON_ONE]: OneOnOneIcon,
};

const FeedCard = ({ type, ...restProps }) => {
  return <Card icon={icons[type]} {...restProps} />;
};

FeedCard.propTypes = {
  type: typeShape,
};

export default FeedCard;
