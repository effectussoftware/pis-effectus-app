import { Dimensions, Platform, StatusBar } from 'react-native';
import queryString from 'query-string';

import { IS_IOS } from 'constants';

const X_WIDTH = 375;
const X_HEIGHT = 812;

const XS_MAX_WIDTH = 414;
const XS_MAX_HEIGHT = 896;

const { height: W_HEIGHT, width: W_WIDTH } = Dimensions.get('window');

let isIPhoneX = false;

if (IS_IOS && !Platform.isPad && !Platform.isTVOS) {
  isIPhoneX =
    (W_WIDTH === X_WIDTH && W_HEIGHT === X_HEIGHT) ||
    (W_WIDTH === XS_MAX_WIDTH && W_HEIGHT === XS_MAX_HEIGHT);
}

export const IPHONE_X_STATUS_BAR_HEIGHT = 44;
const IPHONE_STATUS_BAR_HEIGHT = 20;

export const getStatusBarHeight = skipAndroid => {
  return Platform.select({
    ios: isIPhoneX ? IPHONE_X_STATUS_BAR_HEIGHT : IPHONE_STATUS_BAR_HEIGHT,
    android: skipAndroid ? 0 : StatusBar.currentHeight,
    default: 0,
  });
};
export const applyQueryParams = (url, params) => {
  const queryParams = queryString.stringify(params);
  return `${url}?${queryParams}`;
};
