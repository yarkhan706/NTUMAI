// screens/driver/DriverHome.js
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  StatusBar,
  SafeAreaView
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Driver Dashboard Main Screen
const DriverDashboard = ({ navigation }) => {
  const [isOnline, setIsOnline] = useState(false);
  const [currentBalance, setCurrentBalance] = useState(245.60);

  const toggleOnlineStatus = () => {
    setIsOnline(!isOnline);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      
      {/* Header */}
      <View className="flex-row items-center justify-between px-4 py-3 bg-white border-b border-gray-100">
        <View className="flex-row items-center">
          <Image
            source={{ uri: 'https://via.placeholder.com/40x40' }}
            className="w-10 h-10 rounded-full mr-3"
          />
          <View>
            <Text className="text-lg font-semibold text-gray-900">Today's Income + 2.5R</Text>
            <Text className="text-sm text-gray-500">Driver Dashboard</Text>
          </View>
        </View>
        <View className="flex-row items-center">
          <TouchableOpacity className="mr-3">
            <Ionicons name="notifications-outline" size={24} color="#374151" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="settings-outline" size={24} color="#374151" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView className="flex-1 bg-gray-50">
        {/* Balance Card */}
        <View className="mx-4 mt-4 bg-white rounded-2xl p-4 ">
          <View className="flex-row items-center justify-between mb-4">
            <View>
              <Text className="text-2xl font-bold text-gray-900">${currentBalance.toFixed(2)}</Text>
              <Text className="text-sm text-gray-500">Today's Earnings</Text>
            </View>
            <View className="bg-emerald-100 p-2 rounded-full">
              <Ionicons name="wallet" size={24} color="#10b981" />
            </View>
          </View>
          
          <View className="flex-row justify-between">
            <View className="flex-1 mr-2">
              <TouchableOpacity className="bg-emerald-500 py-3 rounded-xl">
                <Text className="text-white text-center font-semibold">Cash Out</Text>
              </TouchableOpacity>
            </View>
            <View className="flex-1 ml-2">
              <TouchableOpacity className="bg-gray-100 py-3 rounded-xl">
                <Text className="text-gray-700 text-center font-semibold">History</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Online Status Toggle */}
        <View className="mx-4 mt-4 bg-white rounded-2xl p-4">
          <Text className="text-lg font-semibold text-gray-900 mb-3">What's new on Hizzmat</Text>
          
          <View className={`${isOnline ? 'bg-emerald-500' : 'bg-gray-300'} rounded-2xl p-4 flex-row items-center justify-between`}>
            <View className="flex-row items-center">
              <View className="mr-3">
                <Image 
                  source={{ uri: 'https://via.placeholder.com/60x40' }}
                  className="w-15 h-10 rounded"
                />
              </View>
              <View>
                <Text className="text-white font-semibold text-lg">
                  {isOnline ? 'Go Online' : 'Get ready'}
                </Text>
                <Text className="text-white/80 text-sm">
                  {isOnline ? 'You are online' : 'Go online to start earning'}
                </Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={toggleOnlineStatus}
              className="bg-white/20 p-2 rounded-full"
            >
              <Ionicons 
                name={isOnline ? "pause" : "play"} 
                size={20} 
                color="white" 
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Recent Orders */}
        <View className="mx-4 mt-4 bg-white rounded-2xl p-4">
          <Text className="text-lg font-semibold text-gray-900 mb-3">Recent Orders:</Text>
          
          {[1, 2, 3, 4].map((order) => (
            <View key={order} className="flex-row items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
              <View className="flex-row items-center flex-1">
                <View className="w-2 h-2 bg-emerald-500 rounded-full mr-3" />
                <View className="flex-1">
                  <Text className="font-semibold text-gray-900">06 : 38 : 21</Text>
                  <Text className="text-sm text-gray-500">DELIVERY Order #240...</Text>
                  <Text className="text-sm text-emerald-600">Accept</Text>
                </View>
              </View>
              <View className="items-end">
                <Text className="font-semibold text-gray-900">$23.60</Text>
                <Text className="text-sm text-gray-500">4.2 mi • 15 min</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Action Buttons */}
        <View className="mx-4 mt-4 mb-6">
          <TouchableOpacity 
            className="bg-emerald-500 py-4 rounded-xl mb-3"
            onPress={() => navigation.navigate('DriverOrders')}
          >
            <Text className="text-white text-center font-semibold text-lg">Delivery Orders</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            className="bg-white border border-emerald-500 py-4 rounded-xl"
            onPress={() => navigation.navigate('DriverRoutes')}
          >
            <Text className="text-emerald-500 text-center font-semibold text-lg">Routes</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// Driver Orders Screen
const DriverOrders = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('active');

  const orders = [
    { id: 1, status: 'pending', customer: 'John D.', amount: 23.60, distance: '4.2 mi', time: '15 min' },
    { id: 2, status: 'active', customer: 'Sarah M.', amount: 18.40, distance: '2.1 mi', time: '8 min' },
    { id: 3, status: 'completed', customer: 'Mike R.', amount: 31.20, distance: '6.3 mi', time: '22 min' },
    { id: 4, status: 'completed', customer: 'Lisa K.', amount: 15.80, distance: '1.8 mi', time: '12 min' },
  ];

  const filteredOrders = orders.filter(order => 
    activeTab === 'active' ? order.status !== 'completed' : order.status === 'completed'
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      
      {/* Header */}
      <View className="flex-row items-center px-4 py-3 bg-white border-b border-gray-100">
        <TouchableOpacity onPress={() => navigation.goBack()} className="mr-3">
          <Ionicons name="arrow-back" size={24} color="#374151" />
        </TouchableOpacity>
        <Text className="text-xl font-semibold text-gray-900">Orders</Text>
      </View>

      {/* Tab Navigation */}
      <View className="flex-row bg-gray-100 m-4 rounded-xl p-1">
        <TouchableOpacity
          onPress={() => setActiveTab('active')}
          className={`flex-1 py-2 rounded-lg ${activeTab === 'active' ? 'bg-white' : ''}`}
        >
          <Text className={`text-center font-medium ${activeTab === 'active' ? 'text-gray-900' : 'text-gray-500'}`}>
            Active Orders
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setActiveTab('completed')}
          className={`flex-1 py-2 rounded-lg ${activeTab === 'completed' ? 'bg-white' : ''}`}
        >
          <Text className={`text-center font-medium ${activeTab === 'completed' ? 'text-gray-900' : 'text-gray-500'}`}>
            Completed
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1">
        {filteredOrders.map((order) => (
          <TouchableOpacity
            key={order.id}
            className="mx-4 mb-3 bg-white rounded-xl p-4 border border-gray-100"
          >
            <View className="flex-row items-center justify-between mb-3">
              <View className="flex-row items-center">
                <View className={`w-3 h-3 rounded-full mr-3 ${
                  order.status === 'pending' ? 'bg-yellow-500' :
                  order.status === 'active' ? 'bg-emerald-500' : 'bg-gray-400'
                }`} />
                <Text className="font-semibold text-gray-900">Order #{order.id}240</Text>
              </View>
              <Text className="font-bold text-lg text-gray-900">${order.amount}</Text>
            </View>
            
            <View className="flex-row justify-between items-center">
              <View>
                <Text className="text-gray-600">Customer: {order.customer}</Text>
                <Text className="text-sm text-gray-500">{order.distance} • {order.time}</Text>
              </View>
              <View className="flex-row">
                {order.status === 'pending' && (
                  <>
                    <TouchableOpacity className="bg-red-100 px-3 py-1 rounded-lg mr-2">
                      <Text className="text-red-600 font-medium">Decline</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="bg-emerald-500 px-3 py-1 rounded-lg">
                      <Text className="text-white font-medium">Accept</Text>
                    </TouchableOpacity>
                  </>
                )}
                {order.status === 'active' && (
                  <TouchableOpacity className="bg-blue-500 px-3 py-1 rounded-lg">
                    <Text className="text-white font-medium">Track</Text>
                  </TouchableOpacity>
                )}
                {order.status === 'completed' && (
                  <View className="bg-gray-100 px-3 py-1 rounded-lg">
                    <Text className="text-gray-600 font-medium">Completed</Text>
                  </View>
                )}
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

// Driver Routes Screen
const DriverRoutes = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      
      {/* Header */}
      <View className="flex-row items-center px-4 py-3 bg-white border-b border-gray-100">
        <TouchableOpacity onPress={() => navigation.goBack()} className="mr-3">
          <Ionicons name="arrow-back" size={24} color="#374151" />
        </TouchableOpacity>
        <Text className="text-xl font-semibold text-gray-900">Routes</Text>
      </View>

      {/* Map Placeholder */}
      <View className="flex-1 bg-gray-100 m-4 rounded-xl relative">
        <View className="absolute inset-0 items-center justify-center">
          <Ionicons name="map" size={48} color="#9ca3af" />
          <Text className="text-gray-500 mt-2">Map View</Text>
          <Text className="text-sm text-gray-400">Interactive route map</Text>
        </View>
        
        {/* Route Info Card */}
        <View className="absolute bottom-4 left-4 right-4 bg-white rounded-xl p-4">
          <View className="flex-row items-center justify-between mb-3">
            <Text className="text-lg font-semibold text-gray-900">Current Route</Text>
            <Text className="text-emerald-600 font-medium">4.7 mi</Text>
          </View>
          
          <View className="flex-row items-center mb-3">
            <View className="w-3 h-3 bg-emerald-500 rounded-full mr-3" />
            <Text className="text-gray-600 flex-1">123 Main St, Downtown</Text>
            <Text className="text-sm text-gray-500">Pickup</Text>
          </View>
          
          <View className="flex-row items-center mb-4">
            <View className="w-3 h-3 bg-red-500 rounded-full mr-3" />
            <Text className="text-gray-600 flex-1">456 Oak Ave, Uptown</Text>
            <Text className="text-sm text-gray-500">Drop-off</Text>
          </View>
          
          <TouchableOpacity className="bg-emerald-500 py-3 rounded-xl">
            <Text className="text-white text-center font-semibold">Start Navigation</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

// Driver Earnings Screen
const DriverEarnings = ({ navigation }) => {
  const [selectedPeriod, setSelectedPeriod] = useState('today');
  
  const earningsData = {
    today: { amount: 245.60, trips: 12, hours: 8.5 },
    week: { amount: 1240.30, trips: 67, hours: 42 },
    month: { amount: 4850.75, trips: 245, hours: 156 }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      
      {/* Header */}
      <View className="flex-row items-center px-4 py-3 bg-white border-b border-gray-100">
        <TouchableOpacity onPress={() => navigation.goBack()} className="mr-3">
          <Ionicons name="arrow-back" size={24} color="#374151" />
        </TouchableOpacity>
        <Text className="text-xl font-semibold text-gray-900">Earnings</Text>
      </View>

      <ScrollView className="flex-1">
        {/* Period Selector */}
        <View className="flex-row bg-gray-100 m-4 rounded-xl p-1">
          {['today', 'week', 'month'].map((period) => (
            <TouchableOpacity
              key={period}
              onPress={() => setSelectedPeriod(period)}
              className={`flex-1 py-2 rounded-lg ${selectedPeriod === period ? 'bg-white' : ''}`}
            >
              <Text className={`text-center font-medium capitalize ${
                selectedPeriod === period ? 'text-gray-900' : 'text-gray-500'
              }`}>
                {period === 'week' ? 'This Week' : period === 'month' ? 'This Month' : 'Today'}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Earnings Summary */}
        <View className="mx-4 mb-4 bg-emerald-50 rounded-2xl p-6">
          <Text className="text-3xl font-bold text-emerald-600 mb-2">
            ${earningsData[selectedPeriod].amount.toFixed(2)}
          </Text>
          <Text className="text-emerald-700 mb-4">
            Total Earnings ({selectedPeriod === 'today' ? 'Today' : selectedPeriod === 'week' ? 'This Week' : 'This Month'})
          </Text>
          
          <View className="flex-row justify-between">
            <View className="items-center">
              <Text className="text-2xl font-bold text-gray-900">{earningsData[selectedPeriod].trips}</Text>
              <Text className="text-sm text-gray-600">Trips</Text>
            </View>
            <View className="items-center">
              <Text className="text-2xl font-bold text-gray-900">{earningsData[selectedPeriod].hours}</Text>
              <Text className="text-sm text-gray-600">Hours</Text>
            </View>
            <View className="items-center">
              <Text className="text-2xl font-bold text-gray-900">
                ${(earningsData[selectedPeriod].amount / earningsData[selectedPeriod].hours).toFixed(2)}
              </Text>
              <Text className="text-sm text-gray-600">Per Hour</Text>
            </View>
          </View>
        </View>

        {/* Chart Placeholder */}
        <View className="mx-4 mb-4 bg-white rounded-2xl p-4">
          <Text className="text-lg font-semibold text-gray-900 mb-4">Earnings Chart</Text>
          <View className="h-48 bg-gray-100 rounded-xl items-center justify-center">
            <Ionicons name="bar-chart" size={48} color="#9ca3af" />
            <Text className="text-gray-500 mt-2">Earnings visualization</Text>
          </View>
        </View>

        {/* Quick Actions */}
        <View className="mx-4 mb-6">
          <TouchableOpacity className="bg-emerald-500 py-4 rounded-xl mb-3">
            <Text className="text-white text-center font-semibold text-lg">Cash Out Now</Text>
          </TouchableOpacity>
          
          <TouchableOpacity className="bg-white border border-gray-300 py-4 rounded-xl">
            <Text className="text-gray-700 text-center font-semibold text-lg">View Details</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// Driver Settings Screen
const DriverSettings = ({ navigation }) => {
  const [notifications, setNotifications] = useState(true);
  const [autoAccept, setAutoAccept] = useState(false);

  const settingsOptions = [
    { icon: 'person-outline', title: 'Profile Settings', screen: 'Profile' },
    { icon: 'car-outline', title: 'Vehicle Information', screen: 'Vehicle' },
    { icon: 'card-outline', title: 'Payment Methods', screen: 'Payment' },
    { icon: 'time-outline', title: 'Working Hours', screen: 'Hours' },
    { icon: 'help-circle-outline', title: 'Help & Support', screen: 'Support' },
    { icon: 'document-text-outline', title: 'Terms & Conditions', screen: 'Terms' },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      
      {/* Header */}
      <View className="flex-row items-center px-4 py-3 bg-white border-b border-gray-100">
        <TouchableOpacity onPress={() => navigation.goBack()} className="mr-3">
          <Ionicons name="arrow-back" size={24} color="#374151" />
        </TouchableOpacity>
        <Text className="text-xl font-semibold text-gray-900">Settings</Text>
      </View>

      <ScrollView className="flex-1">
        {/* Profile Section */}
        <View className="mx-4 mt-4 bg-white rounded-2xl p-4">
          <View className="flex-row items-center mb-4">
            <Image
              source={{ uri: 'https://via.placeholder.com/60x60' }}
              className="w-15 h-15 rounded-full mr-4"
            />
            <View className="flex-1">
              <Text className="text-lg font-semibold text-gray-900">John Driver</Text>
              <Text className="text-sm text-gray-500">john.driver@email.com</Text>
              <Text className="text-sm text-emerald-600">★ 4.8 Rating</Text>
            </View>
            <TouchableOpacity>
              <Ionicons name="pencil" size={20} color="#10b981" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Preferences */}
        <View className="mx-4 mt-4 bg-white rounded-2xl p-4">
          <Text className="text-lg font-semibold text-gray-900 mb-4">Preferences</Text>
          
          <View className="flex-row items-center justify-between py-3 border-b border-gray-100">
            <View className="flex-row items-center">
              <Ionicons name="notifications-outline" size={20} color="#374151" className="mr-3" />
              <Text className="text-gray-700 ml-3">Push Notifications</Text>
            </View>
            <TouchableOpacity
              onPress={() => setNotifications(!notifications)}
              className={`w-12 h-6 rounded-full ${notifications ? 'bg-emerald-500' : 'bg-gray-300'}`}
            >
              <View className={`w-5 h-5 rounded-full bg-white mt-0.5 ${notifications ? 'ml-6' : 'ml-0.5'}`} />
            </TouchableOpacity>
          </View>
          
          <View className="flex-row items-center justify-between py-3">
            <View className="flex-row items-center">
              <Ionicons name="checkmark-outline" size={20} color="#374151" className="mr-3" />
              <Text className="text-gray-700 ml-3">Auto Accept Orders</Text>
            </View>
            <TouchableOpacity
              onPress={() => setAutoAccept(!autoAccept)}
              className={`w-12 h-6 rounded-full ${autoAccept ? 'bg-emerald-500' : 'bg-gray-300'}`}
            >
              <View className={`w-5 h-5 rounded-full bg-white mt-0.5 ${autoAccept ? 'ml-6' : 'ml-0.5'}`} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Settings Options */}
        <View className="mx-4 mt-4 bg-white rounded-2xl">
          {settingsOptions.map((option, index) => (
            <TouchableOpacity
              key={index}
              className={`flex-row items-center p-4 ${index < settingsOptions.length - 1 ? 'border-b border-gray-100' : ''}`}
            >
              <Ionicons name={option.icon} size={20} color="#374151" />
              <Text className="text-gray-700 ml-3 flex-1">{option.title}</Text>
              <Ionicons name="chevron-forward" size={16} color="#9ca3af" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Logout */}
        <View className="mx-4 mt-4 mb-6">
          <TouchableOpacity className="bg-red-50 border border-red-200 py-4 rounded-xl">
            <Text className="text-red-600 text-center font-semibold text-lg">Sign Out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// Bottom Tab Navigator for Driver
const Tab = createBottomTabNavigator();

const DriverHome = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Dashboard') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Orders') {
            iconName = focused ? 'list' : 'list-outline';
          } else if (route.name === 'Routes') {
            iconName = focused ? 'map' : 'map-outline';
          } else if (route.name === 'Earnings') {
            iconName = focused ? 'bar-chart' : 'bar-chart-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#10b981',
        tabBarInactiveTintColor: '#9ca3af',
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopColor: '#f3f4f6',
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Dashboard" component={DriverDashboard} />
      <Tab.Screen name="Orders" component={DriverOrders} />
      <Tab.Screen name="Routes" component={DriverRoutes} />
      <Tab.Screen name="Earnings" component={DriverEarnings} />
      <Tab.Screen name="Settings" component={DriverSettings} />
    </Tab.Navigator>
  );
};

export default DriverHome;
export { DriverDashboard, DriverOrders, DriverRoutes, DriverEarnings, DriverSettings };