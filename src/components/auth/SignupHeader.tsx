import React, { ReactNode } from 'react';
import { Text, View } from 'react-native';

interface SignupHeaderProps {
  title: string;
  subtitle: string;
  description: ReactNode;
}

const SignupHeader: React.FC<SignupHeaderProps> = ({ 
  title, 
  subtitle, 
  description 
}) => {
  return (
    <View className="px-6 pt-20 pb-6">
      <Text className="text-teal-600 text-5xl font-bold mb-1 leading-tight">
        {title}
      </Text>
      <Text className="text-teal-600 text-2xl font-medium">
        {subtitle}
      </Text>
      <Text className="text-gray-700 text-base mt-4 leading-relaxed">
        {description}
      </Text>
    </View>
  );
};

export default SignupHeader;
