import React from 'react';
import { Image } from 'react-native';
import { string, bool, number } from 'prop-types';
import Tick from 'assets/images/tickIcon/default.png';
import Cross from 'assets/images/crossIcon/default.png';

import BulletItem from 'components/BulletItem';

const InviteeItem = ({ id, name, confirmed, attend }) => {
  return (
    <BulletItem id={id} text={name}>
      {confirmed && <Image source={attend ? Tick : Cross} />}
    </BulletItem>
  );
};

InviteeItem.propTypes = {
  id: number.isRequired,
  name: string.isRequired,
  confirmed: bool.isRequired,
  attend: bool.isRequired,
};

export default InviteeItem;
