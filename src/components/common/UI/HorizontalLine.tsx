import {View, Text} from 'react-native';
import React from 'react';
import colors from 'assets/theme/colors';

const HorizontalLine: React.FC = () => {
  return (
    <View style={{height: 1, opacity: 0.7, backgroundColor: colors.grey}} />
  );
};

export default HorizontalLine;
