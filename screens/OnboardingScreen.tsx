import React from 'react';
import { View, Image, Text, Pressable, ImageBackground, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../App';
import { LinearGradient } from 'expo-linear-gradient';

type OnboardingScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Onboarding'>;

const OnboardingScreen = () => {
  const navigation = useNavigation<OnboardingScreenNavigationProp>();

  return (
    <View className="flex-1">
      <View className="flex-1 bg-white justify-center items-center p-6">
        <Image
          source={require('../assets/onboarding_image.png')}
          className="w-70 h-64 mb-6"
          resizeMode="contain"
        />
        <Text className="text-teal-700 text-4xl font-bold text-left mb-4">
          Quick Deliveries at your fingertips
        </Text>
        <Text className="text-gray-600 text-base text-left mb-6">
          Find your favorite Meals at the best prices with exclusive deals only on alimnts app.
        </Text>
      </View>
      <View className="relative h-1/5 bg-teal-700">
        <ImageBackground
          source={require('../assets/splash_style.png')}
          className="absolute top-0 left-0 w-full h-full"
          resizeMode="cover"
          style={{ opacity: 0.1 }}
        />
        <LinearGradient
          colors={['rgb(255, 255, 255)', 'transparent']}
          locations={[0, 1]}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '100%',
            zIndex: 1
          }}
        />

        <View className="flex-1 gap-2 p-6 justify-end z-10">
          <Pressable
            className="bg-white w-full py-4 rounded-lg mb-2"
            onPress={() => navigation.navigate('Login')}
          >
            <Text className="text-teal-700 text-center text-lg font-semibold">Login</Text>
          </Pressable>
          <Pressable
            className="bg-black w-full py-4 rounded-lg"
            onPress={() => navigation.navigate('SelectMethod')}
          >
            <Text className="text-white text-center text-lg font-semibold">Create an account</Text>
          </Pressable>
        </View>
      </View>
      <StatusBar style="dark" />
    </View>
  );
};

export default OnboardingScreen;