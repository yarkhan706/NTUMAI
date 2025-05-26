import React from 'react';
import { Pressable, Text } from 'react-native';

interface AuthButtonProps {
  title: string;
  onPress: () => void;
  className?: string;
}

const AuthButton: React.FC<AuthButtonProps> = ({
  title,
  onPress,
  className = '',
}) => {
  return (
    <Pressable
      className={`w-full py-5 rounded-2xl bg-teal-600 elevation-1 ${className}`}
      onPress={onPress}
    >
      <Text className="text-white text-center text-lg font-bold">{title}</Text>
    </Pressable>
  );
};

export default AuthButton;
