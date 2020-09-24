import React from 'react';
import { View, Text, Image } from 'react-native';
import strings from 'locale';
import styles from './FeedCard.styles';

const FeedCard = ({ birthImage }) => {
  //   const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={birthImage} />
      </View>

      <View style={styles.feedContainer}>
        <View style={styles.iconContainer} />
        <View style={styles.contentContainer}>
          <View style={styles.topContent}>
            <Text style={styles.title} />
            <Text style={styles.date} />
          </View>
          <Text style={styles.description} />
        </View>
      </View>
    </View>
  );
};

FeedCard.propTypes = {
  birthImage: strings.isRequired,
};

export default FeedCard;
