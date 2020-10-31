import React from 'react';

import { oneOnOneShape } from 'constants/shapes';

import { Card } from 'components';
import { useNavigation } from '@react-navigation/native';
import { ONE_ON_ONE_SCREEN } from 'constants/screens';

import OneOnOneIcon from 'assets/images/feedIcons/oneOnOne/default.png';
import strings from 'locale';

const OneOnOneItem = ({ item: { id, title, comments, createdAt } }) => {
  const { navigate } = useNavigation();

  const navigateToOneOnOneDetail = id => {
    navigate(ONE_ON_ONE_SCREEN, { idOneOnOne: id });
  };

  return (
    <Card
      title={title}
      text={comments || strings.ONE_ON_ONES.noComments}
      icon={OneOnOneIcon}
      time={createdAt}
      onPress={() => navigateToOneOnOneDetail(id)}
    />
  );
};

OneOnOneItem.propTypes = {
  item: oneOnOneShape,
};

export default OneOnOneItem;
