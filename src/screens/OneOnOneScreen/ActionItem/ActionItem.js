import React from 'react';
import { Image } from 'react-native';
import { string, bool } from 'prop-types';
import Tick from 'assets/images/tickIcon/default.png';

import { BulletItem } from 'components';

const ActionItem = ({ isOdd, description, completed }) => {
  return (
    <BulletItem isOdd={isOdd} text={description}>
      {completed && <Image source={Tick} />}
    </BulletItem>
  );
};

ActionItem.propTypes = {
  isOdd: bool.isRequired,
  description: string.isRequired,
  completed: bool.isRequired,
};

export default ActionItem;
