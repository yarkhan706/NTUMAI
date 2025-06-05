// screens/home/HomeScreen.tsx
import { View, Text, ScrollView, TouchableOpacity, TextInput, Image, Dimensions } from 'react-native';
import { MapPin, Search, Bell, User, MessageCircleQuestion, Navigation } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import AppText from '../../components/AppText';

const { width } = Dimensions.get('window');

// Home Screen Component
const HomeScreen = () => {
  const navigation = useNavigation();
  
  return (
    <ScrollView className='flex-1 bg-gray-50'>
      {/* Header */}
      <View className='bg-teal-500 pt-5 pb-4 px-4'>
        <View className='flex-row items-center justify-between mb-4'>
          <View className='flex-row items-center flex-1'>
            <MapPin size={16} color="white" />
            <AppText className='text-white ml-2 text-xs font-medium' style={{fontFamily: 'Ubuntu_Medium'}} numberOfLines={1}>
              ZA1893, Mulungushi, Lusaka Zambia
            </AppText>
          </View>
          <View className='flex-row gap-3'>
            <TouchableOpacity>
              <MessageCircleQuestion size={20} color="white" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Bell size={20} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <User size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Search Bar */}
        <View className='bg-white rounded-full px-4 py-3 flex-row items-center shadow-sm'>
          <Search size={18} color="#6B7280" />
          <TextInput
            placeholder="Search for food, groceries, etc..."
            className='flex-1 ml-3 text-gray-700 text-sm'
            placeholderTextColor="#9CA3AF"
          />
        </View>
      </View>

      {/* Get Ready Section */}
      <View className='mx-4 mt-6 mb-6'>
        <View className='bg-teal-500 rounded-2xl p-5 flex-row items-center justify-between shadow-sm'>
          <View className='flex-1'>
            <AppText className='text-yellow-400 text-xl font-extrabold mb-1' style={{fontFamily: 'Ubuntu_ExtraBold'}}>
              Get ready,
            </AppText>
            <AppText className='text-yellow-400 text-xl font-extrabold mb-4' style={{fontFamily: 'Ubuntu_ExtraBold'}}>
              Move on!
            </AppText>
            <View className='bg-yellow-400 flex-row items-center justify-center rounded-full w-20 h-20'>
              <View className='bg-teal-500 rounded-full w-14 h-14 items-center justify-center'>
                <AppText className='text-white text-lg font-bold' style={{fontFamily: 'Ubuntu_Bold'}}>10</AppText>
                <AppText className='text-white text-xs font-medium' style={{fontFamily: 'Ubuntu_Medium'}}>min</AppText>
              </View>
            </View>
          </View>
          <View className='items-center'>
            <View className='w-32 h-16 items-center justify-center mb-4'>
              <Image 
                source={require('../../assets/otw.png')} 
                resizeMode='contain' 
                className='w-28 h-14' 
              />
            </View>
            <TouchableOpacity className='bg-white rounded-full px-6 py-2 shadow-sm'>
              <AppText className='text-teal-500 text-sm font-semibold' style={{fontFamily: 'Ubuntu_Medium'}}>Book now</AppText>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* What are you thinking? */}
      <View className='px-4 mb-6'>
        <AppText className='text-gray-800 text-lg font-semibold mb-4' style={{fontFamily: 'Ubuntu_Medium'}}>
          What are you thinking?
        </AppText>
        <View className='flex-row flex-wrap gap-2'>
          <TouchableOpacity className='flex-1 mr-1 mb-2' style={{ minWidth: (width - 36) / 2 - 4 }}>
            <View className='bg-amber-900 rounded-xl p-4 h-20 justify-end relative overflow-hidden'>
              <Image 
                source={{ uri: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=200&h=200&fit=crop&crop=center' }}
                className='absolute inset-0 w-full h-full opacity-30'
                resizeMode='cover'
              />
              <AppText className='text-white font-semibold text-sm' style={{fontFamily: 'Ubuntu_Medium'}}>Last Delivery</AppText>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className='flex-1 ml-1 mb-2' style={{ minWidth: (width - 36) / 2 - 4 }}>
            <View className='bg-amber-800 rounded-xl p-4 h-20 justify-end relative overflow-hidden'>
              <Image 
                source={{ uri: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=200&h=200&fit=crop&crop=center' }}
                className='absolute inset-0 w-full h-full opacity-30'
                resizeMode='cover'
              />
              <AppText className='text-white font-semibold text-sm' style={{fontFamily: 'Ubuntu_Medium'}}>Latest</AppText>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className='flex-1 mr-1' style={{ minWidth: (width - 36) / 2 - 4 }}>
            <View className='bg-amber-700 rounded-xl p-4 h-20 justify-end relative overflow-hidden'>
              <Image 
                source={{ uri: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=200&h=200&fit=crop&crop=center' }}
                className='absolute inset-0 w-full h-full opacity-30'
                resizeMode='cover'
              />
              <AppText className='text-white font-semibold text-sm' style={{fontFamily: 'Ubuntu_Medium'}}>Trending</AppText>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className='flex-1 ml-1' style={{ minWidth: (width - 36) / 2 - 4 }}>
            <View className='bg-yellow-600 rounded-xl p-4 h-20 justify-end relative overflow-hidden'>
              <Image 
                source={{ uri: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=200&h=200&fit=crop&crop=center' }}
                className='absolute inset-0 w-full h-full opacity-30'
                resizeMode='cover'
              />
              <AppText className='text-white font-semibold text-sm' style={{fontFamily: 'Ubuntu_Medium'}}>New Stores</AppText>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* Track your Order */}
      <View className='px-4 mb-20'>
        <AppText className='text-gray-800 text-lg font-semibold mb-4' style={{fontFamily: 'Ubuntu_Medium'}}>
          Track your Order
        </AppText>
        <View className='bg-white rounded-2xl overflow-hidden shadow-sm'>
          <View className='flex-row'>
            <View className='bg-teal-500 p-4 flex-1'>
              <AppText className='text-white text-sm font-semibold mb-1' style={{fontFamily: 'Ubuntu_Medium'}}>Traveling to</AppText>
              <AppText className='text-white text-xs mb-2 font-medium' style={{fontFamily: 'Ubuntu_Medium'}}>HIGHSCHOOL HOTEL</AppText>
              <View className='flex-row items-center mb-1'>
                <MapPin size={10} color="white" />
                <AppText className='text-white text-xs ml-1' style={{fontFamily: 'Ubuntu_Medium'}}>Food Arena</AppText>
              </View>
              <AppText className='text-white text-xs mb-2' style={{fontFamily: 'Ubuntu_Medium'}}>Lower Kabete, Kabete Park</AppText>
              <AppText className='text-white text-xs font-medium' style={{fontFamily: 'Ubuntu_Medium'}}>Delivering</AppText>
              <AppText className='text-white text-xs' style={{fontFamily: 'Ubuntu_Medium'}}>Order from Mama Pork</AppText>
              <AppText className='text-white text-xs font-medium' style={{fontFamily: 'Ubuntu_Medium'}}>Approx. 24min</AppText>
            </View>
            <View className='flex-1 p-4 items-center justify-center'>
              <View className='w-full h-24 bg-gray-100 rounded-lg items-center justify-center mb-2 relative overflow-hidden'>
                {/* Map-like background */}
                <View className='absolute inset-0 bg-teal-50'>
                  <View className='absolute top-2 left-2 w-8 h-4 bg-teal-200 rounded opacity-60' />
                  <View className='absolute top-4 right-3 w-6 h-3 bg-teal-300 rounded opacity-40' />
                  <View className='absolute bottom-3 left-4 w-10 h-2 bg-teal-200 rounded opacity-50' />
                  <View className='absolute bottom-2 right-2 w-4 h-4 bg-teal-400 rounded opacity-30' />
                </View>
                {/* Route line */}
                <View className='absolute top-6 left-8 w-16 h-0.5 bg-teal-500 transform rotate-12' />
                <View className='absolute top-8 left-16 w-12 h-0.5 bg-teal-500 transform -rotate-12' />
                {/* Delivery pin */}
                <View className='bg-red-500 w-4 h-4 rounded-full items-center justify-center'>
                  <View className='bg-white w-2 h-2 rounded-full' />
                </View>
              </View>
              <TouchableOpacity className='flex-row items-center'>
                <Navigation size={12} color="#14B8A6" />
                <Text className='text-teal-500 text-xs font-medium ml-1'>Get Directions</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      {/* Bottom Tab Space */}
      <View className='h-20' />
    </ScrollView>
  );
};

export default HomeScreen;