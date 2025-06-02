import React from 'react';
import { Pressable, Text } from 'react-native';
import AppText from '../../../components/AppText';

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
      className={`w-full py-5 rounded-2xl bg-teal-600 font-ubuntu elevation-1 ${className}`}
      onPress={onPress}
    >
      <AppText className="text-white text-center text-lg font-bold">{title}</AppText>
    </Pressable>
  );
};

export default AuthButton;
