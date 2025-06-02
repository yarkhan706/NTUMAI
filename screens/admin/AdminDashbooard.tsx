import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  StatusBar,
  SafeAreaView,
  TextInput,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Bell, ArrowLeft, Search, Home, Users, ShoppingBag, Car, BarChart } from 'lucide-react-native';
import AppText from '../../components/AppText';
// Main Admin Dashboard Screen
const AdminDashboard = ({ navigation }) => {
  const [stats] = useState({
    totalUsers: 1234,
    activeOrders: 89,
    totalVendors: 156,
    totalDrivers: 67,
    pendingApprovals: 23,
    todayRevenue: 15420.50,
  });

  const dashboardSections = [
    {
      title: 'User Management',
      count: stats.totalUsers,
      items: [
        { id: 1, name: 'John Doe', status: 'active', avatar: 'https://via.placeholder.com/40x40' },
        { id: 2, name: 'Jane Smith', status: 'active', avatar: 'https://via.placeholder.com/40x40' },
        { id: 3, name: 'Mike Johnson', status: 'suspended', avatar: 'https://via.placeholder.com/40x40' },
        { id: 4, name: 'Sarah Wilson', status: 'active', avatar: 'https://via.placeholder.com/40x40' },
        { id: 5, name: 'David Brown', status: 'inactive', avatar: 'https://via.placeholder.com/40x40' },
      ],
    },
    {
      title: 'Guests Approvals',
      count: stats.pendingApprovals,
      items: [
        { id: 1, name: 'Guest User 1', status: 'pending', avatar: 'https://via.placeholder.com/40x40' },
        { id: 2, name: 'Guest User 2', status: 'pending', avatar: 'https://via.placeholder.com/40x40' },
      ],
    },
    {
      title: 'Guests Suspended',
      count: 5,
      items: [
        { id: 1, name: 'Suspended User 1', status: 'suspended', avatar: 'https://via.placeholder.com/40x40' },
        { id: 2, name: 'Suspended User 2', status: 'suspended', avatar: 'https://via.placeholder.com/40x40' },
      ],
    },
    {
      title: 'Vendors Approvals',
      count: 10,
      items: [
        { id: 1, name: 'Vendor A', status: 'pending', avatar: 'https://via.placeholder.com/40x40' },
        { id: 2, name: 'Vendor B', status: 'pending', avatar: 'https://via.placeholder.com/40x40' },
      ],
    },
    {
      title: 'Vendors Suspended',
      count: 3,
      items: [
        { id: 1, name: 'Vendor C', status: 'suspended', avatar: 'https://via.placeholder.com/40x40' },
        { id: 2, name: 'Vendor D', status: 'suspended', avatar: 'https://via.placeholder.com/40x40' },
      ],
    },
    {
      title: 'Delivery Personnel',
      count: stats.totalDrivers,
      items: [
        { id: 1, name: 'John Driver', status: 'online', avatar: 'https://via.placeholder.com/40x40' },
        { id: 2, name: 'Sarah Delivery', status: 'offline', avatar: 'https://via.placeholder.com/40x40' },
        { id: 3, name: 'Mike Courier', status: 'online', avatar: 'https://via.placeholder.com/40x40' },
      ],
    },
    {
      title: 'Delivery Personnel Suspended',
      count: 2,
      items: [
        { id: 1, name: 'Suspended Driver 1', status: 'suspended', avatar: 'https://via.placeholder.com/40x40' },
        { id: 2, name: 'Suspended Driver 2', status: 'suspended', avatar: 'https://via.placeholder.com/40x40' },
      ],
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'suspended': return 'bg-red-100 text-red-800';
      case 'online': return 'bg-green-100 text-green-800';
      case 'offline': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="white" />

      {/* Header */}
      <View className="bg-white px-4 py-3 border-b border-gray-200">
        <View className="flex-row items-center justify-between">
          <AppText className="text-xl font-bold text-gray-900">Admin Dashboard</AppText>
          <View className="flex-row items-center">
            <TouchableOpacity className="mr-3">
              <Bell size={24} color="#374151" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={{ uri: 'https://via.placeholder.com/40x40' }}
                className="w-10 h-10 rounded-full"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <ScrollView className="flex-1">
        {/* Dashboard Sections */}
        <View className="p-4">
          {dashboardSections.map((section, index) => (
            <View key={index} className="mb-6">
              <AppText className="text-lg font-semibold text-gray-900 mb-4">{section.title}</AppText>
              <View className="flex-row flex-wrap justify-between">
                {section.items.map((item) => (
                  <TouchableOpacity
                    key={item.id}
                    className="w-[48%] bg-teal-600 rounded-xl p-3 mb-3"
                    onPress={() => navigation.navigate('UserManagement', { sectionTitle: section.title })}
                  >
                    <View className="flex-row items-center mb-2">
                      <Image
                        source={{ uri: item.avatar }}
                        className="w-12 h-12 rounded-full mr-3"
                      />
                      <View className="flex-1">
                        <AppText className="text-white text-base font-medium">{item.name}</AppText>
                        <View className={`px-2 py-1 rounded-full ${getStatusColor(item.status)} mt-1`}>
                          <AppText className="text-xs font-medium">
                            {item.status.toUpperCase()}
                          </AppText>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
              {section.items.length === 0 && (
                <AppText className="text-gray-600 text-center">No items available</AppText>
              )}
            </View>
          ))}
        </View>

        {/* Quick Actions */}
        <View className="px-4 mb-6">
          <AppText className="text-lg font-semibold text-gray-900 mb-4">Admin Orders Management</AppText>
          <View className="flex-row flex-wrap justify-between">
            <TouchableOpacity
              className="w-[48%] bg-teal-600 py-3 rounded-xl mb-3"
              onPress={() => navigation.navigate('OrderManagement')}
            >
              <AppText className="text-white text-center font-semibold">Manage Orders</AppText>
            </TouchableOpacity>
            <TouchableOpacity
              className="w-[48%] bg-teal-600 py-3 rounded-xl mb-3"
              onPress={() => navigation.navigate('ManagePayments')}
            >
              <AppText className="text-white text-center font-semibold">Manage Payments</AppText>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// User Management Screen
const UserManagement = ({ navigation, route }) => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 'active', avatar: 'https://via.placeholder.com/40x40', orders: 23, joined: '2024-01-15' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'active', avatar: 'https://via.placeholder.com/40x40', orders: 15, joined: '2024-02-20' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', status: 'suspended', avatar: 'https://via.placeholder.com/40x40', orders: 8, joined: '2024-03-10' },
    { id: 4, name: 'Sarah Wilson', email: 'sarah@example.com', status: 'active', avatar: 'https://via.placeholder.com/40x40', orders: 31, joined: '2024-01-05' },
    { id: 5, name: 'David Brown', email: 'david@example.com', status: 'inactive', avatar: 'https://via.placeholder.com/40x40', orders: 2, joined: '2024-04-12' },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || user.status === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const handleUserAction = (userId, action) => {
    setUsers(users.map(user =>
      user.id === userId
        ? { ...user, status: action === 'suspend' ? 'suspended' : action === 'activate' ? 'active' : user.status }
        : user
    ));
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="white" />

      {/* Header */}
      <View className="bg-white px-4 py-3 border-b border-gray-200">
        <View className="flex-row items-center">
          <TouchableOpacity onPress={() => navigation.goBack()} className="mr-3">
            <ArrowLeft size={24} color="#374151" />
          </TouchableOpacity>
          <AppText className="text-xl font-semibold text-gray-900">User Management</AppText>
        </View>
      </View>

      {/* Search and Filter */}
      <View className="bg-white px-4 py-3 border-b border-gray-200">
        <View className="flex-row items-center mb-3">
          <View className="flex-1 bg-gray-100 rounded-lg px-3 py-2 mr-3">
            <TextInput
              placeholder="Search users..."
              placeholderTextColor="#9ca3af"
              value={searchQuery}
              onChangeText={setSearchQuery}
              className="text-gray-900"
            />
          </View>
          <TouchableOpacity className="bg-teal-600 px-4 py-2 rounded-lg">
            <Search size={20} color="white" />
          </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {['all', 'active', 'inactive', 'suspended'].map((filter) => (
            <TouchableOpacity
              key={filter}
              onPress={() => setSelectedFilter(filter)}
              className={`mr-3 px-4 py-2 rounded-full ${
                selectedFilter === filter ? 'bg-teal-600' : 'bg-gray-200'
              }`}
            >
              <AppText className={`capitalize font-medium ${
                selectedFilter === filter ? 'text-white' : 'text-gray-700'
              }`}>
                {filter}
              </AppText>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Users List */}
      <ScrollView className="flex-1 p-4">
        {filteredUsers.map((user) => (
          <View key={user.id} className="bg-teal-600 rounded-xl p-3 mb-3">
            <View className="flex-row items-center">
              <Image source={{ uri: user.avatar }} className="w-12 h-12 rounded-full mr-3" />
              <View className="flex-1">
                <View className="flex-row items-center justify-between mb-1">
                  <AppText className="text-lg font-semibold text-white">{user.name}</AppText>
                  <View className={`px-2 py-1 rounded-full ${
                    user.status === 'active' ? 'bg-green-100' :
                    user.status === 'suspended' ? 'bg-red-100' : 'bg-gray-100'
                  }`}>
                    <AppText className={`text-xs font-medium ${
                      user.status === 'active' ? 'text-green-800' :
                      user.status === 'suspended' ? 'text-red-800' : 'text-gray-800'
                    }`}>
                      {user.status.toUpperCase()}
                    </AppText>
                  </View>
                </View>
                <AppText className="text-gray-200 mb-1">{user.email}</AppText>
                <AppText className="text-sm text-gray-300">{user.orders} orders • Joined {user.joined}</AppText>
              </View>
            </View>

            <View className="flex-row justify-end mt-3 pt-3 border-t border-gray-500">
              <TouchableOpacity
                className="bg-blue-100 px-3 py-1 rounded-lg mr-2"
                onPress={() => alert(`Viewing details for ${user.name}`)}
              >
                <AppText className="text-blue-600 font-medium">View</AppText>
              </TouchableOpacity>
              {user.status === 'active' ? (
                <TouchableOpacity
                  className="bg-red-100 px-3 py-1 rounded-lg"
                  onPress={() => handleUserAction(user.id, 'suspend')}
                >
                  <AppText className="text-red-600 font-medium">Suspend</AppText>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  className="bg-green-100 px-3 py-1 rounded-lg"
                  onPress={() => handleUserAction(user.id, 'activate')}
                >
                  <AppText className="text-green-600 font-medium">Activate</AppText>
                </TouchableOpacity>
              )}
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

// Order Management Screen
const OrderManagement = ({ navigation }) => {
  const [orders, setOrders] = useState([
    { id: '#ORD001', customer: 'John Doe', vendor: 'Pizza Palace', amount: 24.99, status: 'preparing', time: '10 min ago', items: 2 },
    { id: '#ORD002', customer: 'Jane Smith', vendor: 'Burger Hub', amount: 18.50, status: 'on_the_way', time: '15 min ago', items: 1 },
    { id: '#ORD003', customer: 'Mike Johnson', vendor: 'Sushi Master', amount: 45.00, status: 'delivered', time: '1 hour ago', items: 3 },
    { id: '#ORD004', customer: 'Sarah Wilson', vendor: 'Taco Fiesta', amount: 32.75, status: 'cancelled', time: '2 hours ago', items: 4 },
    { id: '#ORD005', customer: 'David Brown', vendor: 'Healthy Bites', amount: 28.25, status: 'pending', time: '5 min ago', items: 2 },
  ]);

  const [selectedFilter, setSelectedFilter] = useState('all');

  const filteredOrders = orders.filter(order =>
    selectedFilter === 'all' || order.status === selectedFilter
  );

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'preparing': return 'bg-blue-100 text-blue-800';
      case 'on_the_way': return 'bg-purple-100 text-purple-800';
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleOrderAction = (orderId, action) => {
    setOrders(orders.map(order =>
      order.id === orderId
        ? { ...order, status: action === 'cancel' ? 'cancelled' : order.status }
        : order
    ));
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="white" />

      {/* Header */}
      <View className="bg-white px-4 py-3 border-b border-gray-200">
        <View className="flex-row items-center">
          <TouchableOpacity onPress={() => navigation.goBack()} className="mr-3">
            <ArrowLeft size={24} color="#374151" />
          </TouchableOpacity>
          <AppText className="text-xl font-semibold text-gray-900">Order Management</AppText>
        </View>
      </View>

      {/* Filter Tabs */}
      <View className="bg-white px-4 py-3 border-b border-gray-200">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {['all', 'pending', 'preparing', 'on_the_way', 'delivered', 'cancelled'].map((filter) => (
            <TouchableOpacity
              key={filter}
              onPress={() => setSelectedFilter(filter)}
              className={`mr-3 px-4 py-2 rounded-full ${
                selectedFilter === filter ? 'bg-teal-600' : 'bg-gray-200'
              }`}
            >
              <AppText className={`capitalize font-medium ${
                selectedFilter === filter ? 'text-white' : 'text-gray-700'
              }`}>
                {filter.replace('_', ' ')}
              </AppText>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Orders List */}
      <ScrollView className="flex-1 p-4">
        {filteredOrders.map((order) => (
          <View key={order.id} className="bg-teal-600 rounded-xl p-4 mb-3">
            <View className="flex-row items-center justify-between mb-3">
              <View className="flex-1">
                <View className="flex-row items-center justify-between mb-1">
                  <AppText className="text-lg font-bold text-white">{order.id}</AppText>
                  <View className={`px-2 py-1 rounded-full ${getStatusColor(order.status)}`}>
                    <AppText className="text-xs font-medium">
                      {order.status.replace('_', ' ').toUpperCase()}
                    </AppText>
                  </View>
                </View>
                <AppText className="text-gray-200">{order.customer}</AppText>
                <AppText className="text-sm text-gray-300">{order.vendor} • {order.items} items</AppText>
              </View>
            </View>

            <View className="flex-row items-center justify-between">
              <View>
                <AppText className="text-xl font-bold text-white">${order.amount}</AppText>
                <AppText className="text-sm text-gray-300">{order.time}</AppText>
              </View>
              <View className="flex-row">
                <TouchableOpacity
                  className="bg-blue-100 px-3 py-1 rounded-lg mr-2"
                  onPress={() => alert(`Viewing details for ${order.id}`)}
                >
                  <AppText className="text-blue-600 font-medium">Details</AppText>
                </TouchableOpacity>
                {order.status === 'pending' && (
                  <TouchableOpacity
                    className="bg-red-100 px-3 py-1 rounded-lg"
                    onPress={() => handleOrderAction(order.id, 'cancel')}
                  >
                    <AppText className="text-red-600 font-medium">Cancel</AppText>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

// Delivery Personnel Management Screen
const DeliveryPersonnelManagement = ({ navigation }) => {
  const [drivers, setDrivers] = useState([
    { id: 1, name: 'John Driver', email: 'john@driver.com', phone: '+1-555-0201', status: 'online', rating: 4.9, deliveries: 1567, earnings: 8450, vehicle: 'Motorcycle' },
    { id: 2, name: 'Sarah Delivery', email: 'sarah@delivery.com', phone: '+1-555-0202', status: 'offline', rating: 4.7, deliveries: 1234, earnings: 6780, vehicle: 'Car' },
    { id: 3, name: 'Mike Courier', email: 'mike@courier.com', phone: '+1-555-0203', status: 'online', rating: 4.8, deliveries: 987, earnings: 5690, vehicle: 'Bicycle' },
    { id: 4, name: 'Lisa Transport', email: 'lisa@transport.com', phone: '+1-555-0204', status: 'suspended', rating: 4.2, deliveries: 456, earnings: 2340, vehicle: 'Car' },
    { id: 5, name: 'Tom Express', email: 'tom@express.com', phone: '+1-555-0205', status: 'pending', rating: 0, deliveries: 0, earnings: 0, vehicle: 'Motorcycle' },
  ]);

  const [selectedFilter, setSelectedFilter] = useState('all');

  const filteredDrivers = drivers.filter(driver =>
    selectedFilter === 'all' || driver.status === selectedFilter
  );

  const handleDriverAction = (driverId, action) => {
    setDrivers(drivers.map(driver =>
      driver.id === driverId
        ? {
            ...driver,
            status: action === 'approve' ? 'offline' :
                   action === 'suspend' ? 'suspended' :
                   action === 'activate' ? 'offline' : driver.status
          }
        : driver
    ));
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="white" />

      {/* Header */}
      <View className="bg-white px-4 py-3 border-b border-gray-200">
        <View className="flex-row items-center">
          <TouchableOpacity onPress={() => navigation.goBack()} className="mr-3">
            <ArrowLeft size={24} color="#374151" />
          </TouchableOpacity>
          <AppText className="text-xl font-semibold text-gray-900">Delivery Personnel</AppText>
        </View>
      </View>

      {/* Filter Tabs */}
      <View className="bg-white px-4 py-3 border-b border-gray-200">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {['all', 'online', 'offline', 'pending', 'suspended'].map((filter) => (
            <TouchableOpacity
              key={filter}
              onPress={() => setSelectedFilter(filter)}
              className={`mr-3 px-4 py-2 rounded-full ${
                selectedFilter === filter ? 'bg-teal-600' : 'bg-gray-200'
              }`}
            >
              <AppText className={`capitalize font-medium ${
                selectedFilter === filter ? 'text-white' : 'text-gray-700'
              }`}>
                {filter}
              </AppText>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Drivers List */}
      <ScrollView className="flex-1 p-4">
        {filteredDrivers.map((driver) => (
          <View key={driver.id} className="bg-teal-600 rounded-xl p-4 mb-3">
            <View className="flex-row items-center justify-between mb-3">
              <View className="flex-1">
                <View className="flex-row items-center justify-between mb-1">
                  <AppText className="text-lg font-semibold text-white">{driver.name}</AppText>
                  <View className={`px-2 py-1 rounded-full ${
                    driver.status === 'online' ? 'bg-green-100' :
                    driver.status === 'offline' ? 'bg-gray-100' :
                    driver.status === 'pending' ? 'bg-yellow-100' :
                    driver.status === 'suspended' ? 'bg-red-100' : 'bg-gray-100'
                  }`}>
                    <AppText className={`text-xs font-medium ${
                      driver.status === 'online' ? 'text-green-800' :
                      driver.status === 'offline' ? 'text-gray-800' :
                      driver.status === 'pending' ? 'text-yellow-800' :
                      driver.status === 'suspended' ? 'text-red-800' : 'text-gray-800'
                    }`}>
                      {driver.status.toUpperCase()}
                    </AppText>
                  </View>
                </View>
                <AppText className="text-gray-200 mb-1">{driver.email}</AppText>
                <AppText className="text-sm text-gray-300">{driver.phone} • {driver.vehicle}</AppText>
              </View>
            </View>

            {driver.status !== 'pending' && (
              <View className="flex-row justify-between mb-3 py-2 bg-gray-100 rounded-lg px-3">
                <View className="items-center">
                  <AppText className="text-lg font-bold text-gray-900">★ {driver.rating}</AppText>
                  <AppText className="text-xs text-gray-500">Rating</AppText>
                </View>
                <View className="items-center">
                  <AppText className="text-lg font-bold text-gray-900">{driver.deliveries}</AppText>
                  <AppText className="text-xs text-gray-500">Deliveries</AppText>
                </View>
                <View className="items-center">
                  <AppText className="text-lg font-bold text-gray-900">${driver.earnings}</AppText>
                  <AppText className="text-xs text-gray-500">Earnings</AppText>
                </View>
              </View>
            )}

            <View className="flex-row justify-end">
              <TouchableOpacity
                className="bg-blue-100 px-3 py-1 rounded-lg mr-2"
                onPress={() => alert(`Viewing details for ${driver.name}`)}
              >
                <AppText className="text-blue-600 font-medium">View</AppText>
              </TouchableOpacity>

              {driver.status === 'pending' && (
                <>
                  <TouchableOpacity
                    className="bg-red-100 px-3 py-1 rounded-lg mr-2"
                    onPress={() => handleDriverAction(driver.id, 'reject')}
                  >
                    <AppText className="text-red-600 font-medium">Reject</AppText>
                  </TouchableOpacity>
                  <TouchableOpacity
                    className="bg-teal-100 px-3 py-1 rounded-lg"
                    onPress={() => handleDriverAction(driver.id, 'approve')}
                  >
                    <AppText className="text-teal-600 font-medium">Approve</AppText>
                  </TouchableOpacity>
                </>
              )}

              {(driver.status === 'online' || driver.status === 'offline') && (
                <TouchableOpacity
                  className="bg-red-100 px-3 py-1 rounded-lg"
                  onPress={() => handleDriverAction(driver.id, 'suspend')}
                >
                  <AppText className="text-red-600 font-medium">Suspend</AppText>
                </TouchableOpacity>
              )}

              {driver.status === 'suspended' && (
                <TouchableOpacity
                  className="bg-green-100 px-3 py-1 rounded-lg"
                  onPress={() => handleDriverAction(driver.id, 'activate')}
                >
                  <AppText className="text-green-600 font-medium">Activate</AppText>
                </TouchableOpacity>
              )}
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

// Analytics Screen
const Analytics = ({ navigation }) => {
  const [selectedPeriod, setSelectedPeriod] = useState('week');

  const analyticsData = {
    revenue: {
      total: 125420,
      change: '+18%',
      chart: [45, 52, 48, 61, 55, 67, 73],
    },
    orders: {
      total: 3847,
      change: '+12%',
      chart: [120, 135, 128, 142, 138, 155, 163],
    },
    users: {
      total: 12450,
      change: '+8%',
      new: 234,
    },
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="white" />

      {/* Header */}
      <View className="bg-white px-4 py-3 border-b border-gray-200">
        <View className="flex-row items-center">
          <TouchableOpacity onPress={() => navigation.goBack()} className="mr-3">
            <ArrowLeft size={24} color="#374151" />
          </TouchableOpacity>
          <AppText className="text-xl font-semibold text-gray-900">Analytics</AppText>
        </View>
      </View>

      <ScrollView className="flex-1 p-4">
        {/* Period Selection */}
        <View className="flex-row justify-between mb-4">
          {['day', 'week', 'month', 'year'].map((period) => (
            <TouchableOpacity
              key={period}
              onPress={() => setSelectedPeriod(period)}
              className={`flex-1 mx-1 px-3 py-2 rounded-lg ${
                selectedPeriod === period ? 'bg-teal-600' : 'bg-gray-200'
              }`}
            >
              <AppText className={`text-center capitalize font-medium ${
                selectedPeriod === period ? 'text-white' : 'text-gray-700'
              }`}>
                {period}
              </AppText>
            </TouchableOpacity>
          ))}
        </View>

        {/* Revenue Card */}
        <View className="bg-teal-600 rounded-xl p-4 mb-4">
          <AppText className="text-lg font-semibold text-white mb-2">Revenue</AppText>
          <View className="flex-row items-center justify-between mb-3">
            <AppText className="text-2xl font-bold text-white">${analyticsData.revenue.total}</AppText>
            <AppText className="text-green-400 font-medium">{analyticsData.revenue.change}</AppText>
          </View>
          <View className="flex-row justify-between">
            {analyticsData.revenue.chart.map((value, index) => (
              <View key={index} className="flex-1 items-center">
                <View
                  className="bg-teal-400 rounded-t-lg w-4"
                  style={{ height: value * 2 }}
                />
                <AppText className="text-xs text-gray-300 mt-1">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index]}
                </AppText>
              </View>
            ))}
          </View>
        </View>

        {/* Orders Card */}
        <View className="bg-teal-600 rounded-xl p-4 mb-4">
          <AppText className="text-lg font-semibold text-white mb-2">Orders</AppText>
          <View className="flex-row items-center justify-between mb-3">
            <AppText className="text-2xl font-bold text-white">{analyticsData.orders.total}</AppText>
            <AppText className="text-green-400 font-medium">{analyticsData.orders.change}</AppText>
          </View>
          <View className="flex-row justify-between">
            {analyticsData.orders.chart.map((value, index) => (
              <View key={index} className="flex-1 items-center">
                <View
                  className="bg-teal-400 rounded-t-lg w-4"
                  style={{ height: value }}
                />
                <AppText className="text-xs text-gray-300 mt-1">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index]}
                </AppText>
              </View>
            ))}
          </View>
        </View>

        {/* Users Card */}
        <View className="bg-teal-600 rounded-xl p-4">
          <AppText className="text-lg font-semibold text-white mb-2">Users</AppText>
          <View className="flex-row items-center justify-between mb-3">
            <AppText className="text-2xl font-bold text-white">{analyticsData.users.total}</AppText>
            <AppText className="text-green-400 font-medium">{analyticsData.users.change}</AppText>
          </View>
          <AppText className="text-gray-300">New Users: {analyticsData.users.new}</AppText>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const Tab = createBottomTabNavigator();

const AdminDashboardNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let IconComponent;

          if (route.name === 'Dashboard') {
            IconComponent = Home;
          } else if (route.name === 'Users') {
            IconComponent = Users;
          } else if (route.name === 'Orders') {
            IconComponent = ShoppingBag;
          } else if (route.name === 'Delivery') {
            IconComponent = Car;
          } else if (route.name === 'Analytics') {
            IconComponent = BarChart;
          }

          return <IconComponent size={size} color={color} />;
        },
        tabBarActiveTintColor: '#10b981',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { backgroundColor: 'white' },
      })}
    >
      <Tab.Screen name="Dashboard" component={AdminDashboard} />
      <Tab.Screen name="Users" component={UserManagement} />
      <Tab.Screen name="Orders" component={OrderManagement} />
      <Tab.Screen name="Delivery" component={DeliveryPersonnelManagement} />
      <Tab.Screen name="Analytics" component={Analytics} />
    </Tab.Navigator>
  );
};

export default AdminDashboardNavigator;