import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function ProfileScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-surface">
      <View className="h-16 px-4 flex-row items-center justify-between bg-surface/80 shadow-sm">
        <TouchableOpacity
          className="w-11 h-11 items-center justify-center rounded-full"
          onPress={() => router.back()}
        >
          <MaterialIcons name="arrow-back" size={24} color="#131b2e" />
        </TouchableOpacity>
        <Text className="font-semibold text-lg text-on-surface">Profil Saya</Text>
        <TouchableOpacity className="w-11 h-11 items-center justify-center rounded-full">
          <MaterialIcons name="settings" size={24} color="#131b2e" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 24, paddingBottom: 40 }}>
        <View className="items-center mb-8">
          <View className="w-24 h-24 rounded-full bg-primary-container items-center justify-center mb-3">
            <MaterialIcons name="person" size={48} color="#ffffff" />
          </View>
          <Text className="font-bold text-xl text-on-surface">Nama Pengguna</Text>
          <Text className="text-sm text-on-surface-variant mt-1">pengguna@email.com</Text>
        </View>

        <View className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden mb-4">
          {[
            { icon: 'person-outline' as const, label: 'Edit Profil' },
            { icon: 'history' as const, label: 'Riwayat Transaksi' },
            { icon: 'favorite-border' as const, label: 'Favorit Saya' },
            { icon: 'notifications-none' as const, label: 'Notifikasi' },
          ].map((item, index, arr) => (
            <TouchableOpacity
              key={item.label}
              className={`flex-row items-center px-4 py-4 ${index < arr.length - 1 ? 'border-b border-surface-container-high' : ''}`}
            >
              <MaterialIcons name={item.icon} size={22} color="#777587" />
              <Text className="flex-1 ml-3 text-on-surface">{item.label}</Text>
              <MaterialIcons name="chevron-right" size={22} color="#777587" />
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity
          className="w-full h-12 rounded-xl bg-error-container items-center justify-center flex-row"
          onPress={() => router.replace('/login')}
        >
          <MaterialIcons name="logout" size={20} color="#ba1a1a" />
          <Text className="text-error font-semibold ml-2">Keluar</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
