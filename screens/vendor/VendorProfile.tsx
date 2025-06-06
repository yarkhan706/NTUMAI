// VendorProfile.tsx
import React, { useState } from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Text from '../../components/Text';

export function VendorProfile() {
  const [isEditing, setIsEditing] = useState(false);

  const profileData = {
    name: 'Denwate Restaurant',
    type: 'Restaurant',
    rating: 4.5,
    reviews: 145,
    address: '123 Main Street, City',
    phone: '+1 234 567 8900',
    email: 'vendor@denwate.com',
  };

  const restaurantImage =
    'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80'; // replace with your Unsplash URL

  return (
    <View className="flex-1 bg-gray-50">
      <StatusBar barStyle="dark-content" />

      {/* Splash Image from Unsplash */}
      <View>
        <Image
          source={{ uri: restaurantImage }}
          className="w-full h-64"
          resizeMode="cover"
        />
        {/* Back Button */}
        <TouchableOpacity
          className="absolute top-5 left-4 bg-white rounded-full p-2"
          onPress={() => console.log('Back pressed')}
        >
          <Ionicons name="arrow-back" size={24} color="#10B981" />
        </TouchableOpacity>
      </View>

      {/* Profile Info */}
      <ScrollView className="flex-1 -mt-10 rounded-t-3xl bg-white p-4">
        <View className="items-center">
          <Image
            source={{ uri: restaurantImage }}
            className="w-24 h-24 rounded-full border-4 border-white mb-3"
          />
          <Text style={{fontFamily:'Ubuntu-Medium'}} className="text-2xl font-bold text-gray-900">{profileData.name}</Text>
          <View className="flex-row items-center mt-1">
            <Ionicons name="star" size={16} color="#F59E0B" />
            <Text style={{fontFamily:'Ubuntu-Regular'}} className="text-sm text-gray-600 ml-1">
              {profileData.rating} ({profileData.reviews} reviews)
            </Text>
          </View>
          <TouchableOpacity
            className="bg-emerald-600 px-4 py-2 rounded-lg mt-2"
            onPress={() => setIsEditing(!isEditing)}
          >
            <Text style={{fontFamily:'Ubuntu-Regular'}} className="text-white font-medium">
              {isEditing ? 'Save Profile' : 'Edit Profile'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Contact Info */}
        <View className="mt-6 space-y-4">
          <View className="flex-row items-center">
            <Ionicons name="location-outline" size={20} color="#6B7280" />
            <Text style={{fontFamily:'Ubuntu-Regular'}} className="text-gray-700 ml-3 flex-1">{profileData.address}</Text>
          </View>
          <View className="flex-row items-center">
            <Ionicons name="call-outline" size={20} color="#6B7280" />
            <Text style={{fontFamily:'Ubuntu-Regular'}} className="text-gray-700 ml-3">{profileData.phone}</Text>
          </View>
          <View className="flex-row items-center">
            <Ionicons name="mail-outline" size={20} color="#6B7280" />
            <Text style={{fontFamily:'Ubuntu-Regular'}} className="text-gray-700 ml-3">{profileData.email}</Text>
          </View>
        </View>

        {/* Menu Items */}
        <View className="bg-gray-50 rounded-xl shadow-sm mt-6 mb-6">
          {[
            { title: 'Business Hours', icon: 'time-outline' },
            { title: 'Payment Methods', icon: 'card-outline' },
            { title: 'Delivery Zones', icon: 'location-outline' },
            { title: 'Settings', icon: 'settings-outline' },
            { title: 'Help & Support', icon: 'help-circle-outline' },
          ].map((item, index) => (
            <TouchableOpacity
              key={index}
              className={`p-4 flex-row items-center ${
                index < 4 ? 'border-b border-gray-100' : ''
              }`}
            >
              <Ionicons name={item.icon} size={20} color="#6B7280" />
              <Text style={{fontFamily:'Ubuntu-Regular'}} className="text-gray-900 ml-4 flex-1">{item.title}</Text>
              <Ionicons name="chevron-forward" size={16} color="#9CA3AF" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Logout */}
        <TouchableOpacity className="bg-red-50 rounded-xl p-4 flex-row items-center justify-center">
          <Ionicons name="log-out-outline" size={20} color="#EF4444" />
          <Text style={{fontFamily:'Ubuntu-Regular'}} className="text-red-600 font-medium ml-2">Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
