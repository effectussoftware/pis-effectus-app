import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

/**
 * useSetNavigationOptions
 *
 * Wraps the setOptions method of react-navigation inside a useEffect
 * sice it should only be called when the options change.
 *
 * @param {object} options
 */
const useSetNavigationOptions = options => {
  const { setOptions } = useNavigation();
  useEffect(() => {
    setOptions(options);
  }, [setOptions, options]);
};

export default useSetNavigationOptions;
