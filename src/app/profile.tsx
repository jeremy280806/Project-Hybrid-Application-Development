import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const PROFILE_AVATAR_URI =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuARywp7xG3hLKPFkXkjAs2LtSHYNFm1FF6hYTwvkCVk0xEFGK7UrfrYjzGEtgHviexdFDGgZTB1-ExePYuE1o1Sua0jhqzGlQQigNEjVkXFUi9ziaEjJs0qxlfzPEH-2UEE0GxuwYR-uMdDpp91buCuSzzGuEalTjAtGZBJ7Sq4AxlWmEKeO9HxkzivHVKf16eTo_jE7frf_tQMzQyhyF2RGuzMoZiNhiNrC9n-vnvBc4VHm2OmGqqs';

function ProfileHeader() {
return (
    <View className="h-16 px-4 flex-row items-center justify-between bg-surface/85 border-b border-surface-container-high">
      <View className="flex-col">
        <Text className="font-extrabold text-lg text-primary tracking-tight leading-tight">
          ServiConnect
        </Text>
        <Text className="font-medium text-xs text-on-surface-variant">Profil Saya</Text>
      </View>

      <View className="flex-row items-center gap-x-1">
        <TouchableOpacity className="w-11 h-11 items-center justify-center">
          <MaterialIcons name="search" size={24} color="#131b2e" />
        </TouchableOpacity>

        <TouchableOpacity className="w-11 h-11 items-center justify-center">
          <MaterialIcons name="notifications" size={24} color="#131b2e" />
          <View className="absolute top-2.5 right-2.5 w-2.5 h-2.5 rounded-full bg-error border-2 border-surface" />
        </TouchableOpacity>

        <TouchableOpacity className="w-11 h-11 items-center justify-center">
          <Image
            source={{ uri: PROFILE_AVATAR_URI }}
            className="w-8 h-8 rounded-full"
            resizeMode="cover"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

function ProfileCard() {
  return (
    <View className="relative w-full">
      <View className="flex-col">
        <Text className="font-extrabold text-lg text-primary tracking-tight leading-tight">

        </Text>
      </View>
      
    </View>

  );
}
