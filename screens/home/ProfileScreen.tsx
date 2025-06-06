// screens/home/ProfileScreen.tsx
import React, { useState } from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  TouchableOpacity, 
  Image, 
  Alert,
  Switch,
  Modal,
  TextInput
} from 'react-native';
import { 
  User, 
  Settings, 
  Bell, 
  Shield, 
  HelpCircle, 
  LogOut,
  ChevronRight,
  Edit3,
  Camera,
  Mail,
  Phone,
  MapPin,
  Calendar
} from 'lucide-react-native';
import AppText from '../../components/AppText';

interface ProfileData {
  name: string;
  email: string;
  phone: string;
  location: string;
  joinDate: string;
  avatar: string;
  bio: string;
  occupation: string;
  company: string;
  website: string;
  dateOfBirth: string;
}

interface SettingsItem {
  id: string;
  title: string;
  icon: any;
  type: 'navigation' | 'toggle' | 'action';
  value?: boolean;
  onPress?: () => void;
}

export default function ProfileScreen() {
  const [profileData, setProfileData] = useState<ProfileData>({
    name: 'Sarah Martinez',
    email: 'sarah.martinez@email.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    joinDate: 'Member since March 2023',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    bio: 'UX Designer passionate about creating beautiful and functional user experiences. Love traveling and photography.',
    occupation: 'Senior UX Designer',
    company: 'TechCorp Inc.',
    website: 'www.sarahdesigns.com',
    dateOfBirth: 'March 15, 1990'
  });

  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editingField, setEditingField] = useState<keyof ProfileData | null>(null);
  const [editValue, setEditValue] = useState('');
  const [settingsModalVisible, setSettingsModalVisible] = useState(false);
  const [privacyModalVisible, setPrivacyModalVisible] = useState(false);
  const [helpModalVisible, setHelpModalVisible] = useState(false);
  const [faceId, setFaceId] = useState(true);
  const [locationAccess, setLocationAccess] = useState(true);
  const [dataSharing, setDataSharing] = useState(false);

  const settingsItems: SettingsItem[] = [
    {
      id: 'notifications',
      title: 'Push Notifications',
      icon: Bell,
      type: 'toggle',
      value: notifications,
      onPress: () => setNotifications(!notifications)
    },
    {
      id: 'privacy',
      title: 'Privacy & Security',
      icon: Shield,
      type: 'navigation',
      onPress: () => setPrivacyModalVisible(true)
    },
    {
      id: 'settings',
      title: 'App Settings',
      icon: Settings,
      type: 'navigation',
      onPress: () => setSettingsModalVisible(true)
    },
    {
      id: 'help',
      title: 'Help & Support',
      icon: HelpCircle,
      type: 'navigation',
      onPress: () => setHelpModalVisible(true)
    },
    {
      id: 'logout',
      title: 'Sign Out',
      icon: LogOut,
      type: 'action',
      onPress: () => Alert.alert(
        'Sign Out',
        'Are you sure you want to sign out?',
        [
          { text: 'Cancel', style: 'cancel' },
          { text: 'Sign Out', style: 'destructive', onPress: () => console.log('Signing out...') }
        ]
      )
    }
  ];

  const handleEditProfile = (field: keyof ProfileData) => {
    setEditingField(field);
    setEditValue(profileData[field]);
    setEditModalVisible(true);
  };

  const saveEdit = () => {
    if (editingField) {
      setProfileData(prev => ({
        ...prev,
        [editingField]: editValue
      }));
    }
    setEditModalVisible(false);
    setEditingField(null);
    setEditValue('');
  };

  const handleAvatarChange = () => {
    Alert.alert(
      'Change Profile Photo',
      'Choose an option',
      [
        { text: 'Camera', onPress: () => console.log('Open camera') },
        { text: 'Gallery', onPress: () => console.log('Open gallery') },
        { text: 'Cancel', style: 'cancel' }
      ]
    );
  };

  const renderSettingsItem = (item: SettingsItem) => {
    const IconComponent = item.icon;
    
    return (
      <TouchableOpacity
        key={item.id}
        className="flex-row items-center justify-between py-4 px-6 bg-white border-b border-gray-100"
        onPress={item.onPress}
        activeOpacity={0.7}
      >
        <View className="flex-row items-center flex-1">
          <View className="w-10 h-10 bg-gray-100 rounded-full items-center justify-center mr-4">
            <IconComponent size={20} color="#6B7280" />
          </View>
          <AppText className="text-base font-medium text-gray-800 flex-1" style={{fontFamily: 'Ubuntu-Bold'}}>
            {item.title}
          </AppText>
        </View>
        
        {item.type === 'toggle' && (
          <Switch
            value={item.value}
            onValueChange={item.onPress}
            trackColor={{ false: '#E5E7EB', true: '#14B8A6' }}
            thumbColor="#FFFFFF"
          />
        )}
        
        {(item.type === 'navigation' || item.type === 'action') && (
          <ChevronRight size={20} color="#9CA3AF" />
        )}
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="bg-teal-500 pt-12 pb-8 px-6">
        <AppText className="text-white text-2xl font-bold text-center" style={{fontFamily: 'Ubuntu-Bold'}}>Profile</AppText>
      </View>

      {/* Profile Card */}
      <View className="bg-white mx-4 -mt-4 rounded-2xl shadow-sm border border-gray-100 p-6">
        {/* Avatar Section */}
        <View className="items-center mb-6">
          <View className="relative">
            <Image
              source={{ uri: profileData.avatar }}
              className="w-24 h-24 rounded-full"
              resizeMode="cover"
            />
            <TouchableOpacity
              className="absolute -bottom-2 -right-2 bg-teal-500 w-8 h-8 rounded-full items-center justify-center"
              onPress={handleAvatarChange}
              activeOpacity={0.8}
            >
              <Camera size={16} color="white" />
            </TouchableOpacity>
          </View>
          
          <AppText className="text-xl font-bold text-gray-800 mt-4" style={{fontFamily: 'Ubuntu-Bold'}}>
            {profileData.name}
          </AppText>
          <AppText className="text-gray-500 text-sm mt-1" style={{fontFamily: 'Ubuntu-Medium'}}>
            {profileData.joinDate}
          </AppText>
        </View>

        {/* Profile Info */}
        <View className="space-y-4">
          <TouchableOpacity
            className="flex-row items-center justify-between py-3"
            onPress={() => handleEditProfile('bio')}
            activeOpacity={0.7}
          >
            <View className="flex-row items-center flex-1">
              <User size={20} color="#6B7280" />
              <View className="ml-3 flex-1">
                <AppText className="text-sm text-gray-500" style={{fontFamily: 'Ubuntu-Medium'}}>Bio</AppText>
                <AppText className="text-base text-gray-800" numberOfLines={2} style={{fontFamily: 'Ubuntu-Medium'}}>
                  {profileData.bio}
                </AppText>
              </View>
            </View>
            <Edit3 size={16} color="#9CA3AF" />
          </TouchableOpacity>

          <TouchableOpacity
            className="flex-row items-center justify-between py-3"
            onPress={() => handleEditProfile('occupation')}
            activeOpacity={0.7}
          >
            <View className="flex-row items-center flex-1">
              <Settings size={20} color="#6B7280" />
              <View className="ml-3 flex-1">
                <AppText className="text-sm text-gray-500" style={{fontFamily: 'Ubuntu-Medium'}}>Occupation</AppText>
                <AppText className="text-base text-gray-800" numberOfLines={2} style={{fontFamily: 'Ubuntu-Medium'}}>
                  {profileData.occupation}
                </AppText>
              </View>
            </View>
            <Edit3 size={16} color="#9CA3AF" />
          </TouchableOpacity>

          <TouchableOpacity
            className="flex-row items-center justify-between py-3"
            onPress={() => handleEditProfile('company')}
            activeOpacity={0.7}
          >
            <View className="flex-row items-center flex-1">
              <Settings size={20} color="#6B7280" />
              <View className="ml-3 flex-1">
                <AppText className="text-sm text-gray-500" style={{fontFamily: 'Ubuntu-Medium'}}>Company</AppText>
                <AppText className="text-base text-gray-800" numberOfLines={2} style={{fontFamily: 'Ubuntu-Medium'}}>
                  {profileData.company}
                </AppText>
              </View>
            </View>
            <Edit3 size={16} color="#9CA3AF" />
          </TouchableOpacity>

          <TouchableOpacity
            className="flex-row items-center justify-between py-3"
            onPress={() => handleEditProfile('email')}
            activeOpacity={0.7}
          >
            <View className="flex-row items-center flex-1">
              <Mail size={20} color="#6B7280" />
              <View className="ml-3 flex-1">
                <AppText className="text-sm text-gray-500" style={{fontFamily: 'Ubuntu-Medium'}}>Email</AppText>
                <AppText className="text-base text-gray-800" numberOfLines={2} style={{fontFamily: 'Ubuntu-Medium'}}>
                  {profileData.email}
                </AppText>
              </View>
            </View>
            <Edit3 size={16} color="#9CA3AF" />
          </TouchableOpacity>

          <TouchableOpacity
            className="flex-row items-center justify-between py-3"
            onPress={() => handleEditProfile('phone')}
            activeOpacity={0.7}
          >
            <View className="flex-row items-center flex-1">
              <Phone size={20} color="#6B7280" />
              <View className="ml-3 flex-1">
                <AppText className="text-sm text-gray-500" style={{fontFamily: 'Ubuntu-Medium'}}>Phone</AppText>
                <AppText className="text-base text-gray-800" numberOfLines={2} style={{fontFamily: 'Ubuntu-Medium'}}>
                  {profileData.phone}
                </AppText>
              </View>
            </View>
            <Edit3 size={16} color="#9CA3AF" />
          </TouchableOpacity>

          <TouchableOpacity
            className="flex-row items-center justify-between py-3"
            onPress={() => handleEditProfile('location')}
            activeOpacity={0.7}
          >
            <View className="flex-row items-center flex-1">
              <MapPin size={20} color="#6B7280" />
              <View className="ml-3 flex-1">
                <AppText className="text-sm text-gray-500" style={{fontFamily: 'Ubuntu-Medium'}}>Location</AppText>
                <AppText className="text-base text-gray-800" numberOfLines={2} style={{fontFamily: 'Ubuntu-Medium'}}>
                  {profileData.location}
                </AppText>
              </View>
            </View>
            <Edit3 size={16} color="#9CA3AF" />
          </TouchableOpacity>

          <TouchableOpacity
            className="flex-row items-center justify-between py-3"
            onPress={() => handleEditProfile('dateOfBirth')}
            activeOpacity={0.7}
          >
            <View className="flex-row items-center flex-1">
              <Calendar size={20} color="#6B7280" />
              <View className="ml-3 flex-1">
                <AppText className="text-sm text-gray-500" style={{fontFamily: 'Ubuntu-Medium'}}>Date of Birth</AppText>
                <AppText className="text-base text-gray-800" numberOfLines={2} style={{fontFamily: 'Ubuntu-Medium'}}>
                  {profileData.dateOfBirth}
                </AppText>
              </View>
            </View>
            <Edit3 size={16} color="#9CA3AF" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Settings Section */}
      <View className="mt-6 mb-8">
        <AppText className="text-lg font-semibold text-gray-800 px-6 mb-4" style={{fontFamily: 'Ubuntu-Bold'}}>
          Settings
        </AppText>
        <View className="bg-white mx-4 rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {settingsItems.map(renderSettingsItem)}
        </View>
      </View>

      {/* Edit Modal */}
      <Modal
        visible={editModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setEditModalVisible(false)}
      >
        <View className="flex-1 bg-black/50 justify-end">
          <View className="bg-white rounded-t-3xl p-6">
            <AppText className="text-xl font-bold text-gray-800 mb-6 text-center" style={{fontFamily: 'Ubuntu-Bold'}}>
              Edit {editingField?.charAt(0).toUpperCase() + editingField?.slice(1)}
            </AppText>
            
            <TextInput
              className="border border-gray-300 rounded-xl px-4 py-3 text-base mb-6"
              value={editValue}
              onChangeText={setEditValue}
              placeholder={`Enter ${editingField}`}
              autoCapitalize="none"
              keyboardType={editingField === 'email' ? 'email-address' : 'default'}
              multiline={editingField === 'bio'}
              numberOfLines={editingField === 'bio' ? 4 : 1}
            />
            
            <View className="flex-row space-x-4">
              <TouchableOpacity
                className="flex-1 bg-gray-200 py-3 rounded-xl"
                onPress={() => setEditModalVisible(false)}
                activeOpacity={0.8}
              >
                <AppText className="text-center font-semibold text-gray-700" style={{fontFamily: 'Ubuntu-Bold'}}>
                  Cancel
                </AppText>
              </TouchableOpacity>
              
              <TouchableOpacity
                className="flex-1 bg-teal-500 py-3 rounded-xl"
                onPress={saveEdit}
                activeOpacity={0.8}
              >
                <AppText className="text-center font-semibold text-white" style={{fontFamily: 'Ubuntu-Bold'}}>
                  Save
                </AppText>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* App Settings Modal */}
      <Modal
        visible={settingsModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setSettingsModalVisible(false)}
      >
        <View className="flex-1 bg-black/50 justify-end">
          <View className="bg-white rounded-t-3xl p-6 max-h-96">
            <View className="flex-row items-center justify-between mb-6">
              <AppText className="text-xl font-bold text-gray-800" style={{fontFamily: 'Ubuntu-Bold'}}>
                App Settings
              </AppText>
              <TouchableOpacity onPress={() => setSettingsModalVisible(false)}>
                <AppText className="text-teal-500 font-semibold" style={{fontFamily: 'Ubuntu-Bold'}}>
                  Done
                </AppText>
              </TouchableOpacity>
            </View>
            
            <ScrollView showsVerticalScrollIndicator={false}>
              <View className="space-y-4">
                <View className="flex-row items-center justify-between py-3">
                  <AppText className="text-base text-gray-800" style={{fontFamily: 'Ubuntu-Bold'}}>
                    Dark Mode
                  </AppText>
                  <Switch
                    value={darkMode}
                    onValueChange={setDarkMode}
                    trackColor={{ false: '#E5E7EB', true: '#14B8A6' }}
                    thumbColor="#FFFFFF"
                  />
                </View>
                
                <View className="flex-row items-center justify-between py-3">
                  <AppText className="text-base text-gray-800" style={{fontFamily: 'Ubuntu-Bold'}}>
                    Auto-sync Data
                  </AppText>
                  <Switch
                    value={true}
                    onValueChange={() => {}}
                    trackColor={{ false: '#E5E7EB', true: '#14B8A6' }}
                    thumbColor="#FFFFFF"
                  />
                </View>
                
                <TouchableOpacity className="flex-row items-center justify-between py-3">
                  <AppText className="text-base text-gray-800" style={{fontFamily: 'Ubuntu-Bold'}}>
                    Language
                  </AppText>
                  <AppText className="text-gray-500" style={{fontFamily: 'Ubuntu-Bold'}}>
                    English
                  </AppText>
                </TouchableOpacity>
                
                <TouchableOpacity className="flex-row items-center justify-between py-3">
                  <AppText className="text-base text-gray-800" style={{fontFamily: 'Ubuntu-Bold'}}>
                    Storage
                  </AppText>
                  <AppText className="text-gray-500" style={{fontFamily: 'Ubuntu-Bold'}}>
                    2.4 GB
                  </AppText>
                </TouchableOpacity>
                
                <TouchableOpacity className="flex-row items-center justify-between py-3">
                  <AppText className="text-base text-gray-800" style={{fontFamily: 'Ubuntu-Bold'}}>
                    Cache
                  </AppText>
                  <AppText className="text-teal-500" style={{fontFamily: 'Ubuntu-Bold'}}>
                    Clear
                  </AppText>
                </TouchableOpacity>
                
                <TouchableOpacity className="flex-row items-center justify-between py-3">
                  <AppText className="text-base text-gray-800" style={{fontFamily: 'Ubuntu-Bold'}}>
                    App Version
                  </AppText>
                  <AppText className="text-gray-500" style={{fontFamily: 'Ubuntu-Bold'}}>
                    v2.1.0
                  </AppText>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>

      {/* Privacy & Security Modal */}
      <Modal
        visible={privacyModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setPrivacyModalVisible(false)}
      >
        <View className="flex-1 bg-black/50 justify-end">
          <View className="bg-white rounded-t-3xl p-6 max-h-96">
            <View className="flex-row items-center justify-between mb-6">
              <AppText className="text-xl font-bold text-gray-800" style={{fontFamily: 'Ubuntu-Bold'}}>
                Privacy & Security
              </AppText>
              <TouchableOpacity onPress={() => setPrivacyModalVisible(false)}>
                <AppText className="text-teal-500 font-semibold" style={{fontFamily: 'Ubuntu-Bold'}}>
                  Done
                </AppText>
              </TouchableOpacity>
            </View>
            
            <ScrollView showsVerticalScrollIndicator={false}>
              <View className="space-y-4">
                <View className="flex-row items-center justify-between py-3">
                  <AppText className="text-base text-gray-800" style={{fontFamily: 'Ubuntu-Bold'}}>
                    Face ID / Touch ID
                  </AppText>
                  <Switch
                    value={faceId}
                    onValueChange={setFaceId}
                    trackColor={{ false: '#E5E7EB', true: '#14B8A6' }}
                    thumbColor="#FFFFFF"
                  />
                </View>
                
                <View className="flex-row items-center justify-between py-3">
                  <AppText className="text-base text-gray-800" style={{fontFamily: 'Ubuntu-Bold'}}>
                    Location Access
                  </AppText>
                  <Switch
                    value={locationAccess}
                    onValueChange={setLocationAccess}
                    trackColor={{ false: '#E5E7EB', true: '#14B8A6' }}
                    thumbColor="#FFFFFF"
                  />
                </View>
                
                <View className="flex-row items-center justify-between py-3">
                  <AppText className="text-base text-gray-800" style={{fontFamily: 'Ubuntu-Bold'}}>
                    Data Sharing
                  </AppText>
                  <Switch
                    value={dataSharing}
                    onValueChange={setDataSharing}
                    trackColor={{ false: '#E5E7EB', true: '#14B8A6' }}
                    thumbColor="#FFFFFF"
                  />
                </View>
                
                <TouchableOpacity className="flex-row items-center justify-between py-3">
                  <AppText className="text-base text-gray-800" style={{fontFamily: 'Ubuntu-Bold'}}>
                    Change Password
                  </AppText>
                  <ChevronRight size={20} color="#9CA3AF" />
                </TouchableOpacity>
                
                <TouchableOpacity className="flex-row items-center justify-between py-3">
                  <AppText className="text-base text-gray-800" style={{fontFamily: 'Ubuntu-Bold'}}>
                    Two-Factor Authentication
                  </AppText>
                  <AppText className="text-green-500" style={{fontFamily: 'Ubuntu-Bold'}}>
                    Enabled
                  </AppText>
                </TouchableOpacity>
                
                <TouchableOpacity className="flex-row items-center justify-between py-3">
                  <AppText className="text-base text-gray-800" style={{fontFamily: 'Ubuntu-Bold'}}>
                    Privacy Policy
                  </AppText>
                  <ChevronRight size={20} color="#9CA3AF" />
                </TouchableOpacity>
                
                <TouchableOpacity className="flex-row items-center justify-between py-3">
                  <AppText className="text-base text-gray-800" style={{fontFamily: 'Ubuntu-Bold'}}>
                    Data Export
                  </AppText>
                  <ChevronRight size={20} color="#9CA3AF" />
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>

      {/* Help & Support Modal */}
      <Modal
        visible={helpModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setHelpModalVisible(false)}
      >
        <View className="flex-1 bg-black/50 justify-end">
          <View className="bg-white rounded-t-3xl p-6 max-h-96">
            <View className="flex-row items-center justify-between mb-6">
              <AppText className="text-xl font-bold text-gray-800" style={{fontFamily: 'Ubuntu-Bold'}}>
                Help & Support
              </AppText>
              <TouchableOpacity onPress={() => setHelpModalVisible(false)}>
                <AppText className="text-teal-500 font-semibold" style={{fontFamily: 'Ubuntu-Bold'}}>
                  Done
                </AppText>
              </TouchableOpacity>
            </View>
            
            <ScrollView showsVerticalScrollIndicator={false}>
              <View className="space-y-4">
                <TouchableOpacity className="flex-row items-center justify-between py-3">
                  <AppText className="text-base text-gray-800" style={{fontFamily: 'Ubuntu-Bold'}}>
                    FAQ
                  </AppText>
                  <ChevronRight size={20} color="#9CA3AF" />
                </TouchableOpacity>
                
                <TouchableOpacity className="flex-row items-center justify-between py-3">
                  <AppText className="text-base text-gray-800" style={{fontFamily: 'Ubuntu-Bold'}}>
                    Contact Support
                  </AppText>
                  <ChevronRight size={20} color="#9CA3AF" />
                </TouchableOpacity>
                
                <TouchableOpacity className="flex-row items-center justify-between py-3">
                  <AppText className="text-base text-gray-800" style={{fontFamily: 'Ubuntu-Bold'}}>
                    Report a Bug
                  </AppText>
                  <ChevronRight size={20} color="#9CA3AF" />
                </TouchableOpacity>
                
                <TouchableOpacity className="flex-row items-center justify-between py-3">
                  <AppText className="text-base text-gray-800" style={{fontFamily: 'Ubuntu-Bold'}}>
                    Feature Request
                  </AppText>
                  <ChevronRight size={20} color="#9CA3AF" />
                </TouchableOpacity>
                
                <TouchableOpacity className="flex-row items-center justify-between py-3">
                  <AppText className="text-base text-gray-800" style={{fontFamily: 'Ubuntu-Bold'}}>
                    Community Guidelines
                  </AppText>
                  <ChevronRight size={20} color="#9CA3AF" />
                </TouchableOpacity>
                
                <TouchableOpacity className="flex-row items-center justify-between py-3">
                  <AppText className="text-base text-gray-800" style={{fontFamily: 'Ubuntu-Bold'}}>
                    Terms of Service
                  </AppText>
                  <ChevronRight size={20} color="#9CA3AF" />
                </TouchableOpacity>
                
                <View className="py-3 border-t border-gray-200 mt-4">
                  <AppText className="text-sm text-gray-500 text-center mb-2" style={{fontFamily: 'Ubuntu-Bold'}}>
                    App Version 2.1.0
                  </AppText>
                  <AppText className="text-sm text-gray-500 text-center" style={{fontFamily: 'Ubuntu-Bold'}}>
                    © 2023 Your App Name
                  </AppText>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}