import React from 'react';
import { shape, string } from 'prop-types';

import { Text } from 'components';

import styles from './FeedSectionHeader.styles';

const FeedSectionHeader = ({ section: { title } }) => (
  <Text type="H3" style={styles.container}>
    {title}
  </Text>
);

FeedSectionHeader.propTypes = {
  section: shape({
    title: string.isRequired,
  }),
};

export default FeedSectionHeader;
