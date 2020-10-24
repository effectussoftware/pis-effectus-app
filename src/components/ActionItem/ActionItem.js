import React from 'react';
import { Image } from 'react-native';
import { string, bool, number } from 'prop-types';
import Tick from 'assets/images/tickIcon/default.png';

import BulletItem from 'components/BulletItem';

const ActionItem = ({ id, title, confirmed }) => {
  return (
    <BulletItem id={id} text={title}>
      {confirmed && <Image source={Tick} />}
    </BulletItem>
  );
};

ActionItem.propTypes = {
  id: number.isRequired,
  title: string.isRequired,
  confirmed: bool.isRequired,
};

export default ActionItem;
