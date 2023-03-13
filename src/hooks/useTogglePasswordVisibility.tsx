import React from 'react';
import {useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';

export const useTogglePasswordVisibility = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState('Show');

  const handlePasswordVisibility = () => {
    if (rightIcon === 'Show') {
      setRightIcon('Hide');
      setPasswordVisibility(prev => !prev);
    } else if (rightIcon === 'Hide') {
      setRightIcon('Show');
      setPasswordVisibility(prev => !prev);
    }
  };

  const Icon = () => (
    <TouchableOpacity onPress={handlePasswordVisibility}>
      <Text>{rightIcon}</Text>
    </TouchableOpacity>
  );

  return {
    passwordVisibility,
    Icon,
  };
};

export default useTogglePasswordVisibility;
