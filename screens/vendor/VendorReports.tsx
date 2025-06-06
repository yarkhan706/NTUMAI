import {  ScrollView, View,  TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { VendorHeader } from "./VendorHeader";
import Text from "../../components/Text";

export function VendorReports() {
  const [selectedTab, setSelectedTab] = useState("Payment report");

  const reportData = {
    user: {
      name: "Gibson",
      avatar: "https://via.placeholder.com/50", // Placeholder avatar
      memberSince: "Jan 25, 2021",
    },
    totalBalance: "$250.00",
    accountNumber: "132 075 139",
    recentTransactions: [
      { name: "Madinigo Restaurant", amount: "9.50" },
      { name: "Top up for UDM", amount: "9.50" },
      { name: "Izonig 1 Stop", amount: "9.50" },
      { name: "Amanda foodpoint", amount: "9.50" },
    ],
    quickStats: [
      { title: "Orders Today", value: "28", color: "#3B82F6" },
      { title: "Avg Order Value", value: "$18.50", color: "#F59E0B" },
    ],
  };

  return (
    <View className="flex-1 bg-white">
      <VendorHeader />
      <StatusBar barStyle="dark-content" />

      {/* Tabs */}
      <View className="flex-row justify-around p-2 bg-white border-b border-gray-200">
        {["All", "Order report", "Payment report"].map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => setSelectedTab(tab)}
            className={`px-4 py-2 rounded-full ${
              selectedTab === tab ? "bg-emerald-600" : "bg-gray-100"
            }`}
          >
            <Text
              style={{fontFamily:'Ubuntu-Medium'}}
              className={`text-sm font-medium ${
                selectedTab === tab ? "text-white" : "text-gray-600"
              }`}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView className="p-4">
        {/* Profile Card */}
        <View className="bg-emerald-600 rounded-xl p-4 mb-6">
          <View className="flex-row items-center mb-4">
            <Image
              source={{ uri: reportData.user.avatar }}
              className="w-12 h-12 rounded-full mr-4 border-2 border-white"
            />
            <View>
              <Text style={{fontFamily:'Ubuntu-Medium'}} className="text-white text-lg font-semibold">
                {reportData.user.name}
              </Text>
              <Text style={{fontFamily:'Ubuntu-Regular'}} className="text-emerald-100 text-xs">
                Member since {reportData.user.memberSince}
              </Text>
            </View>
          </View>
          <View className="flex-row justify-between items-center">
            <View>
              <Text style={{fontFamily:'Ubuntu-Regular'}} className="text-emerald-100 text-xs">Account Number</Text>
              <Text style={{fontFamily:'Ubuntu-Bold'}} className="text-white text-xl font-bold">
                {reportData.accountNumber}
              </Text>
            </View>
            <View className="items-end">
              <Text style={{fontFamily:'Ubuntu-Regular'}} className="text-emerald-100 text-xs">Balance</Text>
              <Text style={{fontFamily:'Ubuntu-Bold'}} className="text-white text-xl font-bold">
                {reportData.totalBalance}
              </Text>
            </View>
          </View>
        </View>

        {/* Recent Transactions */}
        <View className="bg-white rounded-xl shadow-sm mb-6">
          <View className="border-b border-gray-100 p-4">
            <Text style={{fontFamily:'Ubuntu-Medium'}} className="text-lg font-semibold text-gray-900">
              Recent Transactions
            </Text>
          </View>
          {reportData.recentTransactions.map((tx, index) => (
            <View
              key={index}
              className="flex-row justify-between items-center p-4 border-b border-gray-100"
            >
              <View className="flex-row items-center">
                <View className="w-10 h-10 bg-emerald-100 rounded-full items-center justify-center mr-3">
                  <Ionicons name="restaurant" size={18} color="#10B981" />
                </View>
                <Text style={{fontFamily:'Ubuntu-Regular'}} className="text-gray-900 font-medium">{tx.name}</Text>
              </View>
              <Text style={{fontFamily:'Ubuntu-Bold'}} className="text-emerald-600 font-bold">${tx.amount}</Text>
            </View>
          ))}
          <TouchableOpacity className="items-center p-4">
            <Text style={{fontFamily:'Ubuntu-Regular'}} className="text-emerald-600 font-medium">
              View All Transactions
            </Text>
          </TouchableOpacity>
        </View>

        {/* Quick Stats */}
        <View className="flex-row -mx-2">
          {reportData.quickStats.map((stat, index) => (
            <View key={index} className="flex-1 px-2">
              <View className="bg-white p-4 rounded-xl shadow-sm mb-4 items-center">
                <View
                  className="w-10 h-10 rounded-full mb-3"
                  style={{ backgroundColor: `${stat.color}20` }}
                >
                  <View
                    className="w-6 h-6 rounded-full m-2"
                    style={{ backgroundColor: stat.color }}
                  />
                </View>
                <Text style={{fontFamily:'Ubuntu-Bold'}} className="text-2xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </Text>
                <Text style={{fontFamily:'Ubuntu-Regular'}} className="text-gray-500 text-sm">{stat.title}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
