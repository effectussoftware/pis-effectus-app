import React from 'react';
import { View, Image } from 'react-native';
import { arrayOf, bool, node, number, object, oneOfType, string } from 'prop-types';
import moment from 'moment';
import { CALENDAR_FORMATS } from 'constants/dateFormats';

import Text from 'components/Text';

import styles from './Card.styles';

const Card = ({
  image,
  hasBigImage = false,
  title,
  children,
  text,
  time,
  timeFormats = CALENDAR_FORMATS,
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
            {moment(time).calendar(timeFormats)}
          </Text>
        </View>
        <Text {...descriptionProps} style={styles.description}>
          {text}
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
  text: string.isRequired,
  time: string,
  timeFormats: object,
  icon: number,
  children: oneOfType([node, arrayOf(node)]),
  descriptionProps: object,
};

export default Card;
