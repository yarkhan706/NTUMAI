import React, { useState } from 'react';
import { View, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../App';

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

    if (selectedMethod === 'phone') {
      if (inputValue === '0000') return navigation.navigate('Home');
      if (inputValue === '1111') return navigation.navigate('DriverHome');
      if (inputValue === '3333') return navigation.navigate('VendorDashboard');
    }

    navigation.navigate('Otp', { method: selectedMethod, value: inputValue });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="flex-1 bg-white font-ubuntu">
        <StatusBar style="dark" />

        <AuthHeader 
          title="Tiye, tiye!" 
          subtitle="Login below"
          description="Login with your phone number or email!"
        />

        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          className="flex-1"
        >
          <ScrollView
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{ flexGrow: 1 }}
          >
            <View className="flex-1 px-6 font-ubuntu">
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
          </ScrollView>
        </KeyboardAvoidingView>

        {/* Footer should stay outside the keyboard area */}
        <AuthFooter 
          questionText="Don't have an account?"
          actionText="Sign Up"
          onPress={() => navigation.navigate('SelectMethod')}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
