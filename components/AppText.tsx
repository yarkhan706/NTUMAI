import { Text as RNText } from 'react-native';
import React from 'react';

const AppText = ({ style, ...props }: { style?: any }) => {
  return (
    <RNText style={[{ fontFamily: 'Ubuntu-Regular' }, style]} {...props} />
  );
};

export default AppText;
