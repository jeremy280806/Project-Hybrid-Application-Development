import { MaterialIcons } from '@expo/vector-icons';
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

const AVATAR_URI = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFPHg2dPEoST1H7o5t_um0rM7dPKycfPprxxw-uiNxGi2DGiMsFvrlbbfscpwbValeIm0Tjd0a8_NEi-Id5i0WlJ5sq3izUel8OVeo-Q5E1hgSwqQl_AhyfzJkpPIrM3z0iNQsEctynkrG4164Z5prsspWlaQa9p4NI5oWQcaURkV9lTF59gT-ZtcYgIQD_W-PskDBJkZzMA_0WMbslCAdhLGpbC-Kp0LPKEG5XOrnqi8VcIDrMsn_';
const SPECIALIST_1 = 'https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=256&auto=format&fit=crop';
const SPECIALIST_2 = 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=256&auto=format&fit=crop';

const FILTERS = [
  { id: 'near', label: 'Terdekat', icon: 'near-me', color: '#3525cd', isActive: true },
  { id: 'rating', label: 'Rating 4.8+', icon: 'star', color: '#f59e0b', isActive: false },
  { id: 'promo', label: 'Promo Diskon', icon: 'local-offer', color: '#006e4b', isActive: false },
  { id: 'remote', label: 'Remote', icon: 'laptop-mac', color: '#131b2e', isActive: false },
  { id: 'instant', label: 'Instant Booking', icon: 'bolt', color: '#00687a', isActive: false },
];

const CATEGORIES = [
  { id: 1, name: 'Desain & Kreatif', count: '450+', icon: 'palette', bg: '#e2dfff', text: '#3525cd' },
  { id: 2, name: 'Tukang & Servis', count: '320+', icon: 'home-repair-service', bg: '#dae2fd', text: '#00687a' },
  { id: 3, name: 'IT & Gadget', count: '280+', icon: 'devices', bg: '#acedff', text: '#006172' },
  { id: 4, name: 'Kursus Privat', count: '190+', icon: 'school', bg: '#6ffbbe', text: '#005338' },
  { id: 5, name: 'Foto & Video', count: '150+', icon: 'photo-camera', bg: '#e2e7ff', text: '#4f46e5' },
  { id: 6, name: 'Bersih & Laundry', count: '210+', icon: 'cleaning-services', bg: '#eaedff', text: '#464555' },
];

export default function ExploreScreen() {
  const [activeFilter, setActiveFilter] = useState('near');

  return (
    <SafeAreaView className="flex-1 bg-[#faf8ff]" edges={['top', 'left', 'right']}>
      <View className="h-16 px-4 flex-row items-center justify-between bg-[#faf8ff] z-50">
        <View className="flex-col justify-center">
          <Text className="font-extrabold text-lg text-[#3525cd] tracking-tight leading-tight">
            ServiConnect
          </Text>
          <Text className="font-semibold text-xs text-[#464555]">Eksplor Jasa</Text>
        </View>

        <View className="flex-row items-center gap-x-2">
          <TouchableOpacity className="items-center justify-center w-10 h-10">
            <MaterialIcons name="search" size={24} color="#131b2e" />
          </TouchableOpacity>
          <TouchableOpacity className="items-center justify-center w-10 h-10 relative">
            <MaterialIcons name="notifications" size={24} color="#131b2e" />
            <View className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#ba1a1a] border border-[#faf8ff]" />
          </TouchableOpacity>
          <TouchableOpacity className="items-center justify-center ml-1">
            <Image
              source={{ uri: AVATAR_URI }}
              style={{ width: 32, height: 32, borderRadius: 16, backgroundColor: '#dae2fd' }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="px-4 pt-2 flex-col gap-y-4">
          <View className="flex-row items-center w-full gap-x-2">
            <View className="flex-1 h-12 rounded-xl bg-[#f2f3ff] flex-row items-center px-3 border border-[#e2e7ff]">
              <MaterialIcons name="search" size={20} color="#777587" />
              <TextInput
                className="flex-1 h-full ml-2 text-sm text-[#131b2e] font-medium"
                placeholder="Cari jasa atau nama penyedia..."
                placeholderTextColor="#777587"
              />
            </View>
            <TouchableOpacity className="w-12 h-12 rounded-xl bg-[#e2e7ff] items-center justify-center active:scale-95">
              <MaterialIcons name="tune" size={20} color="#464555" />
            </TouchableOpacity>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="-mx-4 px-4 pb-2">
            {FILTERS.map((item) => (
              <TouchableOpacity
                key={item.id}
                onPress={() => setActiveFilter(item.id)}
                className={`flex-row items-center gap-x-1.5 px-3.5 py-2 mr-2 rounded-full border transition-all ${
                  activeFilter === item.id
                    ? 'bg-[#3525cd] border-[#3525cd]'
                    : 'bg-[#ffffff] border-[#e2e7ff]'
                }`}
              >
                <MaterialIcons
                  name={item.icon as any}
                  size={16}
                  color={activeFilter === item.id ? '#ffffff' : item.color}
                />
                <Text
                  className={`text-xs font-bold ${
                    activeFilter === item.id ? 'text-white' : 'text-[#464555]'
                  }`}
                >
                  {item.label}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View className="px-4 pt-4 flex-col gap-y-3">
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center gap-x-2">
              <View className="w-1.5 h-4.5 rounded-full bg-[#3525cd]" />
              <Text className="text-base font-extrabold text-[#131b2e]">Kategori Populer</Text>
            </View>
            <TouchableOpacity className="flex-row items-center">
              <Text className="text-[11px] font-bold text-[#3525cd]">Semua</Text>
              <MaterialIcons name="chevron-right" size={16} color="#3525cd" />
            </TouchableOpacity>
          </View>

          <View className="flex-row flex-wrap justify-between gap-y-3">
            {CATEGORIES.map((cat) => (
              <TouchableOpacity
                key={cat.id}
                className="w-[48%] bg-white p-3 rounded-xl flex-row items-center gap-x-3 border border-[#f2f3ff] shadow-sm active:scale-98"
              >
                <View
                  className="w-10 h-10 rounded-xl items-center justify-center"
                  style={{ backgroundColor: cat.bg }}
                >
                  <MaterialIcons name={cat.icon as any} size={20} color={cat.text} />
                </View>
                <View className="flex-1 flex-col justify-center">
                  <Text className="text-xs font-extrabold text-[#131b2e] leading-tight" numberOfLines={2}>
                    {cat.name}
                  </Text>
                  <Text className="text-[10px] text-[#777587] mt-0.5">{cat.count}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View className="pt-8 flex-col gap-y-3">
          <View className="px-4 flex-row items-center justify-between">
            <View className="flex-col">
              <View className="flex-row items-center gap-x-2">
                <View className="w-1.5 h-4.5 rounded-full bg-[#00687a]" />
                <Text className="text-base font-extrabold text-[#131b2e]">Penyedia Populer</Text>
              </View>
              <Text className="text-[10px] font-medium text-[#777587] mt-0.5 ml-3.5">
                Direkomendasikan warga sekitar
              </Text>
            </View>
            <View className="flex-row gap-x-2">
              <TouchableOpacity className="w-7 h-7 rounded-full bg-[#f2f3ff] items-center justify-center active:bg-[#e2e7ff]">
                <MaterialIcons name="chevron-left" size={18} color="#131b2e" />
              </TouchableOpacity>
              <TouchableOpacity className="w-7 h-7 rounded-full bg-[#f2f3ff] items-center justify-center active:bg-[#e2e7ff]">
                <MaterialIcons name="chevron-right" size={18} color="#131b2e" />
              </TouchableOpacity>
            </View>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 16, gap: 12 }}
            snapToInterval={260 + 12} // width + gap
            decelerationRate="fast"
          >

            <View className="w-[260px] bg-white p-4 rounded-2xl shadow-sm border border-[#f2f3ff] flex-col justify-between min-h-[180px]">
              <View className="flex-col">
                <View className="flex-row justify-between items-start mb-3">
                  <View className="relative">
                    <Image
                      source={{ uri: SPECIALIST_1 }}
                      style={{ width: 48, height: 48, borderRadius: 24, backgroundColor: '#e2e7ff' }}
                    />
                    <View className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-[#6ffbbe] border-2 border-white" />
                  </View>
                  <View className="flex-row items-center gap-x-1 px-2 py-1 rounded-full bg-[#fffbeb]">
                    <MaterialIcons name="workspace-premium" size={12} color="#f59e0b" />
                    <Text className="text-[9px] font-bold text-[#b45309]">Top Seller</Text>
                  </View>
                </View>

                <View className="flex-row items-center gap-x-1">
                  <Text className="text-sm font-extrabold text-[#131b2e]" numberOfLines={1}>
                    Bramantyo Wicaksono
                  </Text>
                  <MaterialIcons name="verified" size={14} color="#005338" />
                </View>
                <Text className="text-[11px] text-[#464555] mt-0.5">UI/UX &amp; Branding Specialist</Text>

                <View className="flex-row items-center gap-x-1.5 mt-2.5 flex-wrap">
                  <MaterialIcons name="star" size={14} color="#f59e0b" />
                  <Text className="text-[11px] font-bold text-[#131b2e]">4.9</Text>
                  <Text className="text-[11px] text-[#777587]"> • 134 Ulasan • </Text>
                  <Text className="text-[11px] text-[#777587]" numberOfLines={1}>Jaksel (1.4 km)</Text>
                </View>
              </View>

              <View className="mt-4 pt-3 flex-row items-center justify-between border-t border-[#f2f3ff]">
                <View className="flex-col">
                  <Text className="text-[9px] font-bold text-[#777587] uppercase">Mulai dari</Text>
                  <Text className="text-sm font-extrabold text-[#3525cd]">Rp 350.000</Text>
                </View>
                <TouchableOpacity className="px-3 py-1.5 rounded-lg bg-[#3525cd] flex-row items-center gap-x-1.5 active:scale-95">
                  <MaterialIcons name="chat" size={14} color="#ffffff" />
                  <Text className="text-xs font-bold text-white">Hubungi</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View className="w-[260px] bg-white p-4 rounded-2xl shadow-sm border border-[#f2f3ff] flex-col justify-between min-h-[180px]">
              <View className="flex-col">
                <View className="flex-row justify-between items-start mb-3">
                  <View className="relative">
                    <Image
                      source={{ uri: SPECIALIST_2 }}
                      style={{ width: 48, height: 48, borderRadius: 24, backgroundColor: '#e2e7ff' }}
                    />
                    <View className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-[#6ffbbe] border-2 border-white" />
                  </View>
                </View>

                <View className="flex-row items-center gap-x-1">
                  <Text className="text-sm font-extrabold text-[#131b2e]" numberOfLines={1}>
                    Pak Joko Santoso
                  </Text>
                  <MaterialIcons name="verified" size={14} color="#005338" />
                </View>
                <Text className="text-[11px] text-[#464555] mt-0.5">Servis AC &amp; Kelistrikan</Text>

                <View className="flex-row items-center gap-x-1.5 mt-2.5 flex-wrap">
                  <MaterialIcons name="star" size={14} color="#f59e0b" />
                  <Text className="text-[11px] font-bold text-[#131b2e]">4.95</Text>
                  <Text className="text-[11px] text-[#777587]"> • 280 Ulasan • </Text>
                  <Text className="text-[11px] text-[#777587]" numberOfLines={1}>Depok (2.1 km)</Text>
                </View>
              </View>

              <View className="mt-4 pt-3 flex-row items-center justify-between border-t border-[#f2f3ff]">
                <View className="flex-col">
                  <Text className="text-[9px] font-bold text-[#777587] uppercase">Mulai dari</Text>
                  <Text className="text-sm font-extrabold text-[#3525cd]">Rp 85.000</Text>
                </View>
                <TouchableOpacity className="px-3 py-1.5 rounded-lg bg-[#3525cd] flex-row items-center gap-x-1.5 active:scale-95">
                  <MaterialIcons name="chat" size={14} color="#ffffff" />
                  <Text className="text-xs font-bold text-white">Hubungi</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>

        <View className="px-4 pt-8 flex-col gap-y-4">
          <View className="flex-row items-center justify-between">
            <View className="flex-col">
              <View className="flex-row items-center gap-x-2">
                <View className="w-1.5 h-4.5 rounded-full bg-[#006e4b]" />
                <Text className="text-base font-extrabold text-[#131b2e]">Permintaan Jasa Terbaru</Text>
              </View>
              <Text className="text-[10px] font-medium text-[#777587] mt-0.5 ml-3.5">
                Bidding terbuka • Kirim penawaran
              </Text>
            </View>
            <View className="bg-[#6ffbbe]/30 px-2.5 py-1 rounded-full flex-row items-center gap-x-1.5">
              <View className="w-1.5 h-1.5 rounded-full bg-[#006e4b]" />
              <Text className="text-[10px] font-bold text-[#005338]">18 Lowongan</Text>
            </View>
          </View>

          <View className="flex-col gap-y-4">
            <View className="bg-white p-4 rounded-2xl shadow-sm border border-[#f2f3ff] flex-col gap-y-3">
              <View className="flex-row items-start justify-between">
                <View className="flex-row items-center gap-x-2.5 flex-1 pr-2">
                  <View className="w-10 h-10 rounded-full bg-[#eaedff] items-center justify-center">
                    <Text className="text-base font-extrabold text-[#3525cd]">R</Text>
                  </View>
                  <View className="flex-col">
                    <Text className="text-sm font-extrabold text-[#131b2e]">Rian Pratama</Text>
                    <Text className="text-[10px] text-[#777587]">15 mnt lalu • Kebayoran Baru</Text>
                  </View>
                </View>
                <View className="bg-[#f2f3ff] px-2 py-1 rounded-lg">
                  <Text className="text-[10px] font-bold text-[#3525cd]">Budget ~Rp 1.2jt</Text>
                </View>
              </View>

              <View className="flex-col gap-y-1">
                <Text className="text-sm font-extrabold text-[#131b2e] leading-snug">
                  Perbaikan Pipa Air Bocor &amp; Instalasi Pompa Pendorong
                </Text>
                <Text className="text-xs text-[#464555] leading-relaxed" numberOfLines={2}>
                  Pipa utama dari tandon atas bocor di lantai 2 dan perlu instalasi pompa booster otomatis. Dicari teknisi bersertifikasi yang bisa datang hari ini.
                </Text>
              </View>

              <View className="flex-row flex-wrap gap-1.5">
                <View className="bg-[#eaedff] px-2 py-1 rounded-md"><Text className="text-[10px] font-bold text-[#464555]">Butuh Segera</Text></View>
                <View className="bg-[#eaedff] px-2 py-1 rounded-md"><Text className="text-[10px] font-bold text-[#464555]">On-Site</Text></View>
                <View className="bg-[#eaedff] px-2 py-1 rounded-md"><Text className="text-[10px] font-bold text-[#464555]">Garansi Diperlukan</Text></View>
              </View>

              <View className="pt-3 border-t border-[#f2f3ff] flex-row items-center justify-between mt-1">
                <View className="flex-row items-center gap-x-1.5">
                  <MaterialIcons name="group" size={16} color="#00687a" />
                  <Text className="text-[11px] text-[#464555]"><Text className="font-bold text-[#131b2e]">4 proposal</Text> masuk</Text>
                </View>
                <TouchableOpacity className="px-3 py-2 rounded-xl bg-[#eaedff] flex-row items-center gap-x-1.5 active:scale-95">
                  <MaterialIcons name="send" size={14} color="#3525cd" />
                  <Text className="text-[11px] font-bold text-[#3525cd]">Kirim Penawaran</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View className="bg-white p-4 rounded-2xl shadow-sm border border-[#f2f3ff] flex-col gap-y-3">
              <View className="flex-row items-start justify-between">
                <View className="flex-row items-center gap-x-2.5 flex-1 pr-2">
                  <View className="w-10 h-10 rounded-full bg-[#acedff] items-center justify-center">
                    <Text className="text-base font-extrabold text-[#006172]">K</Text>
                  </View>
                  <View className="flex-col">
                    <Text className="text-sm font-extrabold text-[#131b2e]">Kopi Titik Temu</Text>
                    <Text className="text-[10px] text-[#777587]">1 jam lalu • Remote</Text>
                  </View>
                </View>
                <View className="bg-[#f2f3ff] px-2 py-1 rounded-lg">
                  <Text className="text-[10px] font-bold text-[#3525cd]">Budget ~Rp 3.5jt</Text>
                </View>
              </View>

              <View className="flex-col gap-y-1">
                <Text className="text-sm font-extrabold text-[#131b2e] leading-snug">
                  Redesain Kemasan Kopi Drip Bag &amp; Master Box
                </Text>
                <Text className="text-xs text-[#464555] leading-relaxed" numberOfLines={2}>
                  Membutuhkan desainer grafis dengan portofolio packaging F&amp;B untuk membuat 3 varian desain sachet dan 1 gift box edisi Idul Fitri.
                </Text>
              </View>

              <View className="flex-row flex-wrap gap-1.5">
                <View className="bg-[#eaedff] px-2 py-1 rounded-md"><Text className="text-[10px] font-bold text-[#464555]">Remote Work</Text></View>
                <View className="bg-[#eaedff] px-2 py-1 rounded-md"><Text className="text-[10px] font-bold text-[#464555]">Tenggat 7 Hari</Text></View>
                <View className="bg-[#eaedff] px-2 py-1 rounded-md"><Text className="text-[10px] font-bold text-[#464555]">Branding</Text></View>
              </View>

              <View className="pt-3 border-t border-[#f2f3ff] flex-row items-center justify-between mt-1">
                <View className="flex-row items-center gap-x-1.5">
                  <MaterialIcons name="group" size={16} color="#00687a" />
                  <Text className="text-[11px] text-[#464555]"><Text className="font-bold text-[#131b2e]">11 proposal</Text> masuk</Text>
                </View>
                <TouchableOpacity className="px-3 py-2 rounded-xl bg-[#eaedff] flex-row items-center gap-x-1.5 active:scale-95">
                  <MaterialIcons name="send" size={14} color="#3525cd" />
                  <Text className="text-[11px] font-bold text-[#3525cd]">Kirim Penawaran</Text>
                </TouchableOpacity>
              </View>
            </View>

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}