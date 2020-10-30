import React from 'react';
import { Image } from 'react-native';
import { string, bool, number } from 'prop-types';
import Tick from 'assets/images/tickIcon/default.png';

import BulletItem from 'components/BulletItem';

const ActionItem = ({ id, description, completed }) => {
  return (
    <BulletItem isOdd={id % 2 === 0} text={description}>
      {completed && <Image source={Tick} />}
    </BulletItem>
  );
};

ActionItem.propTypes = {
  id: number.isRequired,
  description: string.isRequired,
  completed: bool.isRequired,
};

export default ActionItem;
