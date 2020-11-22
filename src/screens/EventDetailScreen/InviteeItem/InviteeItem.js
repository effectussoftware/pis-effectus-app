import React from 'react';
import { Image } from 'react-native';
import { bool } from 'prop-types';

import Tick from 'assets/images/tickIcon/default.png';
import Cross from 'assets/images/crossIcon/default.png';
import { inviteeShape } from 'constants/shapes';

import { BulletItem } from 'components';

const InviteeItem = ({ isOdd, invitee: { name, confirmation, attend } }) => {
  return (
    <BulletItem isOdd={isOdd} text={name}>
      {confirmation && <Image source={attend ? Tick : Cross} />}
    </BulletItem>
  );
};

InviteeItem.propTypes = {
  isOdd: bool.isRequired,
  invitee: inviteeShape,
};

export default InviteeItem;
