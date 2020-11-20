import { bool, func, string } from 'prop-types';
import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import strings from 'locale';

import Text from 'components/Text';

import styles from './AssistanceSelector.styles';

export const MAYBE = 'maybe';
export const NO = 'no';
export const YES = 'yes';

const options = [MAYBE, NO, YES];

const AssistanceSelector = ({
  currentSelection,
  changedLastSeen,
  onPress,
  disabled,
  cancelled,
  finished,
}) => {
  const { bottom } = useSafeAreaInsets();

  let disclaimer = strings.EVENT_DETAIL_SCREEN.lastSeenDisclaimer;

  if (finished) disclaimer = strings.EVENT_DETAIL_SCREEN.finishedDisclaimer;
  if (cancelled) disclaimer = strings.EVENT_DETAIL_SCREEN.cancelledDisclaimer;

  return (
    <View style={[styles.container, { paddingBottom: bottom + 12 }]}>
      {(changedLastSeen || cancelled || finished) && (
        <Text type="P2" style={styles.disclaimer}>
          {disclaimer}
        </Text>
      )}
      <View style={styles.innerContainer}>
        {options.map(option => {
          const isSelected = currentSelection === option;

          const handleOnPress = () => {
            onPress(option);
          };

          return (
            <TouchableWithoutFeedback key={option} onPress={handleOnPress} disabled={disabled}>
              <View style={[styles.option, isSelected && styles.optionSelected]}>
                <Text
                  type={isSelected ? 'H3' : 'P1_S'}
                  style={[styles.optionText, isSelected && !disabled && styles.optionTextSelected]}>
                  {strings.EVENT_DETAIL_SCREEN.assistanceSelector[option]}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </View>
    </View>
  );
};

AssistanceSelector.propTypes = {
  currentSelection: string,
  changedLastSeen: bool.isRequired,
  onPress: func.isRequired,
  disabled: bool.isRequired,
  cancelled: bool.isRequired,
  finished: bool.isRequired,
};

export default AssistanceSelector;
