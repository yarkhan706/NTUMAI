import React, { useEffect } from 'react';
import { View, Image, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../App';

type SplashScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Splash'>;

const SplashScreen = () => {
  const navigation = useNavigation<SplashScreenNavigationProp>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Onboarding');
    }, 4000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View className="flex-1 bg-teal-700">
      <ImageBackground
        source={require('../assets/splash_style.png')}
        className="flex-1 absolute top-0 left-0 w-full h-full"
        resizeMode="cover"
        style={{ opacity: 0.1 }}
      />
      <View className="flex-1 justify-center items-center">
        <View className="p-4 rounded-lg">
          <Image
            source={require('../assets/splash_logo.png')}
            className="w-40 h-40"
            resizeMode="contain"
          />
        </View>
      </View>
      <StatusBar style="light" />
    </View>
  );
};

export default SplashScreen;