import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ExploreScreen() {
  return (
    <SafeAreaView className="flex-1 bg-[#faf8ff] items-center justify-center">
      
      <View className="items-center justify-center">
        <Text className="text-xl font-bold text-[#3525cd]">
          Halaman Eksplor
        </Text>
        <Text className="text-sm text-[#777587] mt-2">
          (Tampilan masih kosong)
        </Text>
      </View>
    </SafeAreaView>
  );
}