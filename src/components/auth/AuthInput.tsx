import React from 'react';
import { Text, TextInput, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface AuthInputProps {
  method: 'phone' | 'email';
  value: string;
  onChangeText: (text: string) => void;
}

const AuthInput: React.FC<AuthInputProps> = ({ method, value, onChangeText }) => {
  return (
    <View className="w-full flex-row items-center rounded-full px-5 py-5 mb-10 bg-gray-50">
      {method === 'phone' ? (
        <View className="flex-row items-center">
          <Text className="text-black font-semibold text-base mr-3">+260</Text>
          <View className="h-6 w-px bg-gray-300  mr-4" />
        </View>
      ) : (
        <View className="mr-4">
          <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
            <Path
              d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
              stroke="#6B7280"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path
              d="M22 6L12 13L2 6"
              stroke="#6B7280"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        </View>
      )}
      <TextInput
        className="flex-1 text-black text-base font-medium rounded-full"
        placeholder={
          method === 'phone' ? 'Enter Your mobile number' : 'Enter Your email address'
        }
        placeholderTextColor="#9CA3AF"
        keyboardType={method === 'phone' ? 'phone-pad' : 'email-address'}
        value={value}
        onChangeText={onChangeText}
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
};

export default AuthInput;
