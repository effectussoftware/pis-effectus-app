import React from 'react';
import { View, Image } from 'react-native';
import { arrayOf, func, node, number, object, oneOfType, string } from 'prop-types';
import moment from 'moment';
import { CALENDAR_FORMATS } from 'constants/dateFormats';
import Text from 'components/Text';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './Card.styles';

const Card = ({
  onPress,
  image,
  title,
  children,
  text,
  time,
  timeFormats = CALENDAR_FORMATS,
  icon,
  descriptionProps = {},
}) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.container}>
      {!!image && (
        <View style={styles.imageContainer}>
          <Image source={{ uri: image }} style={{ alignSelf: 'stretch', flex: 1 }} />
        </View>
      )}

      <View style={styles.bodyContainer}>
        {!image && (
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
          {!!text && (
            <Text {...descriptionProps} style={styles.description}>
              {text}
            </Text>
          )}
          {children}
        </View>
      </View>
    </View>
  </TouchableOpacity>
);

Card.propTypes = {
  onPress: func,
  image: string,
  title: string.isRequired,
  text: string,
  time: string,
  timeFormats: object,
  icon: number,
  children: oneOfType([node, arrayOf(node)]),
  descriptionProps: object,
};

export default Card;
