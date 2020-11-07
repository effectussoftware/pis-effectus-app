import React from 'react';
import { Image } from 'react-native';
import { string, bool } from 'prop-types';

import Tick from 'assets/images/tickIcon/default.png';
import Cross from 'assets/images/crossIcon/default.png';

import BulletItem from 'components/BulletItem';

const InviteeItem = ({ isOdd, name, confirmation, attend }) => {
  return (
    <BulletItem isOdd={isOdd} text={name}>
      {confirmation && <Image source={attend ? Tick : Cross} />}
    </BulletItem>
  );
};

InviteeItem.propTypes = {
  isOdd: bool.isRequired,
  name: string.isRequired,
  attend: bool.isRequired,
  confirmation: bool.isRequired,
};

export default InviteeItem;
