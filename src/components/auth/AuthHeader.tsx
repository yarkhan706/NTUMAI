import React from 'react';
import { Text, View } from 'react-native';
import AppText from '../../../components/AppText';

interface AuthHeaderProps {
  title: string;
  subtitle: string;
  description: string;
}

const AuthHeader: React.FC<AuthHeaderProps> = ({ title, subtitle, description }) => {
  return (
    <View className="px-6 pt-20 pb-6 font-ubuntu">
      <AppText className="text-teal-600 text-5xl font-ubuntu-bold mb-1 leading-tight" style={{ fontFamily: 'Ubuntu-Bold' }}>{title}</AppText>
      <AppText className="text-teal-600 text-2xl font-ubuntu-medium" style={{ fontFamily: 'Ubuntu-Medium' }}>{subtitle}</AppText>
      <AppText className="text-gray-700 text-base mt-4 leading-relaxed" style={{ fontFamily: 'Ubuntu-Regular' }}>
        {description}
      </AppText>
    </View>
  );
};

export default AuthHeader;
