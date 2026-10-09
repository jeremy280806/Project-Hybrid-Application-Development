import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';

export default function DashboardScreen() {
  const insets = useSafeAreaInsets();
  const BOTTOM_BAR_HEIGHT = 64 + insets.bottom;

  return (
    <SafeAreaView className="flex-1 bg-surface">
      <View className="h-16 px-4 flex-row items-center justify-between bg-surface border-b border-surface-container-high">
        <View className="flex-col">
          <Text className="font-extrabold text-lg text-primary tracking-tight leading-tight">ServiConnect</Text>
          <Text className="font-medium text-xs text-on-surface-variant">Beranda</Text>
        </View>
        <View className="flex-row items-center space-x-4">
          <TouchableOpacity>
            <MaterialIcons name="search" size={24} color="#1A1A2E" />
          </TouchableOpacity>
          <TouchableOpacity className="relative">
            <MaterialIcons name="notifications" size={24} color="#1A1A2E" />
            <View className="absolute top-0 right-0 w-2 h-2 rounded-full bg-error border border-surface" />
          </TouchableOpacity>
          <Image
            source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFPHg2dPEoST1H7o5t_um0rM7dPKycfPprxxw-uiNxGi2DGiMsFvrlbbfscpwbValeIm0Tjd0a8_NEi-Id5i0WlJ5sq3izUel8OVeo-Q5E1hgSwqQl_AhyfzJkpPIrM3z0iNQsEctynkrG4164Z5prsspWlaQa9p4NI5oWQcaURkV9lTF59gT-ZtcYgIQD_W-PskDBJkZzMA_0WMbslCAdhLGpbC-Kp0LPKEG5XOrnqi8VcIDrMsn_' }}
            className="w-9 h-9 rounded-full border-2 border-primary"
          />
        </View>
      </View>

      <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: BOTTOM_BAR_HEIGHT + 16 }}>
        <View className="flex-row items-center justify-between mb-4">
          <View className="flex-row items-center space-x-3">
            <View className="relative">
              <Image
                source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpb7zD1vW9I-BgTVWig8lvdHj5xMOeNRl5F2mSLGy93cosNJy0J0yGbrpQB_-JvJQrOHfwrRRrGjsM74yatS8jEAJ2bO3cJQizXPkj5RI1Dsd-mVknIV7Q4oGIiH06-odTH3JVj6NVf3WPk23Xzwe9dDttSzPKjpw9s1g43hqt08MFWPLjwTnkDm27cWpvkerB4OXL3DttKkqv2feX78mNXvDvjw0luktxIn9CyR_M58cYF2vR2P4I' }}
                className="w-12 h-12 rounded-full"
              />
              <View className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-secondary rounded-full border-2 border-surface" />
            </View>
            <View>
              <View className="flex-row items-center space-x-1">
                <Text className="font-bold text-base text-on-surface">Halo, Reza Ramadhan</Text>
                <MaterialIcons name="verified" size={14} color="#009688" />
              </View>
              <View className="flex-row items-center space-x-1">
                <View className="w-2 h-2 rounded-full bg-secondary" />
                <Text className="text-xs font-semibold text-secondary ml-1">Mode Menerima Pesanan</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity className="w-10 h-10 rounded-xl bg-surface-container-high items-center justify-center">
            <MaterialIcons name="tune" size={20} color="#5A5A7A" />
          </TouchableOpacity>
        </View>

        {/* ── TIPS CARD ── */}
        <View className="flex-row items-start space-x-3 p-4 bg-primary-fixed rounded-2xl mb-4 border border-primary-container">
          <View className="w-9 h-9 rounded-lg bg-primary items-center justify-center">
            <MaterialIcons name="tips-and-updates" size={18} color="#ffffff" />
          </View>
          <View className="flex-1">
            <View className="flex-row justify-between">
              <Text className="text-xs font-bold text-primary uppercase tracking-wide">Tips Mitra Cerdas</Text>
              <Text className="text-xs text-on-surface-variant">Baru</Text>
            </View>
            <Text className="text-xs text-on-surface-variant mt-1 leading-relaxed">
              2 penawaran jasa Anda sedang ditinjau calon klien. Respon cepat dalam 30 menit meningkatkan peluang closing.
            </Text>
          </View>
        </View>

        {/* ── BALANCE CARD ── */}
        <View className="p-4 bg-primary rounded-2xl mb-4 shadow-lg">
          <View className="flex-row justify-between mb-4">
            <View className="flex-row items-center space-x-1 bg-white/20 px-2 py-1 rounded-full">
              <MaterialIcons name="lock" size={12} color="#A0A0FF" />
              <Text className="text-xs text-white ml-1">BCA • Rek 829xxxx902</Text>
            </View>
            <View className="flex-row items-center space-x-1 bg-white/20 px-2 py-1 rounded-full">
              <MaterialIcons name="trending-up" size={12} color="#A0FFD0" />
              <Text className="text-xs text-white font-bold ml-1">+18.4%</Text>
            </View>
          </View>

          <Text className="text-xs text-white/70 font-medium">Saldo Siap Ditarik</Text>
          <View className="flex-row items-baseline mb-4">
            <Text className="text-white text-lg mr-1 font-semibold">Rp</Text>
            <Text className="text-white text-3xl font-extrabold tracking-tight">4.850.000</Text>
          </View>

          <View className="flex-row justify-between items-end border-t border-white/20 pt-3">
            <View>
              <Text className="text-xs text-white/70">Total Pendapatan Bulan Ini</Text>
              <Text className="text-white font-bold">Rp 12.350.000</Text>
            </View>
            <TouchableOpacity className="flex-row items-center bg-white px-3 py-2 rounded-xl">
              <MaterialIcons name="payments" size={16} color="#3D3DE8" />
              <Text className="text-primary font-bold ml-1.5">Tarik Saldo</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="flex-row justify-between mb-5">
          {[
            { icon: 'account-balance-wallet' as const, label: 'Tarik Saldo',   color: '#3D3DE8', bg: 'bg-primary-container' },
            { icon: 'add-circle'              as const, label: 'Tambah\nJasa',  color: '#009688', bg: 'bg-secondary-container' },
            { icon: 'qr-code-scanner'         as const, label: 'Scan Bayar',   color: '#1A1A2E', bg: 'bg-surface-container-high' },
            { icon: 'receipt-long'            as const, label: 'Laporan &\nInvoice', color: '#009688', bg: 'bg-tertiary-container' },
          ].map((item) => (
            <TouchableOpacity key={item.label} className="items-center bg-surface-container-lowest p-3 rounded-2xl shadow-sm w-[23%]">
              <View className={`w-10 h-10 rounded-xl ${item.bg} items-center justify-center mb-1.5`}>
                <MaterialIcons name={item.icon} size={20} color={item.color} />
              </View>
              <Text className="text-[9px] text-center font-semibold text-on-surface leading-tight">{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View className="flex-row flex-wrap justify-between mb-5">
          <View className="w-[48%] bg-surface-container-lowest p-4 rounded-2xl shadow-sm mb-3">
            <View className="flex-row justify-between items-center mb-2">
              <Text className="text-xs text-on-surface-variant font-medium">Pesanan Aktif</Text>
              <View className="bg-primary-container p-1.5 rounded-lg">
                <MaterialIcons name="pending-actions" size={14} color="#3D3DE8" />
              </View>
            </View>
            <Text className="text-xl font-extrabold text-on-surface">4 <Text className="text-sm font-normal text-on-surface-variant">Proyek</Text></Text>
            <Text className="text-[10px] text-secondary mt-1">● Sedang Berjalan</Text>
          </View>

          <View className="w-[48%] bg-surface-container-lowest p-4 rounded-2xl shadow-sm mb-3">
            <View className="flex-row justify-between items-center mb-2">
              <Text className="text-xs text-on-surface-variant font-medium">Selesai (Bln Ini)</Text>
              <View className="bg-secondary-container p-1.5 rounded-lg">
                <MaterialIcons name="check-circle" size={14} color="#009688" />
              </View>
            </View>
            <Text className="text-xl font-extrabold text-on-surface">28 <Text className="text-sm font-normal text-on-surface-variant">Pesanan</Text></Text>
            <Text className="text-[10px] text-secondary mt-1">✓ 100% on-Time</Text>
          </View>

          <View className="w-[48%] bg-surface-container-lowest p-4 rounded-2xl shadow-sm mb-3">
            <View className="flex-row justify-between items-center mb-2">
              <Text className="text-xs text-on-surface-variant font-medium">Rating Rata-rata</Text>
              <View className="bg-primary-container p-1.5 rounded-lg">
                <MaterialIcons name="star" size={14} color="#3D3DE8" />
              </View>
            </View>
            <Text className="text-xl font-extrabold text-on-surface">4.9 <Text className="text-sm font-normal text-on-surface-variant">/ 5.0</Text></Text>
            <Text className="text-[10px] text-on-surface-variant mt-1">96 ulasan terverifikasi</Text>
          </View>

          <View className="w-[48%] bg-surface-container-lowest p-4 rounded-2xl shadow-sm mb-3">
            <View className="flex-row justify-between items-center mb-2">
              <Text className="text-xs text-on-surface-variant font-medium">Tingkat Respons</Text>
              <View className="bg-secondary-container p-1.5 rounded-lg">
                <MaterialIcons name="bolt" size={14} color="#009688" />
              </View>
            </View>
            <Text className="text-xl font-extrabold text-on-surface">98<Text className="text-base font-normal text-on-surface-variant">%</Text></Text>
            <Text className="text-[10px] text-on-surface-variant mt-1">Rata-rata &lt; 15 mnt</Text>
          </View>
        </View>

        <View className="mb-4">
          <View className="flex-row justify-between items-center mb-3">
            <View className="flex-row items-center space-x-2">
              <Text className="text-base font-bold text-on-surface">Pesanan Pelanggan</Text>
              <View className="bg-primary px-2 py-0.5 rounded-full">
                <Text className="text-white text-[10px] font-bold">4 Aktif</Text>
              </View>
            </View>
            <TouchableOpacity>
              <Text className="text-primary text-xs font-semibold">Lihat Semua</Text>
            </TouchableOpacity>
          </View>

          <View className="flex-row space-x-2 mb-3">
            {['Sedang Dikerjakan (4)', 'Menunggu Review (2)', 'Skip'].map((tab, i) => (
              <TouchableOpacity
                key={tab}
                className={`px-3 py-1.5 rounded-full ${i === 0 ? 'bg-primary' : 'bg-surface-container-high'}`}
              >
                <Text className={`text-[10px] font-semibold ${i === 0 ? 'text-white' : 'text-on-surface-variant'}`}>{tab}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <View className="bg-surface-container-lowest p-4 rounded-2xl shadow-sm mb-3 border border-surface-container-high">
            <View className="flex-row justify-between items-center mb-3">
              <View className="flex-row items-center space-x-2">
                <Text className="text-xs font-bold text-on-surface-variant">#SC-8921</Text>
                <View className="bg-primary-container px-2 py-0.5 rounded-full">
                  <Text className="text-primary text-[10px] font-bold">Sedang Dikerjakan</Text>
                </View>
              </View>
              <View className="bg-error-container px-2 py-0.5 rounded-full flex-row items-center">
                <MaterialIcons name="timer" size={10} color="#BA1A1A" />
                <Text className="text-error text-[10px] font-bold ml-1">1 Hari 6 Jam</Text>
              </View>
            </View>

            <View className="flex-row mb-3">
              <Image
                source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmw1vniv4-kF0cIFF7cmsc355hyEaaDmRF3df7SiFVzIt4gcXPMUGeJ0T5ZxUpXM_LeEv1zDQIfTpuxzdZBLvwlimhueASiWF3fiPmlbjztP6WB7fCg1crP_EHAKQn9480TWigNXlz8VMUwJH_o0X_Ro5p4bnjxlzgser8YC_0CI8A6AQh37Y-I9G4MMRNqYUm9xrtZ7W2xR1NpuaBg5xhURtPFUI9cc-NJOuVVICg_LOFTQkxUS7H' }}
                className="w-10 h-10 rounded-full mr-3"
              />
              <View className="flex-1">
                <View className="flex-row items-center space-x-1">
                  <Text className="font-bold text-sm text-on-surface">Budi Santoso</Text>
                  <MaterialIcons name="verified" size={12} color="#009688" />
                </View>
                <Text className="text-xs text-on-surface-variant">PT Inovasi Digital Nusantara</Text>
                <Text className="text-sm font-bold text-primary mt-0.5">Desain UI/UX Mobile App (Figma Prototype)</Text>
              </View>
            </View>

            <View className="flex-row justify-between bg-surface-container-low p-3 rounded-xl mb-3">
              <View>
                <Text className="text-[10px] text-on-surface-variant">Status Escrow</Text>
                <Text className="text-xs font-bold text-secondary">Dana Diamankan</Text>
              </View>
              <View className="items-end">
                <Text className="text-[10px] text-on-surface-variant">Biaya Proyek</Text>
                <Text className="text-sm font-bold text-on-surface">Rp 1.500.000</Text>
              </View>
            </View>

            <View className="flex-row space-x-2">
              <TouchableOpacity className="flex-1 flex-row justify-center items-center bg-surface-container-low py-2.5 rounded-xl">
                <MaterialIcons name="chat" size={14} color="#3D3DE8" />
                <Text className="text-xs font-bold text-primary ml-1">Chat Klien</Text>
              </TouchableOpacity>
              <TouchableOpacity className="flex-1 flex-row justify-center items-center bg-primary py-2.5 rounded-xl">
                <MaterialIcons name="upload-file" size={14} color="#ffffff" />
                <Text className="text-xs font-bold text-white ml-1">Kirim Progres</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

      </ScrollView>

      <View
        style={{ height: BOTTOM_BAR_HEIGHT, paddingBottom: insets.bottom }}
        className="absolute bottom-0 w-full flex-row bg-surface-container-lowest border-t border-surface-container-high justify-around items-center px-2"
      >
        <TouchableOpacity className="items-center flex-1">
          <MaterialIcons name="home" size={24} color="#3D3DE8" />
          <Text className="text-[10px] text-primary font-bold mt-0.5">Beranda</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center flex-1">
          <MaterialIcons name="explore" size={24} color="#9090B0" />
          <Text className="text-[10px] text-outline mt-0.5">Eksplor</Text>
        </TouchableOpacity>

        <TouchableOpacity className="items-center justify-center w-14 h-14 rounded-full bg-primary -mt-6 shadow-lg border-4 border-surface flex-1">
          <MaterialIcons name="add" size={28} color="#ffffff" />
        </TouchableOpacity>

        <TouchableOpacity className="items-center flex-1">
          <MaterialIcons name="chat-bubble-outline" size={24} color="#9090B0" />
          <Text className="text-[10px] text-outline mt-0.5">Pesan</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center flex-1">
          <MaterialIcons name="account-circle" size={24} color="#9090B0" />
          <Text className="text-[10px] text-outline mt-0.5">Profil</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}