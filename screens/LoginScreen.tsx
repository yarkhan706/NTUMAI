// SelectMethodScreen.tsx
import React, { useState } from 'react';
import { View, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../App';

// Import reusable components
import AuthHeader from '../src/components/auth/AuthHeader';
import AuthMethodTabs from '../src/components/auth/AuthMethodTabs';
import AuthInput from '../src/components/auth/AuthInput';
import AuthButton from '../src/components/auth/AuthButton';
import SocialAuth from '../src/components/auth/SocialAuth';
import AuthFooter from '../src/components/auth/AuthFooter';

type SelectMethodScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'SelectMethod'>;

const LoginScreen = () => {
  const navigation = useNavigation<SelectMethodScreenNavigationProp>();
  const [selectedMethod, setSelectedMethod] = useState<'phone' | 'email'>('phone');
  const [inputValue, setInputValue] = useState('');

  const handleMethodChange = (method: 'phone' | 'email') => {
    setSelectedMethod(method);
    setInputValue('');
  };

  const handleNext = () => {
    if (!inputValue) return;

    // Special cases for navigation
    if (selectedMethod === 'phone') {
      if (inputValue === '0000') {
        navigation.navigate('Home');
        return;
      } else if (inputValue === '1111') {
        navigation.navigate('DriverHome');
        return;
      } else if (inputValue === '2222') {
        navigation.navigate('AdminDashboard');
        return;
      }
    }
    
    // Default behavior for other inputs
    navigation.navigate('Otp', { method: selectedMethod, value: inputValue });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView 
        style={{ flex: 1 }} 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View className="flex-1 bg-white">
          <AuthHeader 
            title="Tiye, tiye!" 
            subtitle="Login below"
            description="Login with your phone number or email!"
          />

          <View className="flex-1 px-6 ">
            <AuthMethodTabs 
              selectedMethod={selectedMethod}
              onMethodChange={handleMethodChange}
            />

            <AuthInput 
              method={selectedMethod}
              value={inputValue}
              onChangeText={setInputValue}
            />

            <AuthButton 
              title="Login"
              onPress={handleNext}
              className="mb-10"
            />

            <SocialAuth />
          </View>

          <AuthFooter 
            questionText="Don't have an account?"
            actionText="Sign Up"
            onPress={() => navigation.navigate('SelectMethod')}
          />

          <StatusBar style="dark" />
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;