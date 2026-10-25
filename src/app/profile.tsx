import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

const REZA_AVATAR_URI =
  'https://lh3.googleusercontent.com/aida/AEtjO1V15i4PFuJSNRwb0affpUu6lHSkE4CLn3OnhGCcw3W5SxTIlTv2kSf3i156g-YjsuqxV7iiKXaxNjHXF_y5PZv2zun8WdVtXTfEBsPQFIRagXMesPWtxhvadIRaP0zzyAOi1RyYL96AVL20KlK5y9XyOhP58zXHc5JAixgGmEw-RKYDrhpszypcyFlf_4KOf4aXGg7Dm5phS1kRRYs94v9AQ_UtcLHBQtDkPkKn9trsQtlIKdXT1jqRDg';

function ProfileHeader() {
  return (
    <View className="h-16 px-4 flex-row items-center justify-between bg-[#faf8ff]/85 border-b border-[#e2e7ff] z-50">
      <View className="flex-col">
        <Text className="font-extrabold text-lg text-[#3525cd] tracking-tight leading-tight">
          ServiConnect
        </Text>
        <Text className="font-medium text-xs text-[#464555]">Profil Saya</Text>
      </View>

      <View className="flex-row items-center gap-x-1">
        <TouchableOpacity className="w-11 h-11 items-center justify-center">
          <MaterialIcons name="search" size={24} color="#131b2e" />
        </TouchableOpacity>

        <TouchableOpacity className="w-11 h-11 items-center justify-center relative">
          <MaterialIcons name="notifications" size={24} color="#131b2e" />
          <View className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-[#ba1a1a] border border-[#faf8ff]" />
        </TouchableOpacity>

        <TouchableOpacity className="w-11 h-11 items-center justify-center">
          <Image
            source={{ uri: REZA_AVATAR_URI }}
            className="w-8 h-8 rounded-full bg-[#dae2fd]"
            resizeMode="cover"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default function ProfileScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const BOTTOM_BAR_HEIGHT = 64 + insets.bottom;

  const [isOrderAccepting, setIsOrderAccepting] = useState(true);
  const [activeTab, setActiveTab] = useState<'jasa' | 'portofolio' | 'ulasan' | 'aktivitas'>('jasa');

  const handleLogout = () => {
    router.replace('/login');
  };

  return (
    <SafeAreaView className="flex-1 bg-[#faf8ff]">
      <ProfileHeader />

      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingTop: 16,
          paddingBottom: BOTTOM_BAR_HEIGHT + 24,
          gap: 16,
        }}
        showsVerticalScrollIndicator={false}
      >
  
        <View className="w-full rounded-2xl bg-white p-4 shadow-sm flex-col gap-y-4 relative overflow-hidden">
          <View className="absolute -right-10 -top-10 w-44 h-44 rounded-full bg-[#e2dfff]/30" />
          <View className="absolute -left-12 bottom-0 w-36 h-36 rounded-full bg-[#57dffe]/20" />

         <View className="flex-row items-center justify-between z-10">
            <View className="flex-row items-center gap-x-1 px-2.5 py-1 rounded-full bg-[#6ffbbe]">
              <MaterialIcons name="verified" size={14} color="#002113" />
              <Text className="text-[11px] font-bold text-[#002113]">
                Mitra Pro Terverifikasi
              </Text>
            </View>

            <View className="flex-row items-center gap-x-2">
              <TouchableOpacity className="w-9 h-9 rounded-full bg-[#f2f3ff] items-center justify-center active:scale-95">
                <MaterialIcons name="share" size={18} color="#131b2e" />
              </TouchableOpacity>
              <TouchableOpacity className="w-9 h-9 rounded-full bg-[#f2f3ff] items-center justify-center active:scale-95">
                <MaterialIcons name="settings" size={18} color="#131b2e" />
              </TouchableOpacity>
            </View>
          </View>

          <View className="flex-row items-start gap-x-3 z-10">
            <View className="relative">
              <Image
                source={{ uri: REZA_AVATAR_URI }}
                className="w-20 h-20 rounded-2xl bg-[#e2e7ff]"
                resizeMode="cover"
              />
              <View className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-white items-center justify-center shadow-sm">
                <MaterialIcons name="verified" size={16} color="#006e4b" />
              </View>
            </View>

            <View className="flex-col flex-1 min-w-0">
              <Text className="text-lg font-bold text-[#131b2e]" numberOfLines={1}>
                Reza Ramadhan
              </Text>
              <Text className="text-xs font-semibold text-[#3525cd] mt-0.5" numberOfLines={1}>
                Senior Fullstack &amp; Mobile Specialist
              </Text>

              <View className="flex-row items-center gap-x-1 mt-1">
                <MaterialIcons name="location-on" size={14} color="#00687a" />
                <Text className="text-xs text-[#464555]" numberOfLines={1}>
                  Jakarta Selatan, DKI Jakarta
                </Text>
              </View>
            </View>
          </View>
          <View className="flex-row flex-wrap gap-1.5 z-10 pt-1">
            <View className="flex-row items-center gap-x-1 px-2.5 py-1 rounded-lg bg-[#eaedff]">
              <MaterialIcons name="workspace-premium" size={14} color="#00687a" />
              <Text className="text-[11px] font-semibold text-[#464555]">Top Rated 2025</Text>
            </View>
            <View className="flex-row items-center gap-x-1 px-2.5 py-1 rounded-lg bg-[#eaedff]">
              <MaterialIcons name="timer" size={14} color="#005338" />
              <Text className="text-[11px] font-semibold text-[#464555]">Respon &lt; 15 Mnt</Text>
            </View>
            <View className="flex-row items-center gap-x-1 px-2.5 py-1 rounded-lg bg-[#eaedff]">
              <MaterialIcons name="military-tech" size={14} color="#3525cd" />
              <Text className="text-[11px] font-semibold text-[#464555]">Level 4 Specialist</Text>
            </View>
          </View>

          <View className="z-10 flex-row items-center justify-between p-3 rounded-xl bg-[#f2f3ff]">
            <View className="flex-row items-center gap-x-2.5 flex-1 pr-2">
              <View
                className={`w-3 h-3 rounded-full ${
                  isOrderAccepting ? 'bg-[#005338]' : 'bg-[#ba1a1a]'
                }`}
              />
              <View className="flex-col flex-1">
                <Text className="text-xs font-semibold text-[#131b2e]">
                  {isOrderAccepting ? 'Menerima Pesanan Jasa' : 'Sedang Istirahat (Off)'}
                </Text>
                <Text className="text-[11px] text-[#464555]">
                  Profil Anda terlihat di daftar pencarian
                </Text>
              </View>
            </View>
            <Switch
              value={isOrderAccepting}
              onValueChange={setIsOrderAccepting}
              trackColor={{ false: '#d2d9f4', true: '#4f46e5' }}
              thumbColor="#ffffff"
            />
          </View>

          <View className="flex-row gap-x-2 z-10 pt-1">
            <TouchableOpacity className="flex-1 h-11 rounded-xl bg-[#3525cd] items-center justify-center flex-row gap-x-1.5 shadow-sm active:scale-98">
              <MaterialIcons name="edit" size={18} color="#ffffff" />
              <Text className="text-xs font-semibold text-white">Edit Profil</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-1 h-11 rounded-xl bg-[#eaedff] items-center justify-center flex-row gap-x-1.5 active:scale-98">
              <MaterialIcons name="visibility" size={18} color="#131b2e" />
              <Text className="text-xs font-semibold text-[#131b2e]">Pratinjau Publik</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="relative w-full rounded-2xl p-4 bg-[#4465f8] shadow-md overflow-hidden flex-col">
          <View className="absolute -right-6 -bottom-10 w-44 h-44 rounded-full bg-white/10" />
          
          <View className="flex-row items-center justify-between z-10">
            <View className="flex-row items-center gap-x-2">
              <MaterialIcons name="account-balance-wallet" size={20} color="#ffffff" />
              <Text className="font-medium text-white/90 text-sm">Saldo Siap Ditarik</Text>
            </View>
            <TouchableOpacity className="flex-row items-center gap-x-1.5 px-3 py-1 rounded-xl bg-white/20 active:scale-95">
              <MaterialIcons name="history" size={16} color="#ffffff" />
              <Text className="text-xs font-semibold text-white">Riwayat</Text>
            </TouchableOpacity>
          </View>

          <View className="flex-col z-10 mt-2 mb-1">
            <Text className="text-3xl font-bold text-white tracking-tight">Rp 4.850.000</Text>
          </View>

          <View className="w-full h-px bg-white/15 my-3 z-10" />

          <View className="flex-row justify-between z-10 pt-1">
            <TouchableOpacity className="flex-col items-center active:scale-95">
              <View className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <MaterialIcons name="payments" size={20} color="#ffffff" />
              </View>
              <Text className="text-white text-xs font-medium mt-1.5">Tarik Dana</Text>
            </TouchableOpacity>

            <TouchableOpacity className="flex-col items-center active:scale-95">
              <View className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <MaterialIcons name="add-circle" size={20} color="#ffffff" />
              </View>
              <Text className="text-white text-xs font-medium mt-1.5">Buat Jasa</Text>
            </TouchableOpacity>

            <TouchableOpacity className="flex-col items-center active:scale-95">
              <View className="relative w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <MaterialIcons name="pending-actions" size={20} color="#ffffff" />
                <View className="absolute -top-1 -right-1 w-4 h-4 bg-[#dae2fd] rounded-full items-center justify-center shadow-sm">
                  <Text className="text-[#3525cd] font-bold text-[10px]">4</Text>
                </View>
              </View>
              <Text className="text-white text-xs font-medium mt-1.5">Pesanan</Text>
            </TouchableOpacity>

            <TouchableOpacity className="flex-col items-center active:scale-95">
              <View className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center border-2 border-white/20">
                <MaterialIcons name="work" size={20} color="#ffffff" />
              </View>
              <Text className="text-white text-xs font-medium mt-1.5">Cari Proyek</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="flex-row gap-x-2.5 w-full">
          <View className="flex-1 items-center justify-center p-3 rounded-2xl bg-white shadow-sm">
            <MaterialIcons name="task-alt" size={22} color="#3525cd" />
            <Text className="text-lg font-bold text-[#131b2e] mt-1">84</Text>
            <Text className="text-[11px] text-[#464555] text-center mt-0.5">Proyek Tuntas</Text>
          </View>

          <View className="flex-1 items-center justify-center p-3 rounded-2xl bg-white shadow-sm">
            <MaterialIcons name="star" size={22} color="#F59E0B" />
            <Text className="text-lg font-bold text-[#131b2e] mt-1">4.9</Text>
            <Text className="text-[11px] text-[#464555] text-center mt-0.5">96 Ulasan Positif</Text>
          </View>

          <View className="flex-1 items-center justify-center p-3 rounded-2xl bg-white shadow-sm">
            <MaterialIcons name="bolt" size={22} color="#006e4b" />
            <Text className="text-lg font-bold text-[#131b2e] mt-1">100%</Text>
            <Text className="text-[11px] text-[#464555] text-center mt-0.5">Tepat Waktu</Text>
          </View>
        </View>

        <View className="flex-col w-full gap-y-3">
          <View className="flex-row items-center p-1 rounded-xl bg-[#eaedff]">
            <TouchableOpacity
              onPress={() => setActiveTab('jasa')}
              className={`flex-1 py-2 px-1 rounded-lg ${
                activeTab === 'jasa' ? 'bg-white shadow-sm' : ''
              }`}
            >
              <Text
                className={`text-xs text-center ${
                  activeTab === 'jasa' ? 'text-[#3525cd] font-bold' : 'text-[#464555] font-medium'
                }`}
              >
                Jasa Saya (3)
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setActiveTab('portofolio')}
              className={`flex-1 py-2 px-1 rounded-lg ${
                activeTab === 'portofolio' ? 'bg-white shadow-sm' : ''
              }`}
            >
              <Text
                className={`text-xs text-center ${
                  activeTab === 'portofolio' ? 'text-[#3525cd] font-bold' : 'text-[#464555] font-medium'
                }`}
              >
                Portofolio
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setActiveTab('ulasan')}
              className={`flex-1 py-2 px-1 rounded-lg ${
                activeTab === 'ulasan' ? 'bg-white shadow-sm' : ''
              }`}
            >
              <Text
                className={`text-xs text-center ${
                  activeTab === 'ulasan' ? 'text-[#3525cd] font-bold' : 'text-[#464555] font-medium'
                }`}
              >
                Ulasan
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setActiveTab('aktivitas')}
              className={`flex-1 py-2 px-1 rounded-lg ${
                activeTab === 'aktivitas' ? 'bg-white shadow-sm' : ''
              }`}
            >
              <Text
                className={`text-xs text-center ${
                  activeTab === 'aktivitas' ? 'text-[#3525cd] font-bold' : 'text-[#464555] font-medium'
                }`}
              >
                Aktivitas
              </Text>
            </TouchableOpacity>
          </View>

          {activeTab === 'jasa' && (
            <View className="flex-col gap-y-3">
              <View className="w-full rounded-2xl bg-white p-4 shadow-sm flex-col gap-y-3">
                <View className="flex-row items-start justify-between gap-x-2">
                  <View className="flex-row gap-x-3 flex-1 min-w-0">
                    <Image
                      source={{
                        uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDT2PxwVFyFCRN4C1zNNTWUfwA_MH7GUPYsqEALZDrJfPN6wD5JZZ3_wPTO648LGX9BOWzek9mkMINyrvUUu_TL8vi-t1F9uNhdkvlpOn_5_RUJqOX4XL5Q5ZQ4uamBSKNBYbiDaMZ65vCPjV-0gvHDNgx7QsHWLQzKIe6heuy9jiDn_01AGtIMT10foCImRjM_4ZjFAufAm4eATNaBdAXiH3RVkghKYr5AFX5YK70-gEZSEv__OCO9',
                      }}
                      className="w-14 h-14 rounded-xl bg-[#e2e7ff]"
                      resizeMode="cover"
                    />
                    <View className="flex-col flex-1 min-w-0">
                      <View className="self-start px-2 py-0.5 rounded-full bg-[#e2dfff] mb-1">
                        <Text className="text-[10px] font-semibold text-[#0f0069]">
                          Desain &amp; Kreatif
                        </Text>
                      </View>
                      <Text className="text-sm font-semibold text-[#131b2e]" numberOfLines={1}>
                        Desain UI/UX Mobile App (Figma)
                      </Text>
                      <Text className="text-xs text-[#464555]" numberOfLines={1}>
                        Design System, Prototype, &amp; User Flow
                      </Text>
                    </View>
                  </View>
                  <TouchableOpacity>
                    <MaterialIcons name="more-vert" size={20} color="#464555" />
                  </TouchableOpacity>
                </View>

                <View className="flex-row items-center justify-between pt-1">
                  <View className="flex-col">
                    <Text className="text-[10px] text-[#464555]">Biaya Layanan</Text>
                    <Text className="text-sm font-bold text-[#3525cd]">
                      Rp 1.500.000 <Text className="text-xs font-normal text-[#464555]">/ proyek</Text>
                    </Text>
                  </View>
                  <View className="flex-row items-center gap-x-1.5 px-2.5 py-1 rounded-full bg-[#6ffbbe]">
                    <View className="w-2 h-2 rounded-full bg-[#005338]" />
                    <Text className="text-[11px] font-semibold text-[#002113]">Aktif</Text>
                  </View>
                </View>

                <View className="flex-row gap-x-2 pt-1">
                  <TouchableOpacity className="flex-1 h-9 rounded-lg bg-[#eaedff] items-center justify-center flex-row gap-x-1 active:scale-98">
                    <MaterialIcons name="tune" size={16} color="#131b2e" />
                    <Text className="text-xs font-medium text-[#131b2e]">Kelola Layanan</Text>
                  </TouchableOpacity>
                  <TouchableOpacity className="flex-1 h-9 rounded-lg bg-[#eaedff] items-center justify-center flex-row gap-x-1 active:scale-98">
                    <MaterialIcons name="insights" size={16} color="#131b2e" />
                    <Text className="text-xs font-medium text-[#131b2e]">Statistik Pesanan</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View className="w-full rounded-2xl bg-white p-4 shadow-sm flex-col gap-y-3">
                <View className="flex-row items-start justify-between gap-x-2">
                  <View className="flex-row gap-x-3 flex-1 min-w-0">
                    <Image
                      source={{
                        uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKAaQjqhrIoYYPxtWg7k4_6gG2NLCVHmiya2tVHFYzUIjFYlMLoTpZNG_aoBIX9iHlpR7yvylj0rCjVDCDxiMZ2nmP0omuIfIfz6eTX8jeEOwDgL1yWM3GutXcBJVxbvJy40vPd6uNVhyVeJ8PGhjCpkZ47h7ClYKLp0Xd8WJkK-vjdKyarJDpGu96GELC-vYWq2Jf9R6P6NQYqss5M8hzUELHv_U3zmySdOT6vSNGobXMvvRpwdiY',
                      }}
                      className="w-14 h-14 rounded-xl bg-[#e2e7ff]"
                      resizeMode="cover"
                    />
                    <View className="flex-col flex-1 min-w-0">
                      <View className="self-start px-2 py-0.5 rounded-full bg-[#acedff] mb-1">
                        <Text className="text-[10px] font-semibold text-[#001f26]">
                          Teknologi &amp; Koding
                        </Text>
                      </View>
                      <Text className="text-sm font-semibold text-[#131b2e]" numberOfLines={1}>
                        Pembuatan Aplikasi React Native Expo
                      </Text>
                      <Text className="text-xs text-[#464555]" numberOfLines={1}>
                        Full Android &amp; iOS Hybrid Architecture
                      </Text>
                    </View>
                  </View>
                  <TouchableOpacity>
                    <MaterialIcons name="more-vert" size={20} color="#464555" />
                  </TouchableOpacity>
                </View>

                <View className="flex-row items-center justify-between pt-1">
                  <View className="flex-col">
                    <Text className="text-[10px] text-[#464555]">Biaya Layanan</Text>
                    <Text className="text-sm font-bold text-[#3525cd]">
                      Rp 2.500.000 <Text className="text-xs font-normal text-[#464555]">/ proyek</Text>
                    </Text>
                  </View>
                  <View className="flex-row items-center gap-x-1.5 px-2.5 py-1 rounded-full bg-[#6ffbbe]">
                    <View className="w-2 h-2 rounded-full bg-[#005338]" />
                    <Text className="text-[11px] font-semibold text-[#002113]">Aktif</Text>
                  </View>
                </View>

                <View className="flex-row gap-x-2 pt-1">
                  <TouchableOpacity className="flex-1 h-9 rounded-lg bg-[#eaedff] items-center justify-center flex-row gap-x-1 active:scale-98">
                    <MaterialIcons name="tune" size={16} color="#131b2e" />
                    <Text className="text-xs font-medium text-[#131b2e]">Kelola Layanan</Text>
                  </TouchableOpacity>
                  <TouchableOpacity className="flex-1 h-9 rounded-lg bg-[#eaedff] items-center justify-center flex-row gap-x-1 active:scale-98">
                    <MaterialIcons name="insights" size={16} color="#131b2e" />
                    <Text className="text-xs font-medium text-[#131b2e]">Statistik Pesanan</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <TouchableOpacity className="w-full h-12 rounded-2xl bg-[#f2f3ff] flex-row items-center justify-center gap-x-2 active:scale-98">
                <MaterialIcons name="add-circle" size={22} color="#3525cd" />
                <Text className="text-sm font-bold text-[#3525cd]">
                  Tambah Layanan Jasa Baru
                </Text>
              </TouchableOpacity>
            </View>
          )}

          {activeTab !== 'jasa' && (
            <View className="p-6 bg-white rounded-2xl items-center">
              <Text className="text-xs text-[#464555]">Konten tab belum tersedia.</Text>
            </View>
          )}
        </View>

        <View className="flex-col gap-y-2 w-full">
          <Text className="text-sm font-bold text-[#131b2e] px-1">Pengaturan &amp; Akun</Text>

          <View className="w-full rounded-2xl bg-white p-2 shadow-sm flex-col">
            <Text className="px-3 py-1.5 text-[10px] font-bold text-[#464555] uppercase tracking-wider">
              Keamanan &amp; Verifikasi
            </Text>

            <TouchableOpacity className="flex-row items-center justify-between p-3 rounded-xl">
              <View className="flex-row items-center gap-x-3">
                <View className="w-9 h-9 rounded-xl bg-[#6ffbbe] items-center justify-center">
                  <MaterialIcons name="badge" size={20} color="#002113" />
                </View>
                <View className="flex-col">
                  <Text className="text-xs font-medium text-[#131b2e]">
                    Verifikasi Identitas (KTP)
                  </Text>
                  <View className="flex-row items-center gap-x-1">
                    <MaterialIcons name="check-circle" size={14} color="#005338" />
                    <Text className="text-[11px] font-medium text-[#005338]">
                      Terverifikasi &amp; Aman
                    </Text>
                  </View>
                </View>
              </View>
              <MaterialIcons name="chevron-right" size={20} color="#464555" />
            </TouchableOpacity>

            <TouchableOpacity className="flex-row items-center justify-between p-3 rounded-xl">
              <View className="flex-row items-center gap-x-3">
                <View className="w-9 h-9 rounded-xl bg-[#e2dfff] items-center justify-center">
                  <MaterialIcons name="account-balance" size={20} color="#0f0069" />
                </View>
                <View className="flex-col">
                  <Text className="text-xs font-medium text-[#131b2e]">
                    Rekening Bank &amp; E-Wallet
                  </Text>
                  <Text className="text-[11px] text-[#464555]">BCA (**** 8821) &amp; GoPay</Text>
                </View>
              </View>
              <MaterialIcons name="chevron-right" size={20} color="#464555" />
            </TouchableOpacity>

            <TouchableOpacity className="flex-row items-center justify-between p-3 rounded-xl">
              <View className="flex-row items-center gap-x-3">
                <View className="w-9 h-9 rounded-xl bg-[#e2e7ff] items-center justify-center">
                  <MaterialIcons name="lock-reset" size={20} color="#131b2e" />
                </View>
                <View className="flex-col">
                  <Text className="text-xs font-medium text-[#131b2e]">
                    Kata Sandi &amp; 2FA
                  </Text>
                  <Text className="text-[11px] text-[#464555]">
                    Autentikasi dua faktor aktif
                  </Text>
                </View>
              </View>
              <MaterialIcons name="chevron-right" size={20} color="#464555" />
            </TouchableOpacity>
          </View>

          <View className="w-full rounded-2xl bg-white p-2 shadow-sm flex-col mt-1">
            <Text className="px-3 py-1.5 text-[10px] font-bold text-[#464555] uppercase tracking-wider">
              Preferensi Layanan
            </Text>

            <TouchableOpacity className="flex-row items-center justify-between p-3 rounded-xl">
              <View className="flex-row items-center gap-x-3">
                <View className="w-9 h-9 rounded-xl bg-[#eaedff] items-center justify-center">
                  <MaterialIcons name="notifications-active" size={20} color="#131b2e" />
                </View>
                <View className="flex-col">
                  <Text className="text-xs font-medium text-[#131b2e]">
                    Notifikasi Pesanan &amp; Chat
                  </Text>
                  <Text className="text-[11px] text-[#464555]">Push, SMS &amp; Email instan</Text>
                </View>
              </View>
              <MaterialIcons name="chevron-right" size={20} color="#464555" />
            </TouchableOpacity>

            <TouchableOpacity className="flex-row items-center justify-between p-3 rounded-xl">
              <View className="flex-row items-center gap-x-3">
                <View className="w-9 h-9 rounded-xl bg-[#eaedff] items-center justify-center">
                  <MaterialIcons name="language" size={20} color="#131b2e" />
                </View>
                <View className="flex-col">
                  <Text className="text-xs font-medium text-[#131b2e]">Bahasa Aplikasi</Text>
                  <Text className="text-[11px] text-[#464555]">Bahasa Indonesia (ID)</Text>
                </View>
              </View>
              <MaterialIcons name="chevron-right" size={20} color="#464555" />
            </TouchableOpacity>
          </View>

          <View className="w-full rounded-2xl bg-white p-2 shadow-sm flex-col mt-1">
            <Text className="px-3 py-1.5 text-[10px] font-bold text-[#464555] uppercase tracking-wider">
              Dukungan &amp; Informasi
            </Text>

            <TouchableOpacity className="flex-row items-center justify-between p-3 rounded-xl">
              <View className="flex-row items-center gap-x-3">
                <View className="w-9 h-9 rounded-xl bg-[#acedff] items-center justify-center">
                  <MaterialIcons name="help-center" size={20} color="#001f26" />
                </View>
                <View className="flex-col">
                  <Text className="text-xs font-medium text-[#131b2e]">Pusat Bantuan Mitra</Text>
                  <Text className="text-[11px] text-[#464555]">Panduan operasional dan FAQ</Text>
                </View>
              </View>
              <MaterialIcons name="chevron-right" size={20} color="#464555" />
            </TouchableOpacity>

            <TouchableOpacity className="flex-row items-center justify-between p-3 rounded-xl">
              <View className="flex-row items-center gap-x-3">
                <View className="w-9 h-9 rounded-xl bg-[#eaedff] items-center justify-center">
                  <MaterialIcons name="support-agent" size={20} color="#131b2e" />
                </View>
                <View className="flex-col">
                  <Text className="text-xs font-medium text-[#131b2e]">
                    Hubungi Customer Support
                  </Text>
                  <Text className="text-[11px] text-[#464555]">Live chat 24/7 respon sigap</Text>
                </View>
              </View>
              <MaterialIcons name="chevron-right" size={20} color="#464555" />
            </TouchableOpacity>

            <TouchableOpacity className="flex-row items-center justify-between p-3 rounded-xl">
              <View className="flex-row items-center gap-x-3">
                <View className="w-9 h-9 rounded-xl bg-[#eaedff] items-center justify-center">
                  <MaterialIcons name="policy" size={20} color="#131b2e" />
                </View>
                <View className="flex-col">
                  <Text className="text-xs font-medium text-[#131b2e]">
                    Ketentuan Komunitas &amp; Privasi
                  </Text>
                  <Text className="text-[11px] text-[#464555]">Standar etika &amp; keamanan data</Text>
                </View>
              </View>
              <MaterialIcons name="chevron-right" size={20} color="#464555" />
            </TouchableOpacity>
          </View>

          {/* Group 4: Logout Button */}
          <View className="pt-2">
            <TouchableOpacity
              onPress={handleLogout}
              className="w-full h-12 rounded-2xl bg-[#ffdad6] flex-row items-center justify-center gap-x-2 active:scale-98"
            >
              <MaterialIcons name="logout" size={20} color="#93000a" />
              <Text className="text-sm font-bold text-[#93000a]">Keluar dari Akun</Text>
            </TouchableOpacity>

            <Text className="text-center text-[11px] text-[#464555] mt-3 mb-1">
              ServiConnect v2.4.1 (Build 412) • Mitra Pro Indonesia
            </Text>
          </View>
        </View>
      </ScrollView>

      <View
        style={{ height: BOTTOM_BAR_HEIGHT, paddingBottom: insets.bottom }}
        className="absolute bottom-0 w-full flex-row bg-[#faf8ff]/90 border-t border-[#dae2fd] justify-around items-center px-2"
      >
        <TouchableOpacity
          className="flex-1 items-center justify-center h-full"
          onPress={() => router.replace('/dashboard')}
        >
          <MaterialIcons name="home" size={24} color="#777587" />
          <Text className="text-[10px] text-[#777587] mt-0.5">Beranda</Text>
        </TouchableOpacity>

        <TouchableOpacity className="flex-1 items-center justify-center h-full">
          <MaterialIcons name="explore" size={24} color="#777587" />
          <Text className="text-[10px] text-[#777587] mt-0.5">Eksplor</Text>
        </TouchableOpacity>

        <View className="flex-1 items-center justify-center">
          <TouchableOpacity className="w-12 h-12 rounded-full bg-[#4f46e5] items-center justify-center -mt-6 shadow-lg">
            <MaterialIcons name="add" size={28} color="#ffffff" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity className="flex-1 items-center justify-center h-full">
          <MaterialIcons name="chat-bubble" size={24} color="#777587" />
          <Text className="text-[10px] text-[#777587] mt-0.5">Pesan</Text>
        </TouchableOpacity>

        <TouchableOpacity className="flex-1 items-center justify-center h-full">
          <MaterialIcons name="account-circle" size={24} color="#3525cd" />
          <Text className="text-[10px] text-[#3525cd] font-bold mt-0.5">Profil</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}