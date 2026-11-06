import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function OrderDetailScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-[#faf8ff]" edges={['top', 'left', 'right']}>
      {/* HEADER */}
      <View className="h-16 px-4 flex-row items-center justify-between bg-[#faf8ff] z-50 shadow-sm border-b border-[#e2e7ff]">
        <View className="flex-row items-center gap-x-3 flex-1">
          <TouchableOpacity
            className="w-10 h-10 items-center justify-center rounded-full active:bg-[#e2e7ff]"
            onPress={() => router.back()}
          >
            <MaterialIcons name="arrow-back" size={24} color="#131b2e" />
          </TouchableOpacity>
          <View className="flex-col">
            <Text className="font-extrabold text-base text-[#131b2e]">Order Details</Text>
            <Text className="text-[10px] text-[#464555] uppercase tracking-wider font-bold">
              ServiConnect Order
            </Text>
          </View>
        </View>

        <View className="flex-row items-center gap-x-2">
          <View className="px-2 py-0.5 rounded-full bg-[#acedff]">
            <Text className="text-[11px] font-bold text-[#004e5c]">Diproses</Text>
          </View>
          <TouchableOpacity className="w-9 h-9 items-center justify-center rounded-full active:bg-[#e2e7ff]">
            <MaterialIcons name="help-outline" size={20} color="#464555" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 16, paddingBottom: 100, gap: 16 }}
        showsVerticalScrollIndicator={false}
      ></ScrollView>