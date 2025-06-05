// ContinueSignUpScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Keyboard, TouchableWithoutFeedback, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import Svg, { Path } from 'react-native-svg';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../App';

type ContinueSignUpScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'ContinueSignUp'>;

const ContinueSignUpScreen = () => {
  const navigation = useNavigation<ContinueSignUpScreenNavigationProp>();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignUp = () => {
    // TODO: Implement sign up logic
    console.log('Sign up with:', { phoneNumber, password, confirmPassword });
    navigation.navigate('Login');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="flex-1 bg-white">
        <KeyboardAvoidingView 
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          className="flex-1"
        >
        {/* Header Section */}
        <View className="items-center px-6 pt-20 pb-8">
          <Image source={require('../assets/logo_green.png')} resizeMode="contain" className="w-100 h-24 mb-6" />
          <View className="mr-24 mb-3">
          <Text className="text-teal-700 text-4xl text-left font-bold mb-2">Let's Continue,</Text>
          <Text className="text-teal-700 text-4xl text-left font-bold mb-4">almost there!</Text>
          </View>
          <Text className="text-gray-500 text-base text-center">
            Welcome, login with your password or email
          </Text>
        </View>

        {/* Form Section */}
        <View className="flex-1 px-6">
          {/* Phone Number Input */}
          <View className="mb-6">
            <View className="flex-row items-center border border-gray-200 rounded-2xl px-5 py-5 bg-gray-50">
              <Svg width={20} height={20} viewBox="0 0 24 24" fill="none" className="mr-4">
                <Path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                  stroke="#6B7280"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
              <TextInput
                className="flex-1 text-gray-800 text-base"
                placeholder="0976987372"
                placeholderTextColor="#9CA3AF"
                keyboardType="phone-pad"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>
          </View>

          {/* Password Input */}
          <View className="mb-6">
            <View className="flex-row items-center border border-gray-200 rounded-2xl px-5 py-5 bg-gray-50">
              <Svg width={20} height={20} viewBox="0 0 24 24" fill="none" className="mr-4">
                <Path
                  d="M19 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2z"
                  stroke="#6B7280"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M7 11V7a5 5 0 0 1 10 0v4"
                  stroke="#6B7280"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
              <TextInput
                className="flex-1 text-gray-800 text-base"
                placeholder="Enter your password"
                placeholderTextColor="#9CA3AF"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
                autoCorrect={false}
              />
              <Pressable onPress={togglePasswordVisibility} className="ml-2">
                <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
                  {showPassword ? (
                    <Path
                      d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"
                      stroke="#6B7280"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  ) : (
                    <>
                      <Path
                        d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                        stroke="#6B7280"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <Path
                        d="M12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"
                        stroke="#6B7280"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </>
                  )}
                  {showPassword && (
                    <Path
                      d="M1 1l22 22"
                      stroke="#6B7280"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  )}
                </Svg>
              </Pressable>
            </View>
          </View>

          {/* Confirm Password Input */}
          <View className="mb-8">
            <View className="flex-row items-center border border-gray-200 rounded-2xl px-5 py-5 bg-gray-50">
              <Svg width={20} height={20} viewBox="0 0 24 24" fill="none" className="mr-4">
                <Path
                  d="M19 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2z"
                  stroke="#6B7280"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M7 11V7a5 5 0 0 1 10 0v4"
                  stroke="#6B7280"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
              <TextInput
                className="flex-1 text-gray-800 text-base"
                placeholder="Repeat your password"
                placeholderTextColor="#9CA3AF"
                secureTextEntry={!showConfirmPassword}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                autoCapitalize="none"
                autoCorrect={false}
              />
              <Pressable onPress={toggleConfirmPasswordVisibility} className="ml-2">
                <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
                  {showConfirmPassword ? (
                    <Path
                      d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"
                      stroke="#6B7280"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  ) : (
                    <>
                      <Path
                        d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                        stroke="#6B7280"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <Path
                        d="M12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"
                        stroke="#6B7280"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </>
                  )}
                  {showConfirmPassword && (
                    <Path
                      d="M1 1l22 22"
                      stroke="#6B7280"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  )}
                </Svg>
              </Pressable>
            </View>
          </View>

          {/* Sign Up Button */}
          <Pressable
            className="w-full py-5 rounded-2xl mb-8 bg-teal-600 "
            onPress={handleSignUp}
          >
            <View className="flex-row items-center justify-center">
              <Svg width={20} height={20} viewBox="0 0 24 24" fill="none" className="mr-2">
                <Path
                  d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M8.5 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M20 8v6M23 11h-6"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
              <Text className="text-white text-center text-lg font-semibold">Sign Up</Text>
            </View>
          </Pressable>

          {/* Divider */}
          <View className="flex-row items-center mb-8">
            <View className="flex-1 h-px bg-gray-200" />
            <Text className="mx-6 text-gray-400 text-sm font-medium">OR</Text>
            <View className="flex-1 h-px bg-gray-200" />
          </View>

          {/* Social Icons */}
          <View className="flex-row justify-center gap-6 mb-8">
            {/* Google */}
            <Pressable className="w-12 h-12 items-center justify-center rounded-2xl bg-white border border-gray-200">
              <Svg width={24} height={24} viewBox="0 0 533.5 544.3">
                <Path
                  fill="#4285F4"
                  d="M533.5 278.4c0-17.4-1.6-34.1-4.7-50.2H272.1v95h146.9c-6.4 34.5-25.1 63.7-53.4 83.1v68h86.3c50.6-46.7 81.6-115.5 81.6-195.9z"
                />
                <Path
                  fill="#34A853"
                  d="M272.1 544.3c72.6 0 133.6-24 178.2-65.3l-86.3-68c-24 16.1-54.7 25.4-91.9 25.4-70.6 0-130.5-47.7-151.9-111.7H29.2v70.2c44.7 89.6 137 149.4 242.9 149.4z"
                />
                <Path
                  fill="#FBBC04"
                  d="M120.2 324.7c-10.3-30.3-10.3-62.9 0-93.2V161.3H29.2c-31.2 62.3-31.2 135.7 0 198z"
                />
                <Path
                  fill="#EA4335"
                  d="M272.1 107.7c39.5 0 75 13.6 102.9 40.5l77.1-77.1C405.7 25 344.7 0 272.1 0 166.2 0 73.9 59.7 29.2 149.4l91 70.2c21.4-64 81.3-111.9 151.9-111.9z"
                />
              </Svg>
            </Pressable>

            {/* Facebook */}
            <Pressable className="w-12 h-12 items-center justify-center rounded-2xl bg-white border border-gray-200">
              <Svg width={24} height={24} viewBox="0 0 24 24" fill="#1877F2">
                <Path d="M22.675 0h-21.35C.597 0 0 .6 0 1.33v21.34C0 23.4.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.894-4.788 4.66-4.788 1.325 0 2.464.099 2.795.144v3.24h-1.918c-1.506 0-1.797.716-1.797 1.766v2.315h3.59l-.467 3.622h-3.123V24h6.116C23.403 24 24 23.4 24 22.67V1.33C24 .6 23.403 0 22.675 0z" />
              </Svg>
            </Pressable>

            {/* Apple */}
            <Pressable className="w-12 h-12 items-center justify-center rounded-2xl bg-white border border-gray-200">
              <Svg width={24} height={24} viewBox="0 0 24 24" fill="black">
                <Path d="M16.365 1.43c0 1.14-.467 2.23-1.26 3.04-.78.82-2.06 1.45-3.15 1.34a3.26 3.26 0 0 1-.03-.4c0-1.12.51-2.28 1.29-3.07.78-.79 2.07-1.36 3.15-1.37.02.13.04.26.04.4zm2.91 16.14c-.25.57-.51 1.13-.84 1.64-.66 1.01-1.45 2.01-2.57 2.02-1 .01-1.3-.65-2.71-.64-1.4.01-1.74.65-2.74.64-1.12-.01-1.96-1.1-2.62-2.1-1.79-2.61-3.16-7.39-1.32-10.63.91-1.59 2.54-2.6 4.3-2.62 1.05-.02 2.05.7 2.71.7.66 0 1.88-.86 3.17-.73.54.02 2.07.22 3.06 1.67-.08.05-1.82 1.06-1.81 3.15 0 2.49 2.23 3.33 2.28 3.35-.03.09-.36 1.27-1.17 2.53z" />
              </Svg>
            </Pressable>
          </View>
      </View>
          </KeyboardAvoidingView>

          {/* Footer */}
          <View className="items-center pb-8">
            <Pressable onPress={() => navigation.navigate('Login')}>
              <Text className="text-gray-600 text-base text-center">
                Already have an Account? <Text className="text-teal-600 font-semibold">Log In</Text>
              </Text>
            </Pressable>
          </View>

        <StatusBar style="dark" />
        </View>
    </TouchableWithoutFeedback>
  );
};

export default ContinueSignUpScreen;