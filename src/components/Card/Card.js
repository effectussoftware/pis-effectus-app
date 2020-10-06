import React from 'react';
import { View, Image } from 'react-native';
import { bool, number, string } from 'prop-types';

import Text from 'components/Text';

import styles from './Card.styles';

const Card = ({ image, hasBigImage = false, title, description, time, icon }) => (
  <View style={styles.container}>
    {hasBigImage && (
      <View style={styles.imageContainer}>
        <Image source={image} />
      </View>
    )}

    <View style={styles.bodyContainer}>
      {!hasBigImage && (
        <View style={styles.iconContainer}>
          <Image source={icon} />
        </View>
      )}
      <View style={styles.contentContainer}>
        <View style={styles.topContent}>
          <Text type="H3" style={styles.title}>
            {title}
          </Text>
          <Text type="P1" style={styles.date}>
            {time}
          </Text>
        </View>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  </View>
);

Card.propTypes = {
  image: string,
  hasBigImage: bool,
  title: string.isRequired,
  description: string.isRequired,
  time: string,
  icon: number,
};

export default Card;
