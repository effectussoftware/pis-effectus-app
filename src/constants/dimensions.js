import { Dimensions } from 'react-native';
import { getStatusBarHeight, getBottomSpace } from 'utils/helpers';

const { width, height } = Dimensions.get('window');

export const DEFAULT_HORIZONTAL_SEPARATION = 16;

export const SCREEN_WIDTH = width;
export const SCREEN_HEIGHT = height;
export const SCREEN_HEIGHT_FACTOR = SCREEN_HEIGHT / 812;

export const STATUS_BAR_HEIGHT = getStatusBarHeight(true);
export const SMALL_DEVICE_HEIGHT = 600;
export const BOTTOM_SPACE_HEIGHT = getBottomSpace();

export const SMALL_DEVICE = height < SMALL_DEVICE_HEIGHT;
