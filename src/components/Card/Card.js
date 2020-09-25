import React from 'react';
import { View, Image } from 'react-native';
import { bool, string } from 'prop-types';
import styles from './Card.styles';
import Text from '../Text/index';

const Card = ({ image, hasBigImage, title, description, time, icon }) => {
  return (
    <View style={styles.container}>
      {hasBigImage && (
        <View style={styles.imageContainer}>
          <Image source={image} />
        </View>
      )}

      <View style={styles.feedContainer}>
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
      <View style={styles.separatorLine} />
    </View>
  );
};

Card.propTypes = {
  image: string,
  hasBigImage: bool,
  title: string,
  description: string,
  time: string,
  icon: string,
};

export default Card;
