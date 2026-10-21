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
      <View className="w-full h-36 bg-primary rounded-b-2xl relative overflow-hidden p-3 justify-between">
        <View className="self-end bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full flex-row items-center gap-x-1">
          <View className="w-2 h-2 rounded-full bg-tertiary" />
          <Text className="text-[11px] font-bold text-tertiary">Top Rated Pro</Text>
        </View>
      </View>

      <View className="px-4 -mt-12">
        <View className="bg-surface-container-lowest rounded-xl p-4 shadow-md flex-col">
          <View className="flex-row items-end justify-between">
            <View className="relative">
              <Image
                source={{ uri: PROFILE_AVATAR_URI }}
                className="w-20 h-20 rounded-full bg-surface-container-highest"
                resizeMode="cover"
              />
              <View className="absolute bottom-0 right-0 bg-tertiary w-6 h-6 rounded-full items-center justify-center border-2 border-white">
                <MaterialIcons name="verified" size={14} color="#ffffff" />
              </View>
            </View>

            <View className="flex-row items-center gap-x-1.5 px-3 py-1.5 rounded-full bg-surface-container-low">
              <View className="w-2.5 h-2.5 rounded-full bg-tertiary" />
              <Text className="text-xs font-semibold text-tertiary">Online • Terima Order</Text>
            </View>
          </View>

          <View className="mt-3 flex-col">
            <View className="flex-row items-center gap-x-1.5">
              <Text className="text-xl font-bold text-on-surface">Dimas Setiawan</Text>
              <MaterialIcons name="check-circle" size={18} color="#3525cd" />
            </View>
            <Text className="text-sm font-medium text-primary mt-0.5">
              Senior UI/UX Designer &amp; Frontend Developer
            </Text>

            <View className="flex-row items-center gap-x-1 mt-1">
              <MaterialIcons name="location-on" size={16} color="#777587" />
              <Text className="text-xs text-on-surface-variant">Jakarta Selatan</Text>
              <Text className="text-xs text-outline mx-1">•</Text>
              <MaterialIcons name="verified-user" size={16} color="#005338" />
              <Text className="text-xs text-on-surface-variant">Terverifikasi KTP &amp; Portofolio</Text>
            </View>
          </View>

          <Text className="text-xs text-on-surface-variant mt-3 leading-relaxed">
            Membantu startup &amp; UMKM membangun aplikasi web &amp; mobile modern yang menarik dan
            konversinya tinggi. Berpengalaman 5+ tahun di industri tech.
          </Text>

          <View className="flex-row justify-between mt-4 pt-3 bg-surface-container-low rounded-lg p-2.5">
            <View className="flex-1 items-center">
              <Text className="text-base font-bold text-on-surface">84</Text>
              <Text className="text-[11px] text-on-surface-variant mt-0.5">Proyek Beres</Text>
            </View>
            <View className="flex-1 items-center border-x border-outline-variant/30">
              <View className="flex-row items-center gap-x-0.5">
                <Text className="text-base font-bold text-on-surface">4.9</Text>
                <MaterialIcons name="star" size={15} color="#F59E0B" />
              </View>
              <Text className="text-[11px] text-on-surface-variant mt-0.5">96 Ulasan</Text>
            </View>
            <View className="flex-1 items-center">
              <Text className="text-base font-bold text-tertiary">100%</Text>
              <Text className="text-[11px] text-on-surface-variant mt-0.5">Tepat Waktu</Text>
            </View>
          </View>

          <View className="flex-row gap-x-2 mt-4">
            <TouchableOpacity className="flex-1 h-11 rounded-lg bg-primary items-center justify-center flex-row gap-x-1.5 shadow-sm">
              <MaterialIcons name="edit" size={18} color="#ffffff" />
              <Text className="text-xs font-semibold text-white">Edit Profil</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-1 h-11 rounded-lg bg-surface-container items-center justify-center flex-row gap-x-1.5">
              <MaterialIcons name="share" size={18} color="#3525cd" />
              <Text className="text-xs font-semibold text-primary">Bagikan Portofolio</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}