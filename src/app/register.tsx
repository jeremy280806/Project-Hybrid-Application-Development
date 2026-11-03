import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RegisterScreen() {
    const router = useRouter();

    const [role, setRole] = useState<'client' | 'partner'>('client');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [agreeTerms, setAgreeTerms] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    
    const handleRegister = ()=> {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            router.replace('/login');
        }, 1500);
    };

    return (
    <SafeAreaView className="flex-1 bg-[#faf8ff]">
      <View className="h-16 px-4 flex-row items-center justify-between bg-[#faf8ff]">
        <TouchableOpacity
          className="w-11 h-11 items-center justify-center rounded-full active:bg-[#e2e7ff]"
          onPress={() => router.back()}
        >
          <MaterialIcons name="arrow-back" size={24} color="#131b2e" />
        </TouchableOpacity>

        <View className="flex-row items-center gap-x-2">
          <Text className="text-xs font-semibold uppercase tracking-wider text-[#464555]">
            Daftar
          </Text>
          <View className="w-8 h-8 rounded-full bg-[#3525cd] items-center justify-center">
            <MaterialIcons name="person-add" size={18} color="#ffffff" />
          </View>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingTop: 8,
          paddingBottom: 40,
        }}
        showsVerticalScrollIndicator={false}
      >

        <View className="items-center mb-6 pt-2">
          <View className="mb-4 relative">
            <View className="w-20 h-20 rounded-2xl bg-white shadow-sm p-2 flex items-center justify-center border border-[#e2e7ff]">
              <View className="w-full h-full rounded-xl bg-[#3525cd] items-center justify-center">
                <MaterialIcons name="chat" size={32} color="#ffffff" />
              </View>
            </View>
            <View className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#006e4b] items-center justify-center shadow-sm border-2 border-white">
              <MaterialIcons name="verified" size={14} color="#ffffff" />
            </View>
          </View>

          <View className="flex-row items-center px-3 py-1 rounded-full bg-[#e2e7ff] mb-2">
            <View className="w-2 h-2 rounded-full bg-[#005338]" />
            <Text className="text-xs font-medium text-[#464555] ml-1.5">
              Gabung Komunitas Jasa
            </Text>
          </View>

          <Text className="font-bold text-2xl text-[#131b2e] text-center mb-1.5 tracking-tight">
            Buat Akun Baru ✨
          </Text>
          <Text className="text-sm text-[#464555] text-center leading-5 px-4">
            Daftar sekarang untuk mulai mencari atau menawarkan jasa profesional terpercaya.
          </Text>
        </View>
    
}