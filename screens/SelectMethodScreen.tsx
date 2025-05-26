import React, { useState } from 'react';
import { View, Text, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../App';

// Import reusable components
import SignupHeader from '../src/components/auth/SignupHeader';
import AuthMethodTabs from '../src/components/auth/AuthMethodTabs';
import AuthInput from '../src/components/auth/AuthInput';
import AuthButton from '../src/components/auth/AuthButton';
import SocialAuth from '../src/components/auth/SocialAuth';
import AuthFooter from '../src/components/auth/AuthFooter';

type SelectMethodScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'SelectMethod'>;

const SelectMethodScreen = () => {
  const navigation = useNavigation<SelectMethodScreenNavigationProp>();
  const [selectedMethod, setSelectedMethod] = useState<'phone' | 'email'>('phone');
  const [inputValue, setInputValue] = useState('');

  const handleMethodChange = (method: 'phone' | 'email') => {
    setSelectedMethod(method);
    setInputValue('');
  };

  const handleNext = () => {
    if (inputValue) {
      navigation.navigate('Otp', { method: selectedMethod, value: inputValue });
    }
  };

  const description = (
    <>
      We will send you a <Text className="font-semibold text-black">One Time Password(OTP)</Text> on this {selectedMethod === 'phone' ? 'mobile number' : 'email address'}.
    </>
  );

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView 
        style={{ flex: 1 }} 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View className="flex-1 bg-white">
          <SignupHeader 
            title="Get Started!"
            subtitle="Verify to Sign up"
            description={description}
          />

          <View className="flex-1 px-6">
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
              title="Send OTP"
              onPress={handleNext}
              className="mb-10"
            />

            <SocialAuth />
          </View>

          <AuthFooter 
            questionText="Already have an account?"
            actionText="Login to Continue"
            onPress={() => navigation.navigate('Login')}
          />

          <StatusBar style="dark" />
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default SelectMethodScreen;