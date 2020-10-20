import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

const useSetNavigationOptions = options => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions(options);
  }, [navigation, options]);
};

export default useSetNavigationOptions;
