import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import AppText from '../components/AppText';

const ContinueBoardingScreen = ({ navigation }) => {
    const [selectedOption, setSelectedOption] = useState('order');
    // Function to handle option selection
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };
  return (
    <ImageBackground 
      source={require('../assets/splash_style.png')} 
      className='flex-1'
      resizeMode="cover"
    >
      <View className='flex-1 bg-white'>
        {/* Header with logo */}
        <View className='items-center mt-16'>
          <Image 
            source={require('../assets/logo_green.png')} 
            resizeMode="contain" 
            className='w-100 h-50 mb-10 mt-10'
          />
        </View>

        {/* Congratulations text */}
        <View className='px-6 mb-8'>
          <AppText className='text-teal-600 text-3xl font-bold text-left mb-2' style={{fontFamily:'Ubuntu_Bold'}}>
            Congratulations,
          </AppText>
          <AppText className='text-teal-600 text-3xl font-bold text-left mb-8' style={{fontFamily:'Ubuntu_Bold'}}>
            You are ready to start!
          </AppText>
        </View>

        {/* Sanka che section */}
        <View className='mb-6'>
            <ImageBackground
              source={require('../assets/splash_style.png')} 
              className='h-32'
              resizeMode="cover"
              style={{ opacity: 1 }}
            >
          <View className='bg-teal-500/70  p-10 mb-4'>
            <AppText className='text-white text-xl font-semibold ' style={{fontFamily:'Ubuntu_Bold'}}>
              Sanka che!
            </AppText>
            <AppText className='text-white text-xl opacity-90' style={{fontFamily:'Ubuntu_Bold'}}>
              What will be done?
            </AppText>
          </View>
          </ImageBackground>
        </View>

      {/* Two option buttons */}
    <View className="flex-row mx-6 mb-8 mt-20 gap-2 space-x-3">
    {/* Order Deliveries Option */}
    <TouchableOpacity
        className="flex-1 bg-teal-500 rounded-xl p-6"
        onPress={() => handleOptionSelect('order')}
    >
        <View className="flex-row justify-between items-center w-full">
        <View>
            <AppText className="text-white text-xs text-left font-medium" style={{fontFamily:'Ubuntu_Bold'}}>
            Order Deliveries
            </AppText>
            <AppText className="text-white text-xs opacity-80 text-left" style={{fontFamily:'Ubuntu_Bold'}}>
            within 30 min
            </AppText>
        </View>
        <View className="bg-white rounded-full w-6 h-6 items-center justify-center">
            <View
            className={`rounded-full ${
                selectedOption === 'order' ? 'bg-teal-800 w-4 h-4' : ''
            }`}
            />
        </View>
        </View>
    </TouchableOpacity>

    {/* Register as a Biker Option */}
    <TouchableOpacity
        className="flex-1 bg-yellow-100 rounded-xl p-8"
        onPress={() => handleOptionSelect('register')}
    >
        <View className="flex-row justify-between items-center w-full">
        <View>
            <AppText className="text-green-700 text-xs font-medium text-left" style={{fontFamily:'Ubuntu_Bold'}}>
            Register as a biker
            </AppText>
            <AppText className="text-green-600 text-xs opacity-80 text-left" style={{fontFamily:'Ubuntu_Bold'}}>
            Earn money delivering orders
            </AppText>
        </View>
        <View className="bg-white rounded-full w-6 h-6 items-center justify-center">
            <View
            className={`rounded-full ${
                selectedOption === 'register' ? 'bg-green-600 w-4 h-4' : ''
            }`}
            />
        </View>
        </View>
    </TouchableOpacity>
    </View>
        {/* Continue button */}
        <View className='mx-6 mt-6'>
          <TouchableOpacity 
            className='bg-teal-500 rounded-xl py-4 items-center'
            onPress={() => navigation.navigate('Login')}
          >
            <AppText className='text-white text-lg font-semibold' style={{fontFamily:'Ubuntu_Bold'}}>
              Continue
            </AppText>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default ContinueBoardingScreen;