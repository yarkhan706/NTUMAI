// screens/checkout/CheckoutScreen.tsx
import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  TouchableOpacity, 
  TextInput, 
  Image, 
  Alert,
  Modal,
  Dimensions
} from 'react-native';
import { 
  ArrowLeft,
  MapPin,
  CreditCard,
  Truck,
  Clock,
  User,
  Phone,
  Edit,
  Check,
  Star,
  Gift,
  Plus,
  Minus,
  X
} from 'lucide-react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

const { width } = Dimensions.get('window');

// Types
type RootStackParamList = {
  Home: undefined;
  Cart: undefined;
  Checkout: undefined;
  OrderTracking: { orderId: string };
  RateOrder: { orderId: string; orderDetails: any };
};

type CheckoutScreenProps = NativeStackScreenProps<RootStackParamList, 'Checkout'>;
type OrderTrackingScreenProps = NativeStackScreenProps<RootStackParamList, 'OrderTracking'>;
type RateOrderScreenProps = NativeStackScreenProps<RootStackParamList, 'RateOrder'>;

interface PaymentMethod {
  id: string;
  type: 'card' | 'mobile' | 'cash';
  name: string;
  details: string;
  icon: string;
  isDefault?: boolean;
}

interface Address {
  id: string;
  type: 'home' | 'work' | 'other';
  name: string;
  address: string;
  isDefault?: boolean;
}

// Mock data for global cart (in real app, use Context/Redux)
const mockCartItems = [
  {
    id: '1',
    name: 'Mixed Salad',
    price: 45,
    quantity: 2,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop',
    restaurant: 'Dewaxe Restaurant'
  },
  {
    id: '2',
    name: 'Soulful Jollof',
    price: 75,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&h=400&fit=crop',
    restaurant: 'Dewaxe Restaurant'
  }
];

const mockAddresses: Address[] = [
  {
    id: '1',
    type: 'home',
    name: 'Home',
    address: 'Plot 123, Lusaka Road, Lusaka, Zambia',
    isDefault: true
  },
  {
    id: '2',
    type: 'work',
    name: 'Office',
    address: 'Cairo Road, Business District, Lusaka, Zambia'
  }
];

const mockPaymentMethods: PaymentMethod[] = [
  {
    id: '1',
    type: 'mobile',
    name: 'MTN Mobile Money',
    details: '**** **** 1234',
    icon: '📱',
    isDefault: true
  },
  {
    id: '2',
    type: 'card',
    name: 'Visa Card',
    details: '**** **** **** 5678',
    icon: '💳'
  },
  {
    id: '3',
    type: 'cash',
    name: 'Cash on Delivery',
    details: 'Pay when order arrives',
    icon: '💵'
  }
];

// Checkout Screen
export function CheckoutScreen({ navigation }: CheckoutScreenProps) {
  const [selectedAddress, setSelectedAddress] = useState<Address>(mockAddresses[0]);
  const [selectedPayment, setSelectedPayment] = useState<PaymentMethod>(mockPaymentMethods[0]);
  const [deliveryNote, setDeliveryNote] = useState('');
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const subtotal = mockCartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = 15;
  const serviceFee = 5;
  const discount = 20;
  const total = subtotal + deliveryFee + serviceFee - discount;

  const handlePlaceOrder = async () => {
    setIsProcessing(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      const orderId = `ORD${Date.now()}`;
      navigation.navigate('OrderTracking', { orderId });
    }, 2000);
  };

  return (
    <View className='flex-1 bg-gray-50'>
      {/* Header */}
      <View className='bg-white flex-row items-center px-4 py-6 mt-12 border-b border-gray-100'>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft size={24} color="#374151" />
        </TouchableOpacity>
        <Text className='text-xl font-bold text-gray-800 ml-4'>Checkout</Text>
      </View>

      <ScrollView className='flex-1' showsVerticalScrollIndicator={false}>
        {/* Delivery Address */}
        <View className='bg-white mx-4 mt-4 p-4 rounded-2xl shadow-sm'>
          <View className='flex-row items-center justify-between mb-3'>
            <Text className='text-gray-800 font-semibold text-lg'>Delivery Address</Text>
            <TouchableOpacity onPress={() => setShowAddressModal(true)}>
              <Edit size={18} color="#10B981" />
            </TouchableOpacity>
          </View>
          
          <View className='flex-row items-start'>
            <MapPin size={20} color="#10B981" />
            <View className='ml-3 flex-1'>
              <Text className='text-gray-800 font-medium'>{selectedAddress.name}</Text>
              <Text className='text-gray-600 text-sm mt-1'>{selectedAddress.address}</Text>
            </View>
          </View>
        </View>

        {/* Order Summary */}
        <View className='bg-white mx-4 mt-4 p-4 rounded-2xl shadow-sm'>
          <Text className='text-gray-800 font-semibold text-lg mb-4'>Order Summary</Text>
          
          {mockCartItems.map(item => (
            <View key={item.id} className='flex-row items-center mb-3 pb-3 border-b border-gray-100 last:border-b-0'>
              <Image 
                source={{ uri: item.image }}
                className='w-12 h-12 rounded-lg'
                resizeMode='cover'
              />
              <View className='flex-1 ml-3'>
                <Text className='text-gray-800 font-medium'>{item.name}</Text>
                <Text className='text-gray-500 text-sm'>{item.restaurant}</Text>
              </View>
              <View className='items-end'>
                <Text className='text-gray-800 font-semibold'>K{item.price * item.quantity}</Text>
                <Text className='text-gray-500 text-sm'>Qty: {item.quantity}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Payment Method */}
        <View className='bg-white mx-4 mt-4 p-4 rounded-2xl shadow-sm'>
          <View className='flex-row items-center justify-between mb-3'>
            <Text className='text-gray-800 font-semibold text-lg'>Payment Method</Text>
            <TouchableOpacity onPress={() => setShowPaymentModal(true)}>
              <Edit size={18} color="#10B981" />
            </TouchableOpacity>
          </View>
          
          <View className='flex-row items-center'>
            <Text className='text-2xl mr-3'>{selectedPayment.icon}</Text>
            <View className='flex-1'>
              <Text className='text-gray-800 font-medium'>{selectedPayment.name}</Text>
              <Text className='text-gray-600 text-sm'>{selectedPayment.details}</Text>
            </View>
            {selectedPayment.isDefault && (
              <View className='bg-green-100 px-2 py-1 rounded-full'>
                <Text className='text-green-600 text-xs font-medium'>Default</Text>
              </View>
            )}
          </View>
        </View>

        {/* Delivery Instructions */}
        <View className='bg-white mx-4 mt-4 p-4 rounded-2xl shadow-sm'>
          <Text className='text-gray-800 font-semibold text-lg mb-3'>Delivery Instructions</Text>
          <TextInput
            placeholder="Add delivery note (optional)"
            className='bg-gray-50 p-3 rounded-xl text-gray-700'
            placeholderTextColor="#9CA3AF"
            value={deliveryNote}
            onChangeText={setDeliveryNote}
            multiline
            numberOfLines={3}
          />
        </View>

        {/* Order Details */}
        <View className='bg-white mx-4 mt-4 mb-4 p-4 rounded-2xl shadow-sm'>
          <Text className='text-gray-800 font-semibold text-lg mb-4'>Order Details</Text>
          
          <View className='space-y-2'>
            <View className='flex-row justify-between'>
              <Text className='text-gray-600'>Subtotal</Text>
              <Text className='text-gray-800'>K{subtotal}</Text>
            </View>
            <View className='flex-row justify-between'>
              <Text className='text-gray-600'>Delivery Fee</Text>
              <Text className='text-gray-800'>K{deliveryFee}</Text>
            </View>
            <View className='flex-row justify-between'>
              <Text className='text-gray-600'>Service Fee</Text>
              <Text className='text-gray-800'>K{serviceFee}</Text>
            </View>
            <View className='flex-row justify-between'>
              <Text className='text-gray-600'>Discount</Text>
              <Text className='text-green-600'>-K{discount}</Text>
            </View>
            <View className='border-t border-gray-200 pt-2 mt-2'>
              <View className='flex-row justify-between'>
                <Text className='text-gray-800 font-bold text-lg'>Total</Text>
                <Text className='text-teal-500 font-bold text-lg'>K{total}</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Place Order Button */}
      <View className='px-4 py-6 bg-white border-t border-gray-100'>
        <TouchableOpacity
          onPress={handlePlaceOrder}
          disabled={isProcessing}
          className={`py-4 rounded-2xl ${isProcessing ? 'bg-gray-400' : 'bg-teal-500'}`}
        >
          <Text className='text-white font-bold text-lg text-center'>
            {isProcessing ? 'Processing...' : `Place Order • K${total}`}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Address Selection Modal */}
      <Modal visible={showAddressModal} transparent animationType="slide">
        <View className='flex-1 bg-black bg-opacity-50 justify-end'>
          <View className='bg-white rounded-t-3xl p-4 max-h-96'>
            <View className='flex-row items-center justify-between mb-4'>
              <Text className='text-xl font-bold text-gray-800'>Select Address</Text>
              <TouchableOpacity onPress={() => setShowAddressModal(false)}>
                <X size={24} color="#9CA3AF" />
              </TouchableOpacity>
            </View>
            
            <ScrollView>
              {mockAddresses.map(address => (
                <TouchableOpacity
                  key={address.id}
                  onPress={() => {
                    setSelectedAddress(address);
                    setShowAddressModal(false);
                  }}
                  className='flex-row items-start p-3 rounded-xl mb-2 border border-gray-200'
                >
                  <MapPin size={20} color="#10B981" />
                  <View className='ml-3 flex-1'>
                    <Text className='text-gray-800 font-medium'>{address.name}</Text>
                    <Text className='text-gray-600 text-sm'>{address.address}</Text>
                  </View>
                  {selectedAddress.id === address.id && (
                    <Check size={20} color="#10B981" />
                  )}
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </Modal>

      {/* Payment Method Modal */}
      <Modal visible={showPaymentModal} transparent animationType="slide">
        <View className='flex-1 bg-black bg-opacity-50 justify-end'>
          <View className='bg-white rounded-t-3xl p-4 max-h-96'>
            <View className='flex-row items-center justify-between mb-4'>
              <Text className='text-xl font-bold text-gray-800'>Payment Method</Text>
              <TouchableOpacity onPress={() => setShowPaymentModal(false)}>
                <X size={24} color="#9CA3AF" />
              </TouchableOpacity>
            </View>
            
            <ScrollView>
              {mockPaymentMethods.map(method => (
                <TouchableOpacity
                  key={method.id}
                  onPress={() => {
                    setSelectedPayment(method);
                    setShowPaymentModal(false);
                  }}
                  className='flex-row items-center p-3 rounded-xl mb-2 border border-gray-200'
                >
                  <Text className='text-2xl mr-3'>{method.icon}</Text>
                  <View className='flex-1'>
                    <Text className='text-gray-800 font-medium'>{method.name}</Text>
                    <Text className='text-gray-600 text-sm'>{method.details}</Text>
                  </View>
                  {selectedPayment.id === method.id && (
                    <Check size={20} color="#10B981" />
                  )}
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
}

// Order Tracking Screen
export function OrderTrackingScreen({ route, navigation }: OrderTrackingScreenProps) {
  const { orderId } = route.params;
  const [orderStatus, setOrderStatus] = useState('confirmed');
  const [estimatedTime, setEstimatedTime] = useState(25);

  const orderSteps = [
    { id: 'confirmed', title: 'Order Confirmed', subtitle: 'Your order has been confirmed', time: '2 mins ago', completed: true },
    { id: 'preparing', title: 'Preparing Food', subtitle: 'Restaurant is preparing your order', time: '', completed: orderStatus !== 'confirmed' },
    { id: 'pickup', title: 'Ready for Pickup', subtitle: 'Driver is on the way to restaurant', time: '', completed: false },
    { id: 'delivery', title: 'Out for Delivery', subtitle: 'Driver is on the way to you', time: '', completed: false },
    { id: 'delivered', title: 'Delivered', subtitle: 'Order delivered successfully', time: '', completed: false }
  ];

  useEffect(() => {
    // Simulate order status updates
    const timer1 = setTimeout(() => setOrderStatus('preparing'), 3000);
    const timer2 = setTimeout(() => setOrderStatus('pickup'), 8000);
    const timer3 = setTimeout(() => setOrderStatus('delivery'), 15000);
    const timer4 = setTimeout(() => {
      setOrderStatus('delivered');
      // Navigate to rating screen
      setTimeout(() => {
        navigation.navigate('RateOrder', { 
          orderId, 
          orderDetails: { 
            restaurant: 'Dewaxe Restaurant',
            items: mockCartItems,
            total: 145
          }
        });
      }, 2000);
    }, 25000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  useEffect(() => {
    // Update estimated time based on status
    if (orderStatus === 'preparing') setEstimatedTime(20);
    if (orderStatus === 'pickup') setEstimatedTime(15);
    if (orderStatus === 'delivery') setEstimatedTime(8);
    if (orderStatus === 'delivered') setEstimatedTime(0);
  }, [orderStatus]);

  return (
    <View className='flex-1 bg-gray-50'>
      {/* Header */}
      <View className='bg-teal-500 pt-12 pb-6 px-4'>
        <View className='flex-row items-center justify-between mb-4'>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <ArrowLeft size={24} color="white" />
          </TouchableOpacity>
          <Text className='text-xl font-bold text-white'>Order Tracking</Text>
          <View />
        </View>
        
        <View className='bg-white bg-opacity-20 p-4 rounded-2xl'>
          <Text className='text-white text-lg font-semibold mb-1'>Order #{orderId.slice(-6)}</Text>
          <Text className='text-white text-sm opacity-90'>Dewaxe Restaurant</Text>
          {estimatedTime > 0 && (
            <View className='flex-row items-center mt-3'>
              <Clock size={16} color="white" />
              <Text className='text-white ml-2 font-medium'>
                Estimated delivery: {estimatedTime} mins
              </Text>
            </View>
          )}
        </View>
      </View>

      <ScrollView className='flex-1 px-4 py-6'>
        {/* Order Status */}
        <View className='bg-white rounded-2xl p-4 mb-6 shadow-sm'>
          <Text className='text-gray-800 font-semibold text-lg mb-4'>Order Status</Text>
          
          {orderSteps.map((step, index) => (
            <View key={step.id} className='flex-row items-start mb-4 last:mb-0'>
              <View className={`w-6 h-6 rounded-full items-center justify-center mr-4 mt-1 ${
                step.completed ? 'bg-teal-500' : 'bg-gray-200'
              }`}>
                {step.completed && <Check size={14} color="white" />}
              </View>
              
              <View className='flex-1'>
                <Text className={`font-medium ${step.completed ? 'text-gray-800' : 'text-gray-400'}`}>
                  {step.title}
                </Text>
                <Text className={`text-sm ${step.completed ? 'text-gray-600' : 'text-gray-400'}`}>
                  {step.subtitle}
                </Text>
                {step.time && (
                  <Text className='text-xs text-gray-400 mt-1'>{step.time}</Text>
                )}
              </View>
            </View>
          ))}
        </View>

        {/* Driver Info (shown when out for delivery) */}
        {orderStatus === 'delivery' && (
          <View className='bg-white rounded-2xl p-4 mb-6 shadow-sm'>
            <Text className='text-gray-800 font-semibold text-lg mb-4'>Your Driver</Text>
            
            <View className='flex-row items-center'>
              <Image 
                source={{ uri: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }}
                className='w-16 h-16 rounded-full'
              />
              <View className='flex-1 ml-4'>
                <Text className='text-gray-800 font-semibold text-lg'>John Mwamba</Text>
                <View className='flex-row items-center mt-1'>
                  <Star size={14} color="#FCD34D" fill="#FCD34D" />
                  <Text className='text-gray-600 ml-1 text-sm'>4.8 (245 trips)</Text>
                </View>
                <Text className='text-gray-500 text-sm mt-1'>Toyota Vitz • ABC 123Z</Text>
              </View>
              <TouchableOpacity className='bg-teal-500 w-12 h-12 rounded-full items-center justify-center'>
                <Phone size={20} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        )}

        {/* Order Items */}
        <View className='bg-white rounded-2xl p-4 mb-6 shadow-sm'>
          <Text className='text-gray-800 font-semibold text-lg mb-4'>Order Items</Text>
          
          {mockCartItems.map(item => (
            <View key={item.id} className='flex-row items-center mb-3 pb-3 border-b border-gray-100 last:border-b-0'>
              <Image 
                source={{ uri: item.image }}
                className='w-12 h-12 rounded-lg'
                resizeMode='cover'
              />
              <View className='flex-1 ml-3'>
                <Text className='text-gray-800 font-medium'>{item.name}</Text>
                <Text className='text-gray-500 text-sm'>Qty: {item.quantity}</Text>
              </View>
              <Text className='text-gray-800 font-semibold'>K{item.price * item.quantity}</Text>
            </View>
          ))}
          
          <View className='border-t border-gray-200 pt-3 mt-3'>
            <View className='flex-row justify-between'>
              <Text className='text-gray-800 font-bold'>Total</Text>
              <Text className='text-teal-500 font-bold'>K145</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

// Rate Order Screen
export function RateOrderScreen({ route, navigation }: RateOrderScreenProps) {
  const { orderId, orderDetails } = route.params;
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [driverRating, setDriverRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmitRating = async () => {
    if (rating === 0) {
      Alert.alert('Rating Required', 'Please rate your order experience');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      Alert.alert(
        'Thank You!',
        'Your feedback helps us improve our service',
        [{ text: 'OK', onPress: () => navigation.navigate('Home') }]
      );
    }, 1500);
  };

  const StarRating = ({ 
    rating, 
    onRatingChange, 
    size = 32 
  }: { 
    rating: number; 
    onRatingChange: (rating: number) => void;
    size?: number;
  }) => (
    <View className='flex-row'>
      {[1, 2, 3, 4, 5].map(star => (
        <TouchableOpacity
          key={star}
          onPress={() => onRatingChange(star)}
          className='mr-2'
        >
          <Star 
            size={size} 
            color={star <= rating ? "#FCD34D" : "#E5E7EB"} 
            fill={star <= rating ? "#FCD34D" : "#E5E7EB"}
          />
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <View className='flex-1 bg-gray-50'>
      {/* Header */}
      <View className='bg-white flex-row items-center px-4 py-6 mt-12 border-b border-gray-100'>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <ArrowLeft size={24} color="#374151" />
        </TouchableOpacity>
        <Text className='text-xl font-bold text-gray-800 ml-4'>Rate Your Order</Text>
      </View>

      <ScrollView className='flex-1 px-4 py-6'>
        {/* Order Success */}
        <View className='bg-white rounded-2xl p-6 mb-6 shadow-sm items-center'>
          <View className='w-20 h-20 bg-green-100 rounded-full items-center justify-center mb-4'>
            <Check size={40} color="#10B981" />
          </View>
          <Text className='text-2xl font-bold text-gray-800 mb-2'>Order Delivered!</Text>
          <Text className='text-gray-600 text-center mb-4'>
            Your order from {orderDetails.restaurant} has been delivered successfully
          </Text>
          <Text className='text-gray-500 text-sm'>Order #{orderId.slice(-6)}</Text>
        </View>

        {/* Rate Restaurant */}
        <View className='bg-white rounded-2xl p-4 mb-6 shadow-sm'>
          <Text className='text-gray-800 font-semibold text-lg mb-4'>Rate Restaurant</Text>
          
          <View className='items-center mb-4'>
            <Text className='text-gray-800 font-medium mb-3'>{orderDetails.restaurant}</Text>
            <StarRating rating={rating} onRatingChange={setRating} />
            <Text className='text-gray-500 text-sm mt-2'>
              {rating === 0 ? 'Tap to rate' : 
               rating === 1 ? 'Poor' :
               rating === 2 ? 'Fair' :
               rating === 3 ? 'Good' :
               rating === 4 ? 'Very Good' : 'Excellent'}
            </Text>
          </View>

          <TextInput
            placeholder="Share your experience (optional)"
            className='bg-gray-50 p-4 rounded-xl text-gray-700 h-24'
            placeholderTextColor="#9CA3AF"
            value={review}
            onChangeText={setReview}
            multiline
            textAlignVertical="top"
          />
        </View>

        {/* Rate Driver */}
        <View className='bg-white rounded-2xl p-4 mb-6 shadow-sm'>
          <Text className='text-gray-800 font-semibold text-lg mb-4'>Rate Driver</Text>
          
          <View className='flex-row items-center mb-4'>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }}
              className='w-12 h-12 rounded-full mr-3'
            />
            <View className='flex-1'>
              <Text className='text-gray-800 font-medium'>John Mwamba</Text>
              <Text className='text-gray-500 text-sm'>Delivery Driver</Text>
            </View>
          </View>

          <View className='items-center'>
            <StarRating 
              rating={driverRating} 
              onRatingChange={setDriverRating}
              size={28}
            />
          </View>
        </View>

        {/* Order Summary */}
        <View className='bg-white rounded-2xl p-4 mb-6 shadow-sm'>
          <Text className='text-gray-800 font-semibold text-lg mb-4'>Order Summary</Text>
          
          {orderDetails.items.map((item: any) => (
            <View key={item.id} className='flex-row items-center mb-2'>
              <Text className='flex-1 text-gray-600'>{item.quantity}x {item.name}</Text>
              <Text className='text-gray-800'>K{item.price * item.quantity}</Text>
            </View>
          ))}
          
          <View className='border-t border-gray-200 pt-2 mt-2'>
            <View className='flex-row justify-between'>
              <Text className='text-gray-800 font-bold'>Total Paid</Text>
              <Text className='text-teal-500 font-bold'>K{orderDetails.total}</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Submit Button */}
      <View className='px-4 py-6 bg-white border-t border-gray-100'>
        <TouchableOpacity
          onPress={handleSubmitRating}
          disabled={isSubmitting}
          className={`py-4 rounded-2xl ${isSubmitting ? 'bg-gray-400' : 'bg-teal-500'}`}
        >
          <Text className='text-white font-bold text-lg text-center'>
            {isSubmitting ? 'Submitting...' : 'Submit Rating'}
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          className='py-3 mt-3'
        >
          <Text className='text-gray-500 text-center font-medium'>Skip for now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}