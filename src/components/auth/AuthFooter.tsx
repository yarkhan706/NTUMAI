import React from 'react';
import { Pressable, Text, View } from 'react-native';

interface AuthFooterProps {
  questionText: string;
  actionText: string;
  onPress: () => void;
}

const AuthFooter: React.FC<AuthFooterProps> = ({
  questionText,
  actionText,
  onPress,
}) => {
  return (
    <View className="px-6 pb-12">
      <Pressable onPress={onPress}>
        <Text className="text-gray-600 text-base text-center leading-relaxed">
          {questionText}{' '}
          <Text className="text-teal-600 font-bold">{actionText}</Text>
        </Text>
      </Pressable>
    </View>
  );
};

export default AuthFooter;
