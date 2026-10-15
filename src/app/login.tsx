import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LoginScreen() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.replace('/dashboard');
    }, 1200);
  };

  return (
    <SafeAreaView className="flex-1 bg-surface">
      <View className="h-16 px-4 flex-row items-center justify-between bg-surface">
        <View className="flex-row items-center space-x-2">
          <TouchableOpacity className="w-11 h-11 items-center justify-center rounded-full">
            <MaterialIcons name="arrow-back" size={24} color="#131b2e" />
          </TouchableOpacity>
          <Text className="font-bold text-lg text-on-surface ml-1">ServiConnect</Text>
        </View>
        <View className="flex-row items-center space-x-2">
          <Text className="text-on-surface-variant font-semibold uppercase text-xs tracking-wide">Login</Text>
          <View className="w-8 h-8 rounded-full bg-primary items-center justify-center">
            <MaterialIcons name="person" size={18} color="#ffffff" />
          </View>
        </View>
      </View>

      <ScrollView contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 16, paddingBottom: 40 }}>

        <View className="items-center mb-6">
          <View className="mb-4 relative">
            <View className="w-20 h-20 rounded-2xl bg-surface-container-lowest shadow-md items-center justify-center p-2">
              <Image
                source={require('../../assets/images/logo.png')}
                style={{ width: 56, height: 56, borderRadius: 8 }}
                resizeMode="contain"
              />
            </View>
            <View className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-tertiary-container items-center justify-center shadow-sm">
              <MaterialIcons name="verified" size={14} color="#ffffff" />
            </View>
          </View>

          <View className="flex-row items-center space-x-2 px-3 py-1 rounded-full bg-surface-container-high mb-2">
            <View className="w-2 h-2 rounded-full bg-tertiary" />
            <Text className="text-on-surface-variant text-xs font-medium ml-1.5">Komunitas Jasa Terpercaya</Text>
          </View>

          <Text className="font-bold text-2xl text-on-surface text-center mb-1">
            Selamat Datang Kembali! 👋
          </Text>
          <Text className="text-sm text-on-surface-variant text-center leading-5" style={{ maxWidth: 280 }}>
            Masuk ke akun ServiConnect Anda untuk terhubung dengan ribuan penyedia jasa dan klien.
          </Text>
        </View>

        <View className="bg-surface-container-lowest rounded-xl shadow-sm p-6 mb-6">

          <View className="mb-4">
            <Text className="text-xs font-semibold text-on-surface-variant mb-1">Email / No. Handphone</Text>
            <View className="relative justify-center">
              <View className="absolute left-4 z-10">
                <MaterialIcons name="alternate-email" size={20} color="#777587" />
              </View>
              <TextInput
                className="w-full h-12 pl-11 pr-4 bg-surface-container-low text-on-surface rounded-xl"
                placeholder="contoh@email.com atau 0812xxxx"
                placeholderTextColor="#777587"
              />
            </View>
          </View>

          <View className="mb-2">
            <Text className="text-xs font-semibold text-on-surface-variant mb-1">Kata Sandi</Text>
            <View className="relative justify-center">
              <View className="absolute left-4 z-10">
                <MaterialIcons name="lock" size={20} color="#777587" />
              </View>
              <TextInput
                className="w-full h-12 pl-11 pr-12 bg-surface-container-low text-on-surface rounded-xl"
                placeholder="Masukkan kata sandi"
                placeholderTextColor="#777587"
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity
                className="absolute right-3 w-9 h-9 items-center justify-center z-10"
                onPress={() => setShowPassword(!showPassword)}
              >
                <MaterialIcons name={showPassword ? "visibility" : "visibility-off"} size={20} color="#777587" />
              </TouchableOpacity>
            </View>
          </View>

          <View className="flex-row items-center justify-between mb-6 mt-2">
            <TouchableOpacity
              className="flex-row items-center"
              onPress={() => setRememberMe(!rememberMe)}
            >
              <View className={`w-4 h-4 rounded border items-center justify-center mr-2 ${rememberMe ? 'bg-primary-container border-primary-container' : 'border-outline'}`}>
                {rememberMe && <MaterialIcons name="check" size={12} color="#ffffff" />}
              </View>
              <Text className="text-xs text-on-surface-variant">
                Ingat Saya
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text className="text-xs text-primary-container font-semibold">
                Lupa Kata Sandi?
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            className="w-full h-12 rounded-xl bg-primary items-center justify-center flex-row shadow-md mb-4"
            onPress={handleLogin}
            disabled={isLoading}
          >
            {isLoading ? (
              <Text className="text-white font-bold text-base">
                Memverifikasi...
              </Text>
            ) : (
              <>
                <Text className="text-white font-bold text-base mr-2">
                  Masuk Sekarang
                </Text>
                <MaterialIcons name="arrow-forward" size={18} color="#ffffff" />
              </>
            )}
          </TouchableOpacity>

          <View className="flex-row items-center justify-center py-2 px-3 bg-surface-container-low rounded-lg">
            <MaterialIcons name="security" size={16} color="#005338" />
            <Text className="text-[10px] text-on-surface-variant ml-2">
              Koneksi terenkripsi standar industri 256-bit
            </Text>
          </View>
        </View>

        <View className="flex-row items-center justify-center mb-5">
          <View className="flex-1 h-px bg-surface-container-highest" />
          <Text className="text-xs text-outline mx-4 uppercase tracking-wider">
            atau masuk dengan
          </Text>
          <View className="flex-1 h-px bg-surface-container-highest" />
        </View>

        <TouchableOpacity className="w-full h-12 px-4 rounded-xl bg-surface-container-lowest shadow-sm flex-row items-center justify-center mb-3">
          <MaterialIcons name="g-translate" size={20} color="#EA4335" />
          <Text className="text-on-surface font-semibold ml-3">
            Lanjutkan dengan Google
          </Text>
        </TouchableOpacity>

        <TouchableOpacity className="w-full h-12 px-4 rounded-xl bg-inverse-surface shadow-sm flex-row items-center justify-center">
          <MaterialIcons name="apple" size={20} color="#ffffff" />
          <Text className="text-inverse-on-surface font-semibold ml-3">
            Lanjutkan dengan Apple
          </Text>
        </TouchableOpacity>
     
        <View className="mt-8 items-center">
          <View className="flex-row mb-2 flex-wrap justify-center">
            <Text className="text-sm text-on-surface">
              Belum punya akun ServiConnect? 
            </Text>
            <TouchableOpacity>
              <Text className="text-sm text-primary-container font-semibold">
                Daftar Sekarang
              </Text>
            </TouchableOpacity>
          </View>
          <Text className="text-xs text-outline text-center" style={{ maxWidth: 280 }}>
            Dengan masuk, Anda menyetujui 
            <Text className="underline">
              Ketentuan Layanan
            </Text> &amp; 
              <Text className="underline">
                Kebijakan Privasi
              </Text> 
              ServiConnect.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}