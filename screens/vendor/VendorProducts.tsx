import React, { useState } from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Image,
  Modal,
  TextInput,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { VendorHeader } from './VendorHeader';
import Text from '../../components/Text';

export function VendorProducts() {
  const [activeTab, setActiveTab] = useState('Products');
  const [showAddModal, setShowAddModal] = useState(false);
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Mixed Salad',
      price: '$8.50',
      category: 'Salads',
      status: 'Active',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=100&h=100&fit=crop',
    },
  ]);
  const [categories, setCategories] = useState([
    { id: 1, name: 'Salads', count: 8, color: '#10B981' },
  ]);
  const [brands, setBrands] = useState([
    { id: 1, name: 'Brand A', logo: 'https://via.placeholder.com/100' },
  ]);
  const [promotions, setPromotions] = useState([]);

  // Toggle status helpers
  const toggleProductStatus = (productId) => {
    setProducts(products.map(product =>
      product.id === productId
        ? { ...product, status: product.status === 'Active' ? 'Inactive' : 'Active' }
        : product
    ));
  };

  const deleteItem = (type, itemId) => {
    Alert.alert(
      `Delete ${type}`,
      `Are you sure you want to delete this ${type.toLowerCase()}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            if (type === 'Product') {
              setProducts(products.filter(p => p.id !== itemId));
            } else if (type === 'Category') {
              setCategories(categories.filter(c => c.id !== itemId));
            } else if (type === 'Brand') {
              setBrands(brands.filter(b => b.id !== itemId));
            } else if (type === 'Promotion') {
              setPromotions(promotions.filter(p => p.id !== itemId));
            }
          },
        },
      ]
    );
  };

  const renderProducts = () => (
    <View className="px-4">
      {products.map(product => (
        <View key={product.id} className="bg-white rounded-xl p-4 mb-3">
          <View className="flex-row items-center">
            <Image
              source={{ uri: product.image }}
              className="w-16 h-16 rounded-lg mr-4"
            />
            <View className="flex-1">
              <Text style={{fontFamily:'Ubuntu-Medium'}} className="font-semibold text-gray-900 text-lg">{product.name}</Text>
              <Text style={{fontFamily:'Ubuntu-Regular'}} className="text-gray-500 text-sm">{product.category}</Text>
              <Text style={{fontFamily:'Ubuntu-Medium'}} className="font-bold text-emerald-600 text-lg mt-1">{product.price}</Text>
            </View>
            <View className="items-end">
              <TouchableOpacity
                onPress={() => toggleProductStatus(product.id)}
                className={`px-3 py-1 rounded-full mb-2 ${product.status === 'Active' ? 'bg-green-100' : 'bg-gray-100'}`}
              >
                <Text style={{fontFamily:'Ubuntu-Regular'}} className={`text-xs font-medium ${product.status === 'Active' ? 'text-green-600' : 'text-gray-600'}`}>
                  {product.status}
                </Text>
              </TouchableOpacity>
              <View className="flex-row">
                <TouchableOpacity className="p-2 mr-1">
                  <Ionicons name="create-outline" size={16} color="#6B7280" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => deleteItem('Product', product.id)} className="p-2">
                  <Ionicons name="trash-outline" size={16} color="#EF4444" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      ))}
    </View>
  );

  const renderCategories = () => (
    <View className="px-4">
      {categories.map(category => (
        <View key={category.id} className="bg-white rounded-xl p-4 mb-3 flex-row items-center justify-between">
          <View>
            <Text style={{fontFamily:'Ubuntu-Medium'}} className="font-semibold text-gray-900">{category.name}</Text>
            <Text style={{fontFamily:'Ubuntu-Regular'}} className="text-gray-500">{category.count} items</Text>
          </View>
          <View className="flex-row">
            <TouchableOpacity className="p-2 mr-1">
              <Ionicons name="create-outline" size={16} color="#6B7280" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => deleteItem('Category', category.id)} className="p-2">
              <Ionicons name="trash-outline" size={16} color="#EF4444" />
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );

  const renderBrands = () => (
    <View className="px-4">
      {brands.map(brand => (
        <View key={brand.id} className="bg-white rounded-xl p-4 mb-3 flex-row items-center justify-between">
          <View className="flex-row items-center">
            <Image source={{ uri: brand.logo }} className="w-12 h-12 rounded-full mr-3" />
            <Text style={{fontFamily:'Ubuntu-Medium'}} className="font-semibold text-gray-900">{brand.name}</Text>
          </View>
          <View className="flex-row">
            <TouchableOpacity className="p-2 mr-1">
              <Ionicons name="create-outline" size={16} color="#6B7280" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => deleteItem('Brand', brand.id)} className="p-2">
              <Ionicons name="trash-outline" size={16} color="#EF4444" />
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );

  const renderPromotions = () => (
    <View className="px-4">
      {promotions.length === 0 ? (
        <View className="bg-white rounded-xl p-6 items-center">
          <Ionicons name="pricetag-outline" size={48} color="#9CA3AF" />
          <Text style={{fontFamily:'Ubuntu-Regular'}} className="text-gray-500 mt-4">No promotions yet</Text>
        </View>
      ) : (
        promotions.map(promo => (
          <View key={promo.id} className="bg-white rounded-xl p-4 mb-3 flex-row items-center justify-between">
            <Text style={{fontFamily:'Ubuntu-Medium'}} className="font-semibold text-gray-900">{promo.name}</Text>
            <TouchableOpacity onPress={() => deleteItem('Promotion', promo.id)} className="p-2">
              <Ionicons name="trash-outline" size={16} color="#EF4444" />
            </TouchableOpacity>
          </View>
        ))
      )}
    </View>
  );

  const renderAddForm = () => {
    return (
      <ScrollView className="flex-1 px-4 py-6">
        {activeTab === 'Products' && (
          <>
            <Text style={{fontFamily:'Ubuntu-Medium'}} className="text-xl font-semibold mb-4">General Information</Text>
            <View className="mb-6">
              <Text style={{fontFamily:'Ubuntu-Regular'}} className="text-gray-700 font-medium mb-2">Product Name</Text>
              <TextInput className="border border-gray-300 rounded-lg px-4 py-3" placeholder="Enter product name" />
            </View>
            <View className="mb-6">
              <Text style={{fontFamily:'Ubuntu-Regular'}} className="text-gray-700 font-medium mb-2">Price</Text>
              <TextInput className="border border-gray-300 rounded-lg px-4 py-3" placeholder="$0.00" keyboardType="numeric" />
            </View>
            <View className="mb-6">
              <Text style={{fontFamily:'Ubuntu-Regular'}} className="text-gray-700 font-medium mb-2">Category</Text>
              <TextInput className="border border-gray-300 rounded-lg px-4 py-3" placeholder="Select category" />
            </View>
            <Text style={{fontFamily:'Ubuntu-Medium'}} className="text-xl font-semibold mb-4">Media</Text>
            <View className="mb-6">
              <Text style={{fontFamily:'Ubuntu-Regular'}} className="text-gray-700 font-medium mb-2">Product Image</Text>
              <TouchableOpacity className="border border-gray-300 rounded-lg px-4 py-3 items-center">
                <Text style={{fontFamily:'Ubuntu-Regular'}} className="text-gray-500">Upload Image</Text>
              </TouchableOpacity>
            </View>
            <Text style={{fontFamily:'Ubuntu-Medium'}} className="text-xl font-semibold mb-4">Variant</Text>
            <View className="mb-6">
              <Text style={{fontFamily:'Ubuntu-Regular'}} className="text-gray-700 font-medium mb-2">Size / Color / etc.</Text>
              <TextInput className="border border-gray-300 rounded-lg px-4 py-3" placeholder="Variant details" />
            </View>
            <Text style={{fontFamily:'Ubuntu-Medium'}} className="text-xl font-semibold mb-4">Options</Text>
            <View className="mb-6">
              <Text style={{fontFamily:'Ubuntu-Regular'}} className="text-gray-700 font-medium mb-2">Options</Text>
              <TextInput className="border border-gray-300 rounded-lg px-4 py-3" placeholder="Product options" />
            </View>
          </>
        )}
        {activeTab === 'Categories' && (
          <>
            <View className="mb-6">
              <Text style={{fontFamily:'Ubuntu-Regular'}} className="text-gray-700 font-medium mb-2">Category Name</Text>
              <TextInput className="border border-gray-300 rounded-lg px-4 py-3" placeholder="Enter category name" />
            </View>
          </>
        )}
        {activeTab === 'Brands' && (
          <>
            <View className="mb-6">
              <Text style={{fontFamily:'Ubuntu-Regular'}} className="text-gray-700 font-medium mb-2">Brand Name</Text>
              <TextInput className="border border-gray-300 rounded-lg px-4 py-3" placeholder="Enter brand name" />
            </View>
            <View className="mb-6">
              <Text style={{fontFamily:'Ubuntu-Regular'}} className="text-gray-700 font-medium mb-2">Brand Logo</Text>
              <TouchableOpacity className="border border-gray-300 rounded-lg px-4 py-3 items-center">
                <Text style={{fontFamily:'Ubuntu-Regular'}} className="text-gray-500">Upload Logo</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
        {activeTab === 'Promotion' && (
          <>
            <View className="mb-6">
              <Text style={{fontFamily:'Ubuntu-Regular'}} className="text-gray-700 font-medium mb-2">Promotion Name</Text>
              <TextInput className="border border-gray-300 rounded-lg px-4 py-3" placeholder="Enter promotion name" />
            </View>
            <View className="mb-6">
              <Text style={{fontFamily:'Ubuntu-Regular'}} className="text-gray-700 font-medium mb-2">Discount</Text>
              <TextInput className="border border-gray-300 rounded-lg px-4 py-3" placeholder="Enter discount" />
            </View>
          </>
        )}
      </ScrollView>
    );
  };

  return (
    <View className="flex-1 bg-gray-50">
      <VendorHeader  />
      <StatusBar barStyle="dark-content" />
      <View className="bg-white px-4 py-4 border-b border-gray-200">
        <View className="flex-row items-center justify-between mb-4">
          <Text style={{fontFamily:'Ubuntu-Bold'}} className="text-2xl font-bold text-gray-900">Marketplace</Text>
          <TouchableOpacity onPress={() => setShowAddModal(true)} className="bg-emerald-600 px-4 py-2 rounded-lg flex-row items-center">
            <Ionicons name="add" size={20} color="white" />
            <Text style={{fontFamily:'Ubuntu-Medium'}} className="text-white font-medium ml-1">Add New</Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row bg-gray-100 rounded-lg p-1">
          {['Products', 'Categories', 'Brands', 'Promotion'].map(tab => (
            <TouchableOpacity
              key={tab}
              onPress={() => setActiveTab(tab)}
              className={`flex-1 py-2 rounded-md ${activeTab === tab ? 'bg-white' : ''}`}
            >
              <Text style={{fontFamily:'Ubuntu-Medium'}} className={`text-center font-medium ${activeTab === tab ? 'text-emerald-600' : 'text-gray-600'}`}>
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <ScrollView className="flex-1 py-4">
        {activeTab === 'Products' && renderProducts()}
        {activeTab === 'Categories' && renderCategories()}
        {activeTab === 'Brands' && renderBrands()}
        {activeTab === 'Promotion' && renderPromotions()}
      </ScrollView>
      <Modal visible={showAddModal} animationType="slide" presentationStyle="pageSheet">
        <SafeAreaView className="flex-1 bg-white">
          <View className="px-4 py-4 border-b border-gray-200">
            <View className="flex-row items-center justify-between">
              <TouchableOpacity onPress={() => setShowAddModal(false)}>
                <Text style={{fontFamily:'Ubuntu-Medium'}} className="text-emerald-600 font-medium">Cancel</Text>
              </TouchableOpacity>
              <Text style={{fontFamily:'Ubuntu-Medium'}} className="text-lg font-semibold">Add {activeTab.slice(0, -1)}</Text>
              <TouchableOpacity>
                <Text style={{fontFamily:'Ubuntu-Medium'}} className="text-emerald-600 font-medium">Save</Text>
              </TouchableOpacity>
            </View>
          </View>
          {renderAddForm()}
        </SafeAreaView>
      </Modal>
    </View>
  );
}
