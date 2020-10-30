import React from 'react';

import { oneOnOneShape } from 'constants/shapes';

import { Card } from 'components';
import { useNavigation } from '@react-navigation/native';
import { ONE_ON_ONE_SCREEN } from 'constants/screens';

import OneOnOneIcon from 'assets/images/feedIcons/oneOnOne/default.png';
import strings from 'locale';

const OneOnOneItem = ({ item: { id, title, comments, createdAt } }) => {
  const navigation = useNavigation();

  const navigateToOneonOneDetail = id => {
    navigation.navigate(ONE_ON_ONE_SCREEN, { idOneOnOne: id.toString() });
  };

  return (
    <Card
      title={title}
      text={comments || strings.ONE_ON_ONES.noComments}
      icon={OneOnOneIcon}
      time={createdAt}
      onPress={() => navigateToOneonOneDetail(id)}
    />
  );
};

OneOnOneItem.propTypes = {
  item: oneOnOneShape,
};

export default OneOnOneItem;
