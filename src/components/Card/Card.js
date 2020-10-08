import React from 'react';
import { View, Image } from 'react-native';
import { bool, number, oneOfType, string, node, arrayOf, object } from 'prop-types';

import Text from 'components/Text';

import styles from './Card.styles';

const Card = ({
  image,
  hasBigImage = false,
  title,
  children,
  description,
  time,
  icon,
  descriptionProps = {},
}) => (
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
        <Text {...descriptionProps} style={styles.description}>
          {description}
        </Text>
        {children}
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
  children: oneOfType([node, arrayOf(node)]),
  descriptionProps: object,
};

export default Card;
