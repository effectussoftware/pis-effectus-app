import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

const useSetNavigationOptions = options => {
  const { setOptions } = useNavigation();
  useEffect(() => {
    setOptions(options);
  }, [setOptions, options]);
};

export default useSetNavigationOptions;
