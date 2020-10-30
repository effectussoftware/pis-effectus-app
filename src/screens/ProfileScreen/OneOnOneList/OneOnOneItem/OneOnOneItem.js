import React from 'react';

import { oneOnOneShape } from 'constants/shapes';

import { Card } from 'components';

import OneOnOneIcon from 'assets/images/feedIcons/oneOnOne/default.png';
import strings from 'locale';

const OneOnOneItem = ({ item: { title, comments, createdAt } }) => (
  <Card
    title={title}
    text={comments || strings.ONE_ON_ONES.noComments}
    icon={OneOnOneIcon}
    time={createdAt}
  />
);

OneOnOneItem.propTypes = {
  item: oneOnOneShape,
};

export default OneOnOneItem;
