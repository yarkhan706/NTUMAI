import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';

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
          <Text className='text-teal-600 text-3xl font-bold text-left mb-2'>
            Congratulations,
          </Text>
          <Text className='text-teal-600 text-3xl font-bold text-left mb-8'>
            You are ready to start!
          </Text>
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
            <Text className='text-white text-xl font-semibold '>
              Sanka che!
            </Text>
            <Text className='text-white text-xl opacity-90'>
              What will be done?
            </Text>
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
            <Text className="text-white text-xs text-left font-medium">
            Order Deliveries
            </Text>
            <Text className="text-white text-xs opacity-80 text-left">
            within 30 min
            </Text>
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
            <Text className="text-green-700 text-xs font-medium text-left">
            Register as a biker
            </Text>
            <Text className="text-green-600 text-xs opacity-80 text-left">
            Earn money delivering orders
            </Text>
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
            <Text className='text-white text-lg font-semibold'>
              Continue
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default ContinueBoardingScreen;