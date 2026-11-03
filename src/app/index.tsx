import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.replace('/login');
    }, 100); 

    return () => clearTimeout(timeout);
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-[#faf8ff] items-center justify-center">
      <View className="items-center justify-center gap-y-4">
        <ActivityIndicator size="large" color="#3525cd" />
      </View>
    </SafeAreaView>
  );
}