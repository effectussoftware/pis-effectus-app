import React from 'react';
import { View } from 'react-native';
import { string } from 'prop-types';

import Text from 'components/Text';

const EventInformation = ({ description }) => (
  <View>
    <Text type="H2">{description}</Text>
  </View>
);

EventInformation.propTypes = {
  description: string.isRequired,
};

export default EventInformation;
