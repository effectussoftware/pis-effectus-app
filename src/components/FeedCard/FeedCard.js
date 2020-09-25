import React from 'react';
import { oneOf } from 'prop-types';
import PollIcon from '../../assets/images/feedIcons/poll/poll.png';
import ExchangeIcon from '../../assets/images/feedIcons/exchange/exchange.png';
import OneOnOneIcon from '../../assets/images/feedIcons/oneOnOne/oneOnOne.png';
import Card from '../Card/index';

// AVAILABLE FEED TYPES
const POLL = 'poll';
const EXCHANGE = 'exchange';
const ONE_ON_ONE = 'oneOnOne';

export const typeShape = oneOf([POLL, EXCHANGE, ONE_ON_ONE]);

const FeedCard = ({ type, ...restProps }) => {
  let icon;
  switch (type) {
    case POLL:
      icon = PollIcon;
      break;
    case EXCHANGE:
      icon = ExchangeIcon;
      break;
    case ONE_ON_ONE:
      icon = OneOnOneIcon;
      break;
    default:
      icon = null;
  }
  return <Card icon={icon} {...restProps} />;
};

FeedCard.propTypes = {
  type: typeShape,
};

export default FeedCard;
