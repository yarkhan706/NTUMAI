import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import SplashScreenComponent from './screens/SplashScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import SelectMethodScreen from './screens/SelectMethodScreen';
import OtpInputScreen from './screens/OtpInputScreen';
import LoginScreen from './screens/LoginScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import './global.css';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ContinueSignUpScreen from './screens/ContinueSignUpScreen';
import ContinueBoardingScreen from './screens/ContinueBoarding';
import HomeTabs from './screens/home/HomeTabs';
import DriverHome, { DriverDashboard, DriverEarnings, DriverOrders, DriverRoutes, DriverSettings } from './screens/driver/DriverHome';
import { CartScreen, ProductDetailScreen, RestaurantDetailScreen } from './screens/home/MarketplaceScreen';
import {CheckoutScreen,OrderTrackingScreen,RateOrderScreen } from './screens/checkout/CheckoutScreen';
import AdminDashboardNavigator from './screens/admin/AdminDashbooard';

// Keep splash screen visible while loading fonts
SplashScreen.preventAutoHideAsync();

export type RootStackParamList = {
  Splash: undefined;
  Onboarding: undefined;
  SelectMethod: undefined;
  Otp: { method: 'phone' | 'email'; value: string };
  Login: undefined;
  ContinueSignUp: undefined;
  ContinueBoarding: undefined;
  Home: undefined;
  DriverHome: undefined;
  DriverDashboard: undefined;
  DriverOrders: undefined;
  DriverRoutes: undefined;
  DriverEarnings: undefined;
  DriverSettings: undefined;
  RestaurantDetail: undefined;
  ProductDetail: undefined;
  Cart: undefined;
  Checkout: undefined;
  OrderTracking: undefined;
  RateOrder: undefined;
  AdminDashboard: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Ubuntu-Regular': require('./assets/fonts/Ubuntu-Regular.ttf'),
    'Ubuntu-Bold': require('./assets/fonts/Ubuntu-Bold.ttf'),
    'Ubuntu-Light': require('./assets/fonts/Ubuntu-Light.ttf'),
    'Ubuntu-Medium': require('./assets/fonts/Ubuntu-Medium.ttf'),
  });

  useEffect(() => {
    async function hideSplashScreen() {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    }
    hideSplashScreen();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Splash" component={SplashScreenComponent} />
            <Stack.Screen name="Onboarding" component={OnboardingScreen} />
            <Stack.Screen name="SelectMethod" component={SelectMethodScreen} />
            <Stack.Screen name="Otp" component={OtpInputScreen} />
            <Stack.Screen 
              name="ContinueSignUp" 
              component={ContinueSignUpScreen}
            />
            <Stack.Screen name="ContinueBoarding" component={ContinueBoardingScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Home" component={HomeTabs} />

             {/* Driver Navigation Stack */}
             <Stack.Screen 
                  name="DriverHome" 
                  component={DriverHome}
                  options={{
                    headerShown: false,
                    animation: 'slide_from_right',
                  }}
                />
                <Stack.Screen 
                  name="DriverDashboard" 
                  component={DriverDashboard}
                  options={{
                    headerShown: false,
                    animation: 'slide_from_right',
                  }}
                />
                <Stack.Screen 
                  name="DriverOrders" 
                  component={DriverOrders}
                  options={{
                    headerShown: false,
                    animation: 'slide_from_right',
                  }}
                />
                <Stack.Screen 
                  name="DriverRoutes" 
                  component={DriverRoutes}
                  options={{
                    headerShown: false,
                    animation: 'slide_from_right',
                  }}
                />
                <Stack.Screen 
                  name="DriverEarnings" 
                  component={DriverEarnings}
                  options={{
                    headerShown: false,
                    animation: 'slide_from_right',
                  }}
                />
                <Stack.Screen 
                  name="DriverSettings" 
                  component={DriverSettings}
                  options={{
                    headerShown: false,
                    animation: 'slide_from_right',
                  }}
                />

            {/* Marketplace Screens */}
            <Stack.Screen 
                  name="RestaurantDetail" 
                  component={RestaurantDetailScreen}
                  options={{
                    headerShown: false,
                    animation: 'slide_from_right',
                  }}
                />
                <Stack.Screen 
                  name="ProductDetail" 
                  component={ProductDetailScreen}
                  options={{
                    headerShown: false,
                    animation: 'slide_from_right',
                  }}
                />
                <Stack.Screen 
                  name="Cart" 
                  component={CartScreen}
                  options={{
                    headerShown: false,
                    animation: 'slide_from_bottom',
                  }}
                />
                <Stack.Screen 
                  name="Checkout" 
                  component={CheckoutScreen}
                  options={{
                    headerShown: false,
                    animation: 'slide_from_bottom',
                  }}
                />
                <Stack.Screen 
                  name="OrderTracking" 
                  component={OrderTrackingScreen}
                  options={{
                    headerShown: false,
                    animation: 'slide_from_bottom',
                  }}
                />
                <Stack.Screen 
                  name="RateOrder" 
                  component={RateOrderScreen}
                  options={{
                    headerShown: false,
                    animation: 'slide_from_bottom',
                  }}
                />

                   {/* Admin Dashboard Navigation */}
                <Stack.Screen
                  name="AdminDashboard"
                  component={AdminDashboardNavigator}
                  options={{
                    headerShown: false,
                    animation: 'slide_from_right',
                  }}
                />

          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}