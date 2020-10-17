import React from 'react';
import { Image } from 'react-native';
import { string, bool, number } from 'prop-types';
import Tick from 'assets/images/inviteeIcons/tick/default.png';
import Cross from 'assets/images/inviteeIcons/cross/default.png';

import BulletItem from 'components/BulletItem';
import styles from './InviteeItem.styles';

const InviteeItem = ({ id, name, confirmed, attend }) => {
  return (
    <BulletItem style={styles.container} id={id} text={name}>
      {confirmed && <Image style={styles.check} source={attend ? Tick : Cross} />}
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
