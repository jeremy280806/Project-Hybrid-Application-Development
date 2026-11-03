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

  const handleRegister = () => {
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

        <View className="bg-[#f2f3ff] p-1 rounded-xl flex-row items-center shadow-sm mb-6">
          <TouchableOpacity
            className={`flex-1 py-2.5 rounded-lg flex-row items-center justify-center gap-x-2 transition-all ${
              role === 'client' ? 'bg-white shadow-sm' : 'bg-transparent'
            }`}
            onPress={() => setRole('client')}
          >
            <MaterialIcons
              name="person-search"
              size={20}
              color={role === 'client' ? '#3525cd' : '#777587'}
            />
            <Text
              className={`font-semibold text-sm ${
                role === 'client' ? 'text-[#3525cd]' : 'text-[#777587]'
              }`}
            >
              Pencari Jasa
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className={`flex-1 py-2.5 rounded-lg flex-row items-center justify-center gap-x-2 transition-all ${
              role === 'partner' ? 'bg-white shadow-sm' : 'bg-transparent'
            }`}
            onPress={() => setRole('partner')}
          >
            <MaterialIcons
              name="handyman"
              size={20}
              color={role === 'partner' ? '#3525cd' : '#777587'}
            />
            <Text
              className={`font-semibold text-sm ${
                role === 'partner' ? 'text-[#3525cd]' : 'text-[#777587]'
              }`}
            >
              Penyedia Jasa
            </Text>
          </TouchableOpacity>
        </View>

        <View className="bg-white rounded-2xl shadow-sm p-5 mb-6 gap-y-4 border border-[#f2f3ff]">
          
          <View className="gap-y-1.5">
            <Text className="text-xs font-semibold text-[#131b2e]">Nama Lengkap</Text>
            <View className="relative justify-center">
              <View className="absolute left-3.5 z-10">
                <MaterialIcons name="person" size={20} color="#777587" />
              </View>
              <TextInput
                value={name}
                onChangeText={setName}
                className="w-full h-12 pl-11 pr-4 bg-[#f2f3ff] text-[#131b2e] rounded-xl text-sm"
                placeholder="cth. Reza Ramadhan"
                placeholderTextColor="#777587"
              />
            </View>
          </View>

          <View className="gap-y-1.5">
            <Text className="text-xs font-semibold text-[#131b2e]">Email Aktif</Text>
            <View className="relative justify-center">
              <View className="absolute left-3.5 z-10">
                <MaterialIcons name="mail" size={20} color="#777587" />
              </View>
              <TextInput
                value={email}
                onChangeText={setEmail}
                className="w-full h-12 pl-11 pr-4 bg-[#f2f3ff] text-[#131b2e] rounded-xl text-sm"
                placeholder="contoh@email.com"
                placeholderTextColor="#777587"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
          </View>

          <View className="gap-y-1.5">
            <Text className="text-xs font-semibold text-[#131b2e]">No. Handphone / WhatsApp</Text>
            <View className="relative justify-center">
              <View className="absolute left-3.5 z-10">
                <MaterialIcons name="phone-iphone" size={20} color="#777587" />
              </View>
              <TextInput
                value={phone}
                onChangeText={setPhone}
                className="w-full h-12 pl-11 pr-4 bg-[#f2f3ff] text-[#131b2e] rounded-xl text-sm"
                placeholder="0812xxxxxxx"
                placeholderTextColor="#777587"
                keyboardType="phone-pad"
              />
            </View>
          </View>

          <View className="gap-y-1.5">
            <Text className="text-xs font-semibold text-[#131b2e]">Kata Sandi</Text>
            <View className="relative justify-center">
              <View className="absolute left-3.5 z-10">
                <MaterialIcons name="lock" size={20} color="#777587" />
              </View>
              <TextInput
                value={password}
                onChangeText={setPassword}
                className="w-full h-12 pl-11 pr-12 bg-[#f2f3ff] text-[#131b2e] rounded-xl text-sm"
                placeholder="Minimal 8 karakter"
                placeholderTextColor="#777587"
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity
                className="absolute right-2 w-9 h-9 items-center justify-center z-10"
                onPress={() => setShowPassword(!showPassword)}
              >
                <MaterialIcons
                  name={showPassword ? 'visibility' : 'visibility-off'}
                  size={20}
                  color="#777587"
                />
              </TouchableOpacity>
            </View>
          </View>

          <View className="gap-y-1.5">
            <Text className="text-xs font-semibold text-[#131b2e]">Konfirmasi Kata Sandi</Text>
            <View className="relative justify-center">
              <View className="absolute left-3.5 z-10">
                <MaterialIcons name="verified-user" size={20} color="#777587" />
              </View>
              <TextInput
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                className="w-full h-12 pl-11 pr-12 bg-[#f2f3ff] text-[#131b2e] rounded-xl text-sm"
                placeholder="Ulangi kata sandi"
                placeholderTextColor="#777587"
                secureTextEntry={!showConfirmPassword}
              />
              <TouchableOpacity
                className="absolute right-2 w-9 h-9 items-center justify-center z-10"
                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                <MaterialIcons
                  name={showConfirmPassword ? 'visibility' : 'visibility-off'}
                  size={20}
                  color="#777587"
                />
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity
            className="flex-row items-start mt-2"
            onPress={() => setAgreeTerms(!agreeTerms)}
            activeOpacity={0.8}
          >
            <View
              className={`w-4 h-4 mt-0.5 rounded border items-center justify-center mr-2.5 ${
                agreeTerms ? 'bg-[#3525cd] border-[#3525cd]' : 'border-[#777587]'
              }`}
            >
              {agreeTerms && <MaterialIcons name="check" size={12} color="#ffffff" />}
            </View>
            <Text className="text-xs text-[#464555] leading-snug flex-1">
              Saya menyetujui <Text className="font-bold text-[#3525cd]">Syarat & Ketentuan</Text> serta <Text className="font-bold text-[#3525cd]">Kebijakan Privasi</Text> ServiConnect.
            </Text>
          </TouchableOpacity>

          <View className="mt-3 gap-y-3">
            <TouchableOpacity
              className={`w-full h-12 rounded-xl items-center justify-center flex-row shadow-md active:scale-98 ${
                agreeTerms ? 'bg-[#3525cd]' : 'bg-[#a3a3a3]'
              }`}
              onPress={handleRegister}
              disabled={isLoading || !agreeTerms}
            >
              {isLoading ? (
                <Text className="text-white font-bold text-sm">Memproses...</Text>
              ) : (
                <>
                  <Text className="text-white font-bold text-sm mr-2">Daftar Sekarang</Text>
                  <MaterialIcons name="arrow-forward" size={18} color="#ffffff" />
                </>
              )}
            </TouchableOpacity>

            <View className="flex-row items-center justify-center py-2.5 px-3 bg-[#f2f3ff] rounded-lg">
              <MaterialIcons name="lock" size={16} color="#006e4b" />
              <Text className="text-[11px] text-[#464555] ml-1.5">
                Data dan privasi Anda terenkripsi aman 256-bit
              </Text>
            </View>
          </View>
        </View>

        <View className="flex-row items-center justify-center mb-5 px-2">
          <View className="flex-1 h-px bg-[#dae2fd]" />
          <Text className="text-[11px] text-[#777587] mx-3 uppercase tracking-wider font-bold">
            Atau Daftar Dengan
          </Text>
          <View className="flex-1 h-px bg-[#dae2fd]" />
        </View>

        <TouchableOpacity className="w-full h-12 px-4 rounded-xl bg-white border border-[#e2e7ff] shadow-sm flex-row items-center justify-center mb-3 active:scale-98">
          <Image
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/120px-Google_%22G%22_logo.svg.png' }}
            style={{ width: 20, height: 20 }}
            resizeMode="contain"
          />
          <Text className="text-[#131b2e] font-semibold text-sm ml-3">
            Lanjutkan dengan Google
          </Text>
        </TouchableOpacity>

        <TouchableOpacity className="w-full h-12 px-4 rounded-xl bg-[#283044] shadow-sm flex-row items-center justify-center active:scale-98 mb-6">
          <MaterialIcons name="apple" size={22} color="#ffffff" />
          <Text className="text-white font-semibold text-sm ml-3">
            Lanjutkan dengan Apple
          </Text>
        </TouchableOpacity>

        <View className="items-center flex-row justify-center">
          <Text className="text-sm text-[#464555]">
            Sudah punya akun ServiConnect?{' '}
          </Text>
          <TouchableOpacity onPress={() => router.replace('/login')}>
            <Text className="text-sm text-[#3525cd] font-bold">
              Masuk Sekarang
            </Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}