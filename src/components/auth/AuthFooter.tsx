import React from 'react';
import { Pressable, Text, View } from 'react-native';
import AppText from '../../../components/AppText';

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
    <View className="px-6 pb-12 font-ubuntu">
      <Pressable onPress={onPress}>
        <AppText className="text-gray-600 text-base text-center leading-relaxed">
          {questionText}{' '}
          <AppText className="text-teal-600 font-ubuntu-medium">{actionText}</AppText>
        </AppText>
      </Pressable>
    </View>
  );
};

export default AuthFooter;
