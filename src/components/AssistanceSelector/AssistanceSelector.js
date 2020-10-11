import { func, string } from 'prop-types';
import React, { useState } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';

import strings from 'locale';

import Text from 'components/Text';

import styles from './AssistanceSelector.styles';

const MAYBE = 'maybe';
const NO = 'no';
const YES = 'yes';

const options = [MAYBE, NO, YES];

const AssistanceSelector = ({ initialSelection = MAYBE, onPress }) => {
  const [selection, setSelection] = useState(initialSelection);

  return (
    <View style={styles.container}>
      {options.map(option => {
        const isSelected = selection === option;
        return (
          <TouchableWithoutFeedback
            key={option}
            onPress={() => {
              setSelection(option);
              onPress();
            }}>
            <View style={[styles.option, isSelected && styles.optionSelected]}>
              <Text
                type={isSelected ? 'H3' : 'P1_S'}
                style={[styles.optionText, isSelected && styles.optionTextSelected]}>
                {strings.EVENT_DETAILS_SCREEN.assistanceSelector[option]}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        );
      })}
    </View>
  );
};

AssistanceSelector.propTypes = {
  initialSelection: string,
  onPress: func.isRequired,
};

export default AssistanceSelector;
