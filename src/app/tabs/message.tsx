  import React, { useState } from 'react';
  import { View, Text, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
  import { SafeAreaView } from 'react-native-safe-area-context';
  import { MaterialIcons } from '@expo/vector-icons';
  import { useRouter } from 'expo-router';


  const CHAT_DATA = [
    {
      id: '1',
      name: 'Budi Santoso',
      isVerified: true,
      time: '10:42',
      tag: 'Pesanan #SC-8921 • Cuci AC Inverter',
      tagIcon: 'hvac' as any,
      message: '"Halo Mas Reza, alamat sudah saya kirimkan sesuai jadwal ya. Apakah alat sudah siap?"',
      isUrgent: true,
      unreadCount: 2,
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCPtld0hTVhdkLc5uJLWMlfipx7wxYjf4cTXeSPj6YjtA2xU03YByEtrNwjmiGJihn9Oi8-8vOrA47obAZ8bfGtzFI-3XSnmkDaUWnxZHiVhZQi70Mnwmxg_3X34wP_H5pxnKU7Mzx1-wamWZ8TB4ccing7t76RJKZDR8nR0LBJG6KQ42j04YkbuhO-SkhREceXSitveAjYjWmGg00HtbpC3CaKPuRwjEgDk7zUg8',
    },
    {
      id: '2',
      name: 'Siti Rahmawati (UMKM)',
      isVerified: true,
      time: '08:15',
      tag: 'Pesanan #SC-8890 • Desain Menu',
      tagIcon: 'palette' as any,
      message: '"Mas Reza, untuk revisi warna packaging yang versi pastel sudah saya review, mantap!"',
      isUrgent: false,
      statusText: 'Tahap Finalisasi',
      price: 'Rp 1.200.000',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDic-IvpIORXNunFwgB_wgZWqICfq0tlvHJW_kgJuE6p_PkiVHhJYnJrohrtnc5D3ugHCYUTEahkQ3JGbTZLCuMCqvDa4piDQVZKdKWd8GgR5jN5gtVDU3DZqoSZjJXVItwbFhxQvCGj-ct9K6T7lcypUkigMoG_oDDgJUKEVeGgDuy8a-LQADfr0T00KSbRle8XUwMDwxFNITFwTW01UIS7THOtEZH1zhiNWGIW8c',
    },
  ];

  export default function MessageScreen() {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState('Semua Pesan');
    const [activeStatus, setActiveStatus] = useState('Semua Status');

    return (
      <SafeAreaView className="flex-1 bg-[#faf8ff]" edges={['top', 'left', 'right']}>
        <View className="h-16 px-4 flex-row items-center justify-between bg-[#faf8ff] z-50 border-b border-[#e2e7ff]">
          <View className="flex-row items-center gap-x-2">
            <View className="w-8 h-8 rounded bg-[#3525cd] items-center justify-center">
              <MaterialIcons name="chat-bubble" size={18} color="#ffffff" />
            </View>
            <Text className="font-extrabold text-xl text-[#131b2e]">Pesan</Text>
          </View>
          <View className="flex-row items-center gap-x-3">
            <TouchableOpacity className="relative">
              <MaterialIcons name="notifications-none" size={26} color="#464555" />
              <View className="absolute top-0 right-0 w-2.5 h-2.5 bg-[#ba1a1a] rounded-full border-2 border-[#faf8ff]" />
            </TouchableOpacity>
            <Image
              source={{ uri: 'https://lh3.googleusercontent.com/aida/AEtjO1Wp5cvC1vcuPXkbJrhgmfTtW6bXWUlxLggvJXKjHeqOV3XErRoNlGzFJD_7wx_bheGBBmNnLTwDVN_ynrucfEX3veaf5JfC5V68f3VqqZ8Wv_7O0dQ7laVNRWr9ySoxGCk-NHa6q1nm5wJJzjqlKSVmVV_MR3bwy2mHIQ-yPIbH0mfgSIVaiJK5XF9lRnbnSbsB7Nbsw37uxq4tWbJEKyY9St6f5lB07Bazb5FfyliXwQuobT1LQAXIPA' }}
              className="w-9 h-9 rounded-full"
            />
          </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
          <View className="px-4 py-3">
            <View className="bg-white rounded-xl p-4 flex-row items-center justify-between shadow-sm border border-[#e2e7ff]">
              <View className="flex-row items-center gap-x-3 flex-1">
                <View className="relative">
                  <Image
                    source={{ uri: 'https://lh3.googleusercontent.com/aida/AEtjO1Wp5cvC1vcuPXkbJrhgmfTtW6bXWUlxLggvJXKjHeqOV3XErRoNlGzFJD_7wx_bheGBBmNnLTwDVN_ynrucfEX3veaf5JfC5V68f3VqqZ8Wv_7O0dQ7laVNRWr9ySoxGCk-NHa6q1nm5wJJzjqlKSVmVV_MR3bwy2mHIQ-yPIbH0mfgSIVaiJK5XF9lRnbnSbsB7Nbsw37uxq4tWbJEKyY9St6f5lB07Bazb5FfyliXwQuobT1LQAXIPA' }}
                    className="w-12 h-12 rounded-full"
                  />
                  <View className="absolute bottom-0 right-0 w-3 h-3 bg-[#005338] rounded-full border border-white" />
                </View>
                <View className="flex-1">
                  <View className="flex-row items-center gap-x-1.5">
                    <Text className="font-bold text-sm text-[#131b2e]">Reza Ramadhan</Text>
                    <View className="bg-[#6ffbbe] px-1.5 py-0.5 rounded-full flex-row items-center">
                      <MaterialIcons name="verified" size={10} color="#002113" />
                      <Text className="text-[9px] font-bold text-[#002113] ml-0.5">Pro</Text>
                    </View>
                  </View>
                  <Text className="text-xs text-[#464555]" numberOfLines={1}>Teknisi Elektronik & Digital Spe...</Text>
                </View>
              </View>
              <View className="items-end">
                <Text className="text-[9px] text-[#006e4b] font-bold uppercase">Performa Chat</Text>
                <View className="flex-row items-center">
                  <MaterialIcons name="bolt" size={16} color="#3525cd" />
                  <Text className="font-bold text-[#3525cd] text-sm">100%</Text>
                </View>
                <Text className="text-[10px] text-[#464555]">Respon {'<'} 5 mnt</Text>
              </View>
            </View>
          </View>

          <View className="px-4 pb-3 flex-row items-center gap-x-2">
            <View className="flex-1 relative justify-center">
              <MaterialIcons name="search" size={20} color="#777587" style={{ position: 'absolute', left: 12, zIndex: 1 }} />
              <TextInput
                placeholder="Cari percakapan atau nama klien..."
                placeholderTextColor="#777587"
                className="w-full h-11 bg-white rounded-lg pl-10 pr-4 text-sm text-[#131b2e] shadow-sm border border-[#e2e7ff]"
              />
            </View>
            <TouchableOpacity className="w-11 h-11 bg-white rounded-lg items-center justify-center shadow-sm border border-[#e2e7ff]">
              <MaterialIcons name="tune" size={22} color="#464555" />
            </TouchableOpacity>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="pl-4 pb-3" contentContainerStyle={{ paddingRight: 24, gap: 8 }}>
            {['Semua Pesan', 'Pesanan Diterima', 'Penawaran Masuk'].map((tab) => (
              <TouchableOpacity
                key={tab}
                onPress={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full flex-row items-center gap-x-1.5 border ${
                  activeTab === tab ? 'bg-[#3525cd] border-[#3525cd]' : 'bg-white border-[#e2e7ff]'
                }`}
              >
                <Text className={`text-xs font-bold ${activeTab === tab ? 'text-white' : 'text-[#464555]'}`}>{tab}</Text>
                {tab === 'Semua Pesan' && (
                  <View className="bg-[#e2e7ff] px-1.5 py-0.5 rounded-full"><Text className="text-[10px] text-[#131b2e] font-bold">8</Text></View>
                )}
                {tab === 'Pesanan Diterima' && (
                  <View className="bg-white/20 px-1.5 py-0.5 rounded-full"><Text className="text-[10px] text-white font-bold">4 Baru</Text></View>
                )}
              </TouchableOpacity>
            ))}
          </ScrollView>

          <View className="px-4 pb-4">
            <View className="bg-[#e2dfff] rounded-xl p-4 shadow-sm border border-[#c3c0ff]">
              <View className="flex-row justify-between items-center mb-3">
                <View className="flex-row items-center gap-x-2">
                  <View className="w-2 h-2 rounded-full bg-[#ba1a1a]" />
                  <Text className="text-xs font-bold text-[#3525cd] uppercase tracking-wider">Pesanan Menunggu (1)</Text>
                </View>
                <View className="bg-[#ffdad6] px-2 py-0.5 rounded-full">
                  <Text className="text-[10px] font-bold text-[#93000a]">Sisa 24 Menit</Text>
                </View>
              </View>

              <View className="bg-white/90 rounded-lg p-3 mb-3">
                <View className="flex-row justify-between items-start mb-1">
                  <View>
                    <Text className="font-bold text-sm text-[#131b2e]">Budi Santoso</Text>
                    <Text className="text-xs font-bold text-[#3525cd]">#SC-8921 • Reparasi AC</Text>
                  </View>
                  <Text className="font-bold text-sm text-[#131b2e]">Rp 350.000</Text>
                </View>
                <View className="flex-row items-center gap-x-3 mt-1">
                  <View className="flex-row items-center gap-x-1">
                    <MaterialIcons name="calendar-today" size={12} color="#005338" />
                    <Text className="text-[10px] text-[#464555]">Hari ini, 14:00 WIB</Text>
                  </View>
                  <View className="flex-row items-center gap-x-1">
                    <MaterialIcons name="location-on" size={12} color="#00687a" />
                    <Text className="text-[10px] text-[#464555]">Tebet (3.2 km)</Text>
                  </View>
                </View>
              </View>

              <View className="flex-row gap-x-2">
                <TouchableOpacity 
                  className="flex-1 bg-white py-2.5 rounded-lg items-center justify-center border border-[#e2e7ff]"
                  onPress={() => router.push('/tabs/order-detail')}
                >
                  <Text className="text-xs font-bold text-[#131b2e]">Lihat Rincian</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-1 bg-[#3525cd] py-2.5 rounded-lg flex-row items-center justify-center gap-x-1">
                  <MaterialIcons name="done-all" size={16} color="#ffffff" />
                  <Text className="text-xs font-bold text-white">Terima & Balas</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="pl-4 pb-2" contentContainerStyle={{ paddingRight: 24, gap: 8 }}>
            {['Semua Status', 'Menunggu Respon', 'Dalam Pengerjaan', 'Selesai'].map((status) => (
              <TouchableOpacity
                key={status}
                onPress={() => setActiveStatus(status)}
                className={`px-3 py-1.5 rounded-full border ${
                  activeStatus === status ? 'bg-[#3525cd] border-[#3525cd]' : 'bg-white border-[#e2e7ff]'
                }`}
              >
                <Text className={`text-[11px] font-bold ${activeStatus === status ? 'text-white' : 'text-[#464555]'}`}>{status}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <View className="px-4 gap-y-3 pt-2">
            {CHAT_DATA.map((chat) => (
              <TouchableOpacity key={chat.id} className="bg-white rounded-xl p-4 shadow-sm border border-[#e2e7ff] flex-row gap-x-3">
                <View className="relative">
                  <Image source={{ uri: chat.avatar }} className="w-12 h-12 rounded-full" />
                  {chat.id === '1' && <View className="absolute bottom-0 right-0 w-3 h-3 bg-[#005338] rounded-full border border-white" />}
                </View>
                
                <View className="flex-1">
                  <View className="flex-row justify-between items-center mb-1">
                    <View className="flex-row items-center gap-x-1">
                      <Text className="font-bold text-sm text-[#131b2e]">{chat.name}</Text>
                      {chat.isVerified && <MaterialIcons name="verified" size={14} color="#00687a" />}
                    </View>
                    <Text className={`text-[10px] font-bold ${chat.isUrgent ? 'text-[#3525cd]' : 'text-[#464555]'}`}>{chat.time}</Text>
                  </View>
                  
                  <View className="bg-[#e2e7ff] self-start px-1.5 py-0.5 rounded flex-row items-center gap-x-1 mb-1.5">
                    <MaterialIcons name={chat.tagIcon} size={10} color="#3525cd" />
                    <Text className="text-[9px] text-[#3525cd] font-bold">{chat.tag}</Text>
                  </View>
                  
                  <Text className="text-xs text-[#464555] mb-2" numberOfLines={2}>{chat.message}</Text>
                  
                  {chat.isUrgent ? (
                    <View className="flex-row justify-between items-center">
                      <View className="bg-[#ffdad6] px-2 py-0.5 rounded-full flex-row items-center gap-x-1">
                        <MaterialIcons name="alarm" size={12} color="#93000a" />
                        <Text className="text-[9px] font-bold text-[#93000a]">Perlu Tanggapan (SLA 30 mnt)</Text>
                      </View>
                      <View className="bg-[#3525cd] w-4 h-4 rounded-full items-center justify-center">
                        <Text className="text-[9px] font-bold text-white">{chat.unreadCount}</Text>
                      </View>
                    </View>
                  ) : (
                    <View className="flex-row justify-between items-center">
                      <View className="bg-[#acedff] px-2 py-0.5 rounded-full flex-row items-center gap-x-1">
                        <MaterialIcons name="sync" size={12} color="#004e5c" />
                        <Text className="text-[9px] font-bold text-[#004e5c]">{chat.statusText}</Text>
                      </View>
                      <View className="flex-row items-center gap-x-2">
                        <Text className="text-xs font-bold text-[#464555]">{chat.price}</Text>
                        <MaterialIcons name="done-all" size={16} color="#3525cd" />
                      </View>
                    </View>
                  )}
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        <TouchableOpacity className="absolute bottom-6 right-4 z-40 bg-[#3525cd] flex-row items-center gap-x-2 px-5 py-3 rounded-full shadow-lg">
          <MaterialIcons name="add-comment" size={20} color="#ffffff" />
          <Text className="font-bold text-sm text-white">Kirim Penawaran</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }