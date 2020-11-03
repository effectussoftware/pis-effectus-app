import { PRIMARY, SECONDARY, WHITE } from 'constants/colors';
import { PRIMARY_FONT_REGULAR, PRIMARY_FONT_BOLD, PRIMARY_FONT_SEMI } from 'constants/fonts';

export const theme = {
  backgroundColor: WHITE,
  calendarBackground: WHITE,
  textSectionTitleColor: '#b6c1cd',
  textSectionTitleDisabledColor: '#d9e1e8',
  selectedDayBackgroundColor: PRIMARY,
  selectedDayTextColor: WHITE,
  todayTextColor: PRIMARY,
  dayTextColor: SECONDARY,
  textDisabledColor: '#d9e1e8',
  dotColor: PRIMARY,
  selectedDotColor: WHITE,
  arrowColor: 'orange',
  disabledArrowColor: '#d9e1e8',
  monthTextColor: PRIMARY,
  indicatorColor: 'blue',
  textDayFontFamily: PRIMARY_FONT_REGULAR,
  textMonthFontFamily: PRIMARY_FONT_BOLD,
  textDayHeaderFontFamily: PRIMARY_FONT_REGULAR,
  // textDayFontWeight: '300',
  // textMonthFontWeight: 'bold',
  // textDayHeaderFontWeight: '300',
  textDayFontSize: 16,
  textMonthFontSize: 16,
  textDayHeaderFontSize: 16,
};
