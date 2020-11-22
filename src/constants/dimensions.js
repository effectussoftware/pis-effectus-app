import { Dimensions, PixelRatio } from 'react-native';

const { width, height } = Dimensions.get('window');

// APPLICATION SIDE GUTTERS
export const DEFAULT_HORIZONTAL_SEPARATION = 16;

// SCREEN DIMENSIONS
export const SCREEN_WIDTH = width;
export const SCREEN_HEIGHT = height;
export const SCREEN_HEIGHT_FACTOR = SCREEN_HEIGHT / 812;

export const SMALL_DEVICE_HEIGHT = 600;

export const SMALL_DEVICE = height < SMALL_DEVICE_HEIGHT;

// FONT SCALE
export const FONT_SCALE = PixelRatio.getFontScale();
