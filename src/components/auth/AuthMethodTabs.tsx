import React from 'react';
import { Pressable, Text, View } from 'react-native';

interface AuthMethodTabsProps {
  selectedMethod: 'phone' | 'email';
  onMethodChange: (method: 'phone' | 'email') => void;
}

const AuthMethodTabs: React.FC<AuthMethodTabsProps> = ({
  selectedMethod,
  onMethodChange,
}) => {
  return (
    <View className="flex-row w-full mb-8 rounded-2xl bg-gray-100 p-1.5">
      <Pressable
        className={`flex-1 py-4 rounded-xl items-center ${
          selectedMethod === 'phone' ? 'bg-white elevation-2' : ''
        }`}
        onPress={() => onMethodChange('phone')}
      >
        <Text
          className={`text-base font-semibold ${
            selectedMethod === 'phone' ? 'text-teal-600' : 'text-gray-500'
          }`}
        >
          Phone Number
        </Text>
      </Pressable>
      <Pressable
        className={`flex-1 py-4 rounded-xl items-center ${
          selectedMethod === 'email' ? 'bg-white elevation-2' : ''
        }`}
        onPress={() => onMethodChange('email')}
      >
        <Text
          className={`text-base font-semibold ${
            selectedMethod === 'email' ? 'text-teal-600' : 'text-gray-500'
          }`}
        >
          Email
        </Text>
      </Pressable>
    </View>
  );
};

export default AuthMethodTabs;
