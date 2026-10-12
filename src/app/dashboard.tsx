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

type MaterialIconName = React.ComponentProps<typeof MaterialIcons>['name'];

function AppHeader() {
  return (
    <View className="h-16 px-4 flex-row items-center justify-between bg-surface/85 border-b border-surface-container-high">
      <View className="flex-col">
        <Text className="font-extrabold text-lg text-primary tracking-tight leading-tight">
          ServiConnect
        </Text>
        <Text className="font-medium text-xs text-on-surface-variant">Beranda</Text>
      </View>
      <View className="flex-row items-center gap-x-1">
        <TouchableOpacity className="w-11 h-11 items-center justify-center">
          <MaterialIcons name="search" size={24} color="#131b2e" />
        </TouchableOpacity>
        <TouchableOpacity className="w-11 h-11 items-center justify-center relative">
          <MaterialIcons name="notifications" size={24} color="#131b2e" />
          <View className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-error" />
        </TouchableOpacity>
        <View className="w-11 h-11 items-center justify-center">
          <Image
            source={{
              uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFPHg2dPEoST1H7o5t_um0rM7dPKycfPprxxw-uiNxGi2DGiMsFvrlbbfscpwbValeIm0Tjd0a8_NEi-Id5i0WlJ5sq3izUel8OVeo-Q5E1hgSwqQl_[REDACTED: credential]-ZtcYgIQD_W-PskDBJkZzMA_0WMbslCAdhLGpbC-Kp0LPKEG5XOrnqi8VcIDrMsn_',
            }}
            className="w-8 h-8 rounded-full"
          />
        </View>
      </View>
    </View>
  );
}

function GreetingSection() {
  const [isAvailable, setIsAvailable] = useState(true);

  return (
    <View className="flex-row items-center justify-between pt-1">
      <View className="flex-col">
        <View className="flex-row items-center gap-x-1">
          <Text className="font-bold text-2xl text-on-surface">Halo, Reza</Text>
          <Text className="text-2xl">👋</Text>
        </View>
        <Text className="text-xs text-on-surface-variant mt-0.5">
          Siap menerima tawaran proyek hari ini?
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => setIsAvailable(!isAvailable)}
        className={`flex-row items-center gap-x-1.5 px-3 py-1.5 rounded-full shadow-sm ${
          isAvailable
            ? 'bg-tertiary-fixed'
            : 'bg-surface-container-high'
        }`}
      >
        <View
          className={`w-2 h-2 rounded-full ${
            isAvailable ? 'bg-tertiary' : 'bg-outline'
          }`}
        />
        <Text
          className={`text-[11px] font-bold tracking-wide uppercase ${
            isAvailable ? 'text-on-tertiary-fixed' : 'text-on-surface-variant'
          }`}
        >
          {isAvailable ? 'Terima Pesanan' : 'Istirahat / Sibuk'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

function BalanceCard() {
  const quickActions: { icon: MaterialIconName; label: string; badge?: string }[] = [
    { icon: 'payments', label: 'Tarik Dana' },
    { icon: 'add-circle-outline', label: 'Buat Jasa' },
    { icon: 'pending-actions', label: 'Pesanan', badge: '4' },
    { icon: 'work-outline', label: 'Cari Proyek' },
  ];

  return (
    <View className="rounded-xl bg-primary p-4 shadow-md overflow-hidden">
      <View className="flex-row items-start justify-between mb-1">
        <View>
          <View className="flex-row items-center gap-x-1.5 opacity-85">
            <MaterialIcons name="account-balance-wallet" size={16} color="#ffffff" />
            <Text className="text-xs text-white">Saldo Siap Ditarik</Text>
          </View>
          <Text className="text-3xl font-extrabold text-white tracking-tight mt-1">
            Rp 4.850.000
          </Text>
        </View>
        <TouchableOpacity className="flex-row items-center gap-x-1 px-3 py-1.5 rounded-lg bg-white/20">
          <MaterialIcons name="history" size={16} color="#ffffff" />
          <Text className="text-xs text-white font-medium">Riwayat</Text>
        </TouchableOpacity>
      </View>

      <View className="flex-row justify-between mt-5 pt-3.5 border-t border-white/20">
        {quickActions.map((action) => (
          <TouchableOpacity key={action.label} className="flex-1 items-center gap-y-1.5">
            <View className="w-11 h-11 rounded-full bg-white/15 items-center justify-center relative">
              <MaterialIcons name={action.icon} size={20} color="#ffffff" />
              {action.badge && (
                <View className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-secondary-container items-center justify-center">
                  <Text className="text-[10px] font-bold text-on-secondary-container leading-none">
                    {action.badge}
                  </Text>
                </View>
              )}
            </View>
            <Text className="text-[11px] text-white text-center leading-tight">{action.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

function StatsStrip() {
  return (
    <View className="flex-row gap-x-2 bg-surface-container-low p-2 rounded-xl">
      <View className="flex-1 items-center py-2 px-1 rounded-lg bg-surface-container-lowest shadow-sm">
        <Text className="text-xl font-extrabold text-primary">4</Text>
        <Text className="text-[11px] text-on-surface-variant font-medium mt-0.5 text-center">
          Proyek Aktif
        </Text>
      </View>
      <View className="flex-1 items-center py-2 px-1 rounded-lg bg-surface-container-lowest shadow-sm">
        <View className="flex-row items-center gap-x-0.5">
          <Text className="text-xl font-extrabold text-on-surface">4.9</Text>
          <MaterialIcons name="star" size={18} color="#F59E0B" />
        </View>
        <Text className="text-[11px] text-on-surface-variant font-medium mt-0.5 text-center">
          96 Ulasan
        </Text>
      </View>
      <View className="flex-1 items-center py-2 px-1 rounded-lg bg-surface-container-lowest shadow-sm">
        <Text className="text-base font-bold text-secondary" numberOfLines={1}>
          Rp 12.3jt
        </Text>
        <Text className="text-[11px] text-on-surface-variant font-medium mt-0.5 text-center">
          Bulan Ini
        </Text>
      </View>
    </View>
  );
}

function UrgentOrderSpotlight() {
  return (
    <View className="flex-col gap-y-2.5">
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center gap-x-1.5">
          <MaterialIcons name="priority-high" size={20} color="#3525cd" />
          <Text className="text-base font-bold text-on-surface">Pesanan Mendesak</Text>
        </View>
        <TouchableOpacity className="flex-row items-center">
          <Text className="text-xs font-semibold text-primary">Lihat Semua (4)</Text>
          <MaterialIcons name="chevron-right" size={16} color="#3525cd" />
        </TouchableOpacity>
      </View>

      <View className="bg-surface-container-lowest rounded-xl p-4 shadow-sm gap-y-3">
        <View className="flex-row items-start justify-between gap-x-2">
          <View className="flex-row items-center gap-x-2.5 flex-1 min-w-0">
            <Image
              source={{
                uri: 'https://lh3.googleusercontent.com/aida-[REDACTED: credential]_YDDP4Rqr2Mq-[REDACTED: credential]_DGjiaKcmTbiABLWBVp1H_XyT7koQHOzTO_ptegVRX6_BNS0Ef7YzXq',
              }}
              className="w-10 h-10 rounded-full shrink-0"
            />
            <View className="flex-col min-w-0">
              <Text className="text-sm font-semibold text-on-surface" numberOfLines={1}>
                Budi Santoso
              </Text>
              <Text className="text-xs text-on-surface-variant">Order #SC-8921</Text>
            </View>
          </View>
          <View className="flex-row items-center gap-x-1 px-2.5 py-1 rounded-full bg-error-container shrink-0">
            <MaterialIcons name="timer" size={14} color="#BA1A1A" />
            <Text className="text-[11px] font-bold text-error">1 Hari 6 Jam</Text>
          </View>
        </View>

        <View className="flex-col gap-y-1.5 bg-surface-container-low p-2.5 rounded-lg">
          <View className="flex-row items-center justify-between">
            <Text className="text-xs font-semibold text-on-surface">Desain UI/UX Mobile App</Text>
            <Text className="text-xs font-bold text-primary">Milestone 2/3</Text>
          </View>
          <View className="w-full h-2 rounded-full bg-surface-container-highest overflow-hidden">
            <View className="h-full rounded-full bg-primary" style={{ width: '66%' }} />
          </View>
          <View className="flex-row items-center justify-between">
            <Text className="text-[10px] text-on-surface-variant">Revisi wireframe final</Text>
            <Text className="text-[10px] text-on-surface-variant">66% rampung</Text>
          </View>
        </View>

        <View className="flex-row gap-x-2 pt-1">
          <TouchableOpacity className="flex-1 py-2 rounded-lg bg-surface-container items-center justify-center">
            <Text className="text-sm font-semibold text-on-surface">Detail Pesanan</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center justify-center gap-x-1.5 px-4 py-2 rounded-lg bg-primary-container shadow-sm">
            <MaterialIcons name="chat" size={18} color="#ffffff" />
            <Text className="text-sm font-bold text-on-primary">Chat Klien</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

function CommunityFeed() {
  const filters = ['Semua', 'Permintaan Klien', 'Showcase Portofolio', 'Teknisi & IT'];
  const [activeFilter, setActiveFilter] = useState(0);

  return (
    <View className="flex-col gap-y-3">
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center gap-x-1.5">
          <MaterialIcons name="dynamic-feed" size={20} color="#00687a" />
          <Text className="text-base font-bold text-on-surface">Eksplor Komunitas & Jasa</Text>
        </View>
        <Text className="text-xs text-on-surface-variant">Real-time</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 8, paddingBottom: 4 }}
      >
        {filters.map((filter, i) => (
          <TouchableOpacity
            key={filter}
            onPress={() => setActiveFilter(i)}
            className={`px-3.5 py-1.5 rounded-full shrink-0 ${
              activeFilter === i ? 'bg-primary-container shadow-sm' : 'bg-surface-container-high'
            }`}
          >
            <Text
              className={`text-xs font-semibold ${
                activeFilter === i ? 'text-on-primary' : 'text-on-surface-variant'
              }`}
            >
              {filter}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View className="bg-surface-container-lowest rounded-xl p-4 shadow-sm gap-y-3">
        <View className="flex-row items-start justify-between gap-x-2">
          <View className="flex-row items-center gap-x-2.5 flex-1 min-w-0">
            <Image
              source={{
                uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwTpR-i3w1JrYXXidIb_GKLcPAmiAVNol5LjAThntagykO3LWDAvWT6T08eD_6YKOGKiu388G_lS0pMLPnCwj5_xn4B4_[REDACTED: credential]-902E24bpG4k8l-hhAQqWT_pfUmr7I3',
              }}
              className="w-10 h-10 rounded-full shrink-0"
            />
            <View className="flex-col min-w-0">
              <View className="flex-row items-center gap-x-1">
                <Text className="text-sm font-semibold text-on-surface" numberOfLines={1}>
                  Siti Nadia
                </Text>
                <MaterialIcons name="verified" size={16} color="#005338" />
              </View>
              <Text className="text-[11px] text-on-surface-variant">15 menit yang lalu • Bandung</Text>
            </View>
          </View>
          <View className="px-2.5 py-1 rounded-full bg-secondary-fixed shrink-0">
            <Text className="text-[11px] font-semibold text-on-secondary-fixed">Dicari Segera</Text>
          </View>
        </View>

        <View className="flex-col gap-y-1">
          <Text className="text-sm font-semibold text-on-surface">
            Desain Feed Instagram UMKM Kuliner (12 Post)
          </Text>
          <Text className="text-xs text-on-surface-variant leading-relaxed" numberOfLines={3}>
            Dibutuhkan desainer grafis kreatif untuk template promosi menu Ramadhan. Style modern,
            ceria, dan siap posting dalam 2 hari. Bahan foto produk sudah lengkap.
          </Text>
        </View>

        <View className="flex-row items-center justify-between p-2.5 rounded-lg bg-surface-container-low">
          <View>
            <Text className="text-[10px] text-on-surface-variant">Estimasi Anggaran</Text>
            <Text className="text-sm font-bold text-primary">Rp 500rb - 1.2jt</Text>
          </View>
          <View className="flex-row items-center gap-x-1">
            <MaterialIcons name="schedule" size={18} color="#777587" />
            <Text className="text-xs font-semibold text-on-surface">Target: 2 Hari</Text>
          </View>
        </View>

        <View className="flex-row items-center justify-between pt-1">
          <View className="flex-row items-center gap-x-3">
            <TouchableOpacity className="flex-row items-center gap-x-1">
              <MaterialIcons name="favorite-border" size={18} color="#777587" />
              <Text className="text-xs text-on-surface-variant">18</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center gap-x-1">
              <MaterialIcons name="forum" size={18} color="#777587" />
              <Text className="text-xs text-on-surface-variant">5 Tawaran</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity className="flex-row items-center gap-x-1.5 px-4 py-2 rounded-lg bg-primary shadow-sm">
            <MaterialIcons name="send" size={18} color="#ffffff" />
            <Text className="text-xs font-bold text-white">Kirim Tawaran</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="bg-surface-container-lowest rounded-xl p-4 shadow-sm gap-y-3">
        <View className="flex-row items-start justify-between gap-x-2">
          <View className="flex-row items-center gap-x-2.5 flex-1 min-w-0">
            <Image
              source={{
                uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4EsCbOf0_[REDACTED: credential]-aSaYEOGyoPH_VVLLa4f6oM64RluBFxS5bMNvyfD_[REDACTED: credential]-pU0rwQot1_ebHgf81LeMasAQfI1C74Lp_j_2JVc7FFCEj7_I-b',
              }}
              className="w-10 h-10 rounded-full shrink-0"
            />
            <View className="flex-col min-w-0">
              <View className="flex-row items-center gap-x-1">
                <Text className="text-sm font-semibold text-on-surface" numberOfLines={1}>
                  Rian Pratama
                </Text>
                <View className="px-1.5 py-0.5 rounded bg-tertiary-fixed">
                  <Text className="text-[10px] font-bold text-on-tertiary-fixed">PRO</Text>
                </View>
              </View>
              <View className="flex-row items-center gap-x-1">
                <MaterialIcons name="star" size={14} color="#F59E0B" />
                <Text className="text-xs font-bold text-on-surface">5.0</Text>
                <Text className="text-[11px] text-on-surface-variant">(142 ulasan) • Teknisi AC</Text>
              </View>
            </View>
          </View>
          <View className="flex-row items-center gap-x-1 px-2 py-0.5 rounded-full bg-surface-container-high shrink-0">
            <MaterialIcons name="verified-user" size={14} color="#777587" />
            <Text className="text-[11px] text-on-surface-variant">Garansi 30 Hari</Text>
          </View>
        </View>

        <View className="w-full h-36 rounded-lg overflow-hidden">
          <Image
            source={{
              uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-tyXoaPuwVIY39a_nMW58G4YMhLd9ZBBDvSHhVRONHd_6XrpoanafuD-[REDACTED: credential]-kZXJ85YDwZDDIO9Qz-[REDACTED: credential]',
            }}
            className="w-full h-full"
            resizeMode="cover"
          />
        </View>

        <View className="flex-row items-center justify-between pt-1">
          <View>
            <Text className="text-[10px] text-on-surface-variant">Mulai Dari</Text>
            <View className="flex-row items-baseline gap-x-0.5">
              <Text className="text-base font-bold text-primary">Rp 75.000</Text>
              <Text className="text-xs text-on-surface-variant">/unit</Text>
            </View>
          </View>
          <View className="flex-row items-center gap-x-2">
            <TouchableOpacity className="w-9 h-9 rounded-lg bg-surface-container items-center justify-center">
              <MaterialIcons name="bookmark-border" size={20} color="#131b2e" />
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center gap-x-1.5 px-3.5 py-2 rounded-lg bg-secondary shadow-sm">
              <MaterialIcons name="chat" size={18} color="#ffffff" />
              <Text className="text-xs font-bold text-on-secondary">Pesan Cepat</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

export default function DashboardScreen() {
  const insets = useSafeAreaInsets();
  const BOTTOM_BAR_HEIGHT = 64 + insets.bottom;

  return (
    <SafeAreaView className="flex-1 bg-surface">
      <AppHeader />

      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingTop: 16,
          paddingBottom: BOTTOM_BAR_HEIGHT + 16,
          gap: 20,
        }}
        showsVerticalScrollIndicator={false}
      >
        <GreetingSection />
        <BalanceCard />
        <StatsStrip />
        <UrgentOrderSpotlight />
        <CommunityFeed />
      </ScrollView>

      {/* Bottom Navigation */}
      <View
        style={{ height: BOTTOM_BAR_HEIGHT, paddingBottom: insets.bottom }}
        className="absolute bottom-0 w-full flex-row bg-surface/90 border-t border-surface-container-high justify-around items-center px-2"
      >
        <TouchableOpacity className="flex-1 items-center justify-center h-full">
          <MaterialIcons name="home" size={24} color="#3525cd" />
          <Text className="text-[10px] text-primary font-bold mt-0.5">Beranda</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-1 items-center justify-center h-full">
          <MaterialIcons name="explore" size={24} color="#9090B0" />
          <Text className="text-[10px] text-outline mt-0.5">Eksplor</Text>
        </TouchableOpacity>
        <View className="flex-1 items-center justify-center">
          <TouchableOpacity className="w-12 h-12 rounded-full bg-primary-container items-center justify-center -mt-6 shadow-lg">
            <MaterialIcons name="add" size={28} color="#ffffff" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity className="flex-1 items-center justify-center h-full">
          <MaterialIcons name="chat-bubble-outline" size={24} color="#9090B0" />
          <Text className="text-[10px] text-outline mt-0.5">Pesan</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-1 items-center justify-center h-full">
          <MaterialIcons name="account-circle" size={24} color="#9090B0" />
          <Text className="text-[10px] text-outline mt-0.5">Profil</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}